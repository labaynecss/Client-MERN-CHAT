import TelegramIcon from '@mui/icons-material/Telegram';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

import Person from './Person';

export default function Message({
  selectedUserId,
  newMessageText,
  setNewMessageText,
  sendMessage,
  messagesWithoutDupes,
  divUnderMessages,
  onlinePeopleExclourUser,
  setSelectedUserId,
  offlinePeolple,
}) {
  const { id, username } = useContext(UserContext);

  return (
    <>
      <div className=" w-[880px] h-[125px] absolute top-2 left-[455px] flex ">
        {Object.keys(onlinePeopleExclourUser).map((userId) => (
          <Person
            userId={userId}
            username={onlinePeopleExclourUser[userId]}
            onClick={() => {
              setSelectedUserId(userId);
              console.log({ userId });
            }}
            selected={userId === selectedUserId}
          />
        ))}

        {Object.keys(offlinePeolple).map((userId) => (
          <Person
            key={userId}
            id={userId}
            online={false}
            username={offlinePeolple[userId].username}
            onClick={() => setSelectedUserId(userId)}
            selected={userId === selectedUserId}
          />
        ))}
        <div className="absolute flex flex-col h-[415px] w-[880px]   border-t-2 border-b-2 border-t-[#373636]  border-[#373636] p-2 top-[110px] overflow-y-auto">
          <div className="flex-grow flex -top-0 relative">
            {!selectedUserId ? (
              <div className="text-gray-400 items-center justify-center h-full">
                &larr; Select a person from the sidebar
              </div>
            ) : (
              <div className="relative top-0 h-full w-full right-0 left-0 bottom-2">
                {messagesWithoutDupes.map((message) => (
                  <div
                    className={
                      message.sender === id ? 'text-right' : 'text-left'
                    }
                    key={message._id}>
                    <div
                      className={
                        'p-2 my-2 inline-block text-left text-white text-sm ' +
                        (message.sender === id
                          ? 'bg-[#808080] rounded-md'
                          : 'bg-[#ffa31a] rounded-md')
                      }>
                      {/* sender: {message.sender} <br /> */}
                      {/* my ID: {id} <br /> */}
                      {message.text}
                    </div>
                    <div ref={divUnderMessages}></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {!!selectedUserId && (
        <form
          className="flex gap-2  top-[555px] fixed left-[444px]"
          onSubmit={sendMessage}>
          <input
            type="text"
            value={newMessageText}
            onChange={(ev) => setNewMessageText(ev.target.value)}
            className="bg-[#292929] flex-grow  rounded-md py-2 h-[55px] w-[882px]  text-sm pl-2 text-white mx-2"
            placeholder="type a message ..."
          />
          <button className="text-gray-600 relative -left-16 " type="submit">
            <div className="w-9  h-9 text-white rounded-full items-center justify-center flex bg-[#ffa31a]">
              <TelegramIcon />
            </div>
          </button>
        </form>
      )}
    </>
  );
}
