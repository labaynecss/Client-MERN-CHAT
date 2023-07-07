import { useContext, useEffect, useState } from "react";
import { Sidelink } from "./components/Sidelink";
import { SideChat } from "./components/SideChat";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import { UserContext } from "./UserContext";
import _ from "lodash";

export default function Chat() {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeolple] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { username, id } = useContext(UserContext);
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4040");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
  }, []);

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

  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    console.log({ ev, messageData });

    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      setMessages((prev) => [...prev, { isOur: true, text: messageData.text }]);
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
    setMessages((prev) => [...prev, { text: newMessageText, isOur: true }]);
  }

  const onlinePeopleExclourUser = { ...onlinePeople };
  delete onlinePeopleExclourUser[id];

  const messagesWithoutDupes = _.uniqBy(messages, "id");
  return (
    <div className="flex h-screen max-w-full  bg-[#151515]">
      <Navbar />
      <Sidelink />
      <SideChat
        onlinePeopleExclourUser={onlinePeopleExclourUser}
        onlinePeople={onlinePeople}
        setSelectedUserId={setSelectedUserId}
        selectedUserId={selectedUserId}
      />
      <Message
        selectedUserId={selectedUserId}
        newMessageText={newMessageText}
        setNewMessageText={setNewMessageText}
        sendMessage={sendMessage}
        messages={messages}
        messagesWithoutDupes={messagesWithoutDupes}
      />
    </div>
  );
}
