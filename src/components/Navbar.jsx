import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className=" h-14 bg-white w-full ">
        <div className="h-14 rounded-full w-20 relative bg-red-200 right-7 top-0">
          <div className="h-10 rounded-full w-10  bg-red-400  absolute left-14 top-2 shadow-md"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
