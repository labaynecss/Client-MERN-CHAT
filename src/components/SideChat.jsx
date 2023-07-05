import React from 'react';

export const SideChat = () => {
  return (
    <>
      <div className=" bg-[#151515]  h-[350px] w-[200px] absolute  left-20 top-[100px] rounded-lg shadow-md">
        <label htmlFor="" className="relative -top-9 ">
          <h1 className="font-bold text-xl text-white">Chat</h1>
        </label>

        <div className=" bg-[#151515] h-[150px] w-[200px] absolute top-[370px] rounded-lg  shadow-md">
          <label htmlFor="">
            <h1 className="font-bold text-xl text-white">Groups</h1>
          </label>
        </div>
      </div>
    </>
  );
};
