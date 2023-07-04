import React from 'react';

export const SideChat = () => {
  return (
    <>
      <div className=" bg-red-200 h-[350px] w-[200px] absolute  left-20 top-[100px] rounded-lg shadow-md">
        <label htmlFor="" className="relative -top-9 ">
          <h1 className="font-bold text-xl">Chat</h1>
        </label>

        <div className=" bg-red-200 h-[150px] w-[200px] absolute top-[370px] rounded-lg  shadow-md">
          <label htmlFor="">
            <h1 className="font-bold text-xl">Groups</h1>
          </label>
        </div>
      </div>
    </>
  );
};
