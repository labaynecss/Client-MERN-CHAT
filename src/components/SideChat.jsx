import React from 'react';
import Contact from './Contact';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export const SideChat = ({
  onlinePeopleExclourUser,
  selectedUserId,
  setSelectedUserId,
  offlinePeolple,
}) => {
  return (
    <div className="bg-[#1b1b1b] h-[610px] w-[335px] absolute left-[96px] top-[35px] rounded-md">
      <div className="flex flex-row items-center pt-5 pl-4">
        <label htmlFor="text" className="flex justify-left  ">
          <h1 className="text-white text-[24px] font-mono font-semibold">
            Chats
          </h1>
        </label>
        <div className="flex gap-2">
          <div className=" ml-[140px]  h-9 w-11 rounded-md  bg-[#373636]  text-white justify-center flex items-center">
            <Groups2RoundedIcon style={{ fontSize: 20 }} />
          </div>
          <div className="  h-9 w-11 rounded-md  bg-[#373636]  text-white justify-center flex items-center ">
            <ChatOutlinedIcon style={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
      <div className="mt-8 py-3 flex justify-center px-5 ">
        <input
          type="text"
          className="px-4 w-full h-[38px] bg-[#292929] text-white rounded-md"
          placeholder="Search chat"
        />
      </div>

      <div className="relative top-6   h-[70%] overflow-y-scroll ">
        {Object.keys(onlinePeopleExclourUser).map((userId) => (
          <Contact
            key={userId}
            id={userId}
            online={true}
            username={onlinePeopleExclourUser[userId]}
            onClick={() => {
              setSelectedUserId(userId);
              console.log({ userId });
            }}
            selected={userId === selectedUserId}
          />
        ))}
        {Object.keys(offlinePeolple).map((userId) => (
          <Contact
            key={userId}
            id={userId}
            online={false}
            username={offlinePeolple[userId].username}
            onClick={() => setSelectedUserId(userId)}
            selected={userId === selectedUserId}
          />
        ))}
      </div>
    </div>
  );
};
