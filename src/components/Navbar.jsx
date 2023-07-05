import React from 'react';
import Lottie from 'lottie-react';
import katChat from '../assets/katChat.json';

const Navbar = () => {
  return (
    <>
      <div className=" h-14 bg-[#292929] w-full ">
        <div className="h-14  w-20 relative  bg-[#1b1b1b] right-7 top-0">
          <div className="h-[40px]  w-[45px]  bg-[#ffa31a]  rounded-t-full absolute left-14 top-2 shadow-md">
            <div className="absolute -top-10">
              <Lottie animationData={katChat} loop={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
