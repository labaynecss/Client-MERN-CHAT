import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Person({ userId, username, selected }) {
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

  console.log('userId: ', username);
  return (
    <>
      {selected && (
        <div className=" mt-[25px]">
          <div
            className={'h-[62px] w-[62px] rounded-full items-start  ' + color}>
            <div className="flex justify-center items-center pt-4">
              <h1 className="text-lg font-extrabold ">{username[0]}</h1>
            </div>
          </div>
          <div className="text-white relative left-20  -top-12">
            <h1 className="text-md capitalize font-mono">{username}</h1>
          </div>
          <div className=" ml-[140px]  flex gap-2  relative -top-[88px] left-[585px] ">
            <div className="   h-10 w-[48px] rounded-md  bg-[#ffa31a] text-white justify-center flex items-center">
              <CallIcon style={{ fontSize: 20 }} />
            </div>
            <div className="  h-10 w-[48px]  rounded-md  bg-[#1b1b1b] text-white justify-center flex items-center ">
              <VideocamIcon style={{ fontSize: 20 }} />
            </div>
            <div className=" h-10 w-[48px]  rounded-md  bg-[#1b1b1b] text-white justify-center flex items-center ">
              <MoreHorizIcon style={{ fontSize: 20 }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
