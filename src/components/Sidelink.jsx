import React from "react";

import chat from "../assets/chat.png";

export const Sidelink = () => {
  return (
    <div className="bg-slate-700  w-20 text-gray-300 rounded-md ">
      <img src={chat} alt="" className="p-3 h-14 w-14" />

      <ul className="bg-red-200 px-1 p-2 mt-10">
        <li className="text-sm ">home</li>
        <li className="text-sm">other</li>
        <li className="text-sm">norify</li>
        <li className="text-sm">settings</li>
        <li className="text-sm">logout</li>
      </ul>
    </div>
  );
};
