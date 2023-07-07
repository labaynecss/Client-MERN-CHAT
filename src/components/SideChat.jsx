import React from "react";
import Avatar from "./Avatar";

export const SideChat = ({
  onlinePeopleExclourUser,
  onlinePeople,
  setSelectedUserId,
  selectedUserId,
}) => {
  return (
    <>
      <div className=" bg-[#1b1b1b]  h-[550px] w-[200px] absolute  left-20 top-[100px] rounded-lg shadow-md">
        <label htmlFor="" className="relative -top-9  ">
          <h1 className="font-bold text-md text-white mb-2">Recent Talks</h1>
        </label>
        {Object.keys(onlinePeopleExclourUser).map((userId, index) => (
          <div
            onClick={() => setSelectedUserId(userId)}
            className={
              "text-white font-normal -top-7 relative border-[#292929] border-b  pl-4 py-4 flex gap-2 items-center cursor-pointer " +
              (userId === selectedUserId ? "bg-[#292929]" : "")
            }
            key={index}
          >
            <Avatar username={onlinePeople[userId]} userId={userId} />
            <span className="text-white">{onlinePeople[userId]}</span>
          </div>
        ))}
      </div>
    </>
  );
};
