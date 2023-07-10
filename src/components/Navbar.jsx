import React from 'react';
import Lottie from 'lottie-react';
import katChat from '../assets/katChat.json';
import { data } from './data/links';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Navbar = ({ logout }) => {
  return (
    <>
      <div className="bg-[#292929] h-screen w-[70px]">
        <div className="flex items-center justify-between h-[70px] bg-[#1b1b1b] ">
          <div className="absolute top-4 left-3 w-[45px] h-[44px] bg-[#ffa31a] rounded-t-full shadow-md">
            <div className="absolute -top-9">
              <Lottie animationData={katChat} loop={false} />
            </div>
            <div className="relative top-[88px] flex flex-col gap-8 left-2">
              {data.map((items, index) => (
                <ul key={index} className="">
                  <li className="gap-4 flex-col flex">{items.icon}</li>
                </ul>
              ))}

              <div className="relative top-[240px]  ">
                <ul className="flex flex-col gap-6 p-1">
                  <li className="text-white">
                    <ModeEditOutlinedIcon />
                  </li>
                  <li className="text-white">
                    <SettingsOutlinedIcon />
                  </li>
                  <li className="text-white ">
                    <button onClick={logout}>
                      <PowerSettingsNewIcon />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="fixed w-full z-50">
    //
    //     <div className="relative h-full w-10  bg-[#1b1b1b] sm:w-14">
    //
    //
    //
    //
    //       </div>
    //     </div>
    //   {/* </div> */}
    // </div>
  );
};

export default Navbar;
