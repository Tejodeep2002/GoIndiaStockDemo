"use client";
import React, { useState } from "react";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`lg:relative fixed ${!toggle ? " " : " md:w-[30%] md:z-0 w-[60%] h-full  "}  md:top-[4rem] md:z-10 lg:top-0 left-0 bottom-12 top-[4.5rem] z-10  flex `}
      >
        <div
          className={`w-full ${!toggle ? "hidden " : ""}
         bg-sky-900  text-white text-sm`}
        >
          <div className="w-full h-16 border-b-2  flex justify-between p-3  text-white text-sm">
            <div className="flex items-center gap-2">
              <img
                src="/icons/user.png"
                className="rounded-full w-6 h-6"
                alt=""
              />
              <span>Hello, User</span>
            </div>
            <button>
              <img
                src="/icons/notification.png"
                className="rounded-full w-7 h-7"
                alt=""
              />
            </button>
          </div>

          <div className="flex flex-col  mt-10 ">
            <span className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center gap-2">
              <img src="/icons/message.png" className="w-6 h-6" alt="" />
              Disscussion Fourm
            </span>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center gap-2">
              <img src="/icons/moneysend.png" className="w-6 h-6" alt="" />
              Market Stories
            </button>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center pl-12">
              Sentiment
            </button>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center pl-12">
              Market
            </button>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center pl-12">
              Sector
            </button>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center pl-12">
              Watchlist
            </button>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center pl-12">
              Events
            </button>
            <button className="w-full h-10 hover:bg-sky-950 p-4 flex justify-start items-center pl-12">
              News/interviews
            </button>
          </div>
        </div>
        <button
          className={"w-5  h-16 bg-sky-900 border-sky-900 rounded-r m-auto "}
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? (
            <img src="/icons/arrowright.png" alt="" />
          ) : (
            <img src="/icons/arrowleft.png" alt="" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
