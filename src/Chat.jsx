import { useEffect, useState } from 'react';
import { Sidelink } from './components/Sidelink';
import { SideChat } from './components/SideChat';
import Message from './components/Message';
import Navbar from './components/Navbar';

export default function Chat() {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:4040');
    setWs(ws);
    ws.addEventListener('message', handleMessage);
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
    if ('online' in messageData) {
      showOnlinePeople(messageData.online);
    }
  }

  return (
    <div className="flex h-screen max-w-full bg-gray-200">
      <Navbar />
      <Sidelink />
      <SideChat />
      <Message />
    </div>
  );
}
