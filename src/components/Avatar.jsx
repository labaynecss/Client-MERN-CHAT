import React from 'react';

export default function Avatar({ userId, username, online }) {
  const colors = [
    'bg-red-200',
    'bg-green-200',
    'bg-lime-200',
    'bg-purple-200',
    'bg-blue-200',
  ];

  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  return (
    <>
      <div
        className={
          'w-9 h-9 rounded-full text-center flex items-center ml-2  ' + color
        }>
        <div className="text-center w-full opacity-70 relative">
          {username[0]}
          {online && (
            <div className="absolute w-3 h-3 bg-emerald-600 bottom-0 right-0 -top-2  z-50  rounded-full border-b-2 border-l-2 border-[#292929] "></div>
          )}
          {!online && (
            <div className="absolute w-3 h-3 bg-black bottom-0 right-0 rounded-full  -z-50 -top-2 border-2 border-l-2 border-[#292929]"></div>
          )}
        </div>
      </div>
    </>
  );
}
