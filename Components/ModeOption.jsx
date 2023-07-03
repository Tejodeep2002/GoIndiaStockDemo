"use client";
import React, { useState } from "react";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";
import Sidebar from "./Sidebar";

const ModeOption = () => {
  const [select, setSelect] = useState(true);
  return (
    <>
      <div className="md:hidden relative w-full h-10 text-white font-medium bg-sky-900 flex justify-evenly">
      <Sidebar />
        <button
          className={
            select
              ? "w-[50%]  bg-sky-950  border-b-2 border-red-700"
              : "w-[50%]"
          }
          onClick={() => setSelect(!select)}
        >
          Disscussion Forum
        </button>
        <button
          className={
            !select
              ? "w-[50%]  bg-sky-950  border-b-2 border-red-700"
              : "w-[50%]"
          }
          onClick={() => setSelect(!select)}
        >
          Market Stories
        </button>
      </div>
      <div className="md:hidden">
        {select ? <DiscussionForum /> : <MarketStories />}
      </div>
      
    </>
  );
};

export default ModeOption;
