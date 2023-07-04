import { useEffect, useState } from "react";
import { Sidelink } from "./components/Sidelink";
import { SideChat } from "./components/SideChat";

export default function Chat() {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4040");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
  }, []);

  function showOnlinePeople(peopleArray) {
    const people = new Set();
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    console.log(people);
  }

  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    }
  }

  return (
    <div className="flex h-screen">
      <Sidelink />
      <SideChat />
      <div className=" flex flex-col bg-slate-200 w-full p-2">
        <div className="flex-grow text-gray-300">Peoples</div>

        <div className="flex gap-2 mx-2">
          <input
            type="text "
            className="bg-white flex-grow border p-2 rounded-md h-auto"
            placeholder="type a message ..."
          />
          <button className=" text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
