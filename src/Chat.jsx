import { useContext, useEffect, useRef, useState } from "react";
import { SideChat } from "./components/SideChat";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import { UserContext } from "./UserContext";
import { filter, uniqBy } from "lodash";
import axios from "axios";

export default function Chat() {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeolple] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { username, id, setId, setUsername } = useContext(UserContext);
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const divUnderMessages = useRef();

  useEffect(() => {
    connectToWs();
  }, []);

  function connectToWs() {
    const ws = new WebSocket("wss://https://cloudy-lion-sneakers.cyclic.app");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect.");
        connectToWs();
      }, 1000);
    });
  }
  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    setOnlinePeolple(people);
  }

  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    console.log({ ev, messageData });

    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else {
      setMessages((prev) => [
        ...prev,
        { isOur: false, text: messageData.text },
      ]);
    }
  }

  function logout() {
    axios.post("/logout").then(() => {
      setId(null), setUsername(null);
    });
  }

  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    console.log({ ev, messageData });

    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      setMessages((prev) => [...prev, { ...messageData }]);
    }
  }
  function sendMessage(ev) {
    ev.preventDefault();

    ws.send(
      JSON.stringify({
        recipient: selectedUserId,
        text: newMessageText,
      })
    );
    setNewMessageText("");
    console.log("Message sent");
    setMessages((prev) => [
      ...prev,
      {
        text: newMessageText,
        sender: id,
        recipient: selectedUserId,
        _id: Date.now(),
      },
    ]);
  }

  useEffect(() => {
    if (selectedUserId) {
      axios
        .get("/messages/" + selectedUserId)
        .then((res) => {
          setMessages(res.data);
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error("Error fetching messages:", error);
        });
    }
  }, [selectedUserId]);

  useEffect(() => {
    const div = divUnderMessages.current;

    if (div) {
      div.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  useEffect(() => {
    axios.get("/people").then((res) => {
      const offlinePeopleArr = res.data
        .filter((p) => p._id !== id)
        .filter((p) => !Object.keys(onlinePeople).includes(p._id));
      const offlinePeople = {};
      offlinePeopleArr.forEach((p) => {
        offlinePeople[p._id] = p;
      });
      setOfflinePeople(offlinePeople);
    });
  }, [onlinePeople]);

  const onlinePeopleExclourUser = { ...onlinePeople };
  delete onlinePeopleExclourUser[id];

  const messagesWithoutDupes = uniqBy(messages, "_id");

  return (
    <div className="flex flex-col h-screen max-w-full bg-[#151515]">
      <Navbar logout={logout} />
      <div className="flex flex-col md:flex-row flex-grow">
        {/* <Sidelink /> */}
        <div className="flex-wrap">
          <SideChat
            onlinePeopleExclourUser={onlinePeopleExclourUser}
            onlinePeople={onlinePeople}
            setSelectedUserId={setSelectedUserId}
            selectedUserId={selectedUserId}
            offlinePeolple={offlinePeople}
          />

          <Message
            onlinePeopleExclourUser={onlinePeopleExclourUser}
            onlinePeople={onlinePeople}
            selectedUserId={selectedUserId}
            newMessageText={newMessageText}
            setNewMessageText={setNewMessageText}
            sendMessage={sendMessage}
            messagesWithoutDupes={messagesWithoutDupes}
            divUnderMessages={divUnderMessages}
            setSelectedUserId={setSelectedUserId}
            offlinePeolple={offlinePeople}
          />
        </div>
      </div>
    </div>
  );
}
