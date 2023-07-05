import React from 'react';
import { data } from '../components/data/links';

export const Sidelink = () => {
  return (
    <div className=" mt-[120px] absolute">
      <div className="bg-[#262626] h-[370px]   w-[80px] text-gray-300 rounded-3xl  relative right-5 ">
        <ul className="flex flex-col gap-4">
          {data.map((items, index) => (
            <li className=" ml-8 mt-10 px-2" key={index}>
              {items.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
