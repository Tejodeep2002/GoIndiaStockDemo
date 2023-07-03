import React from "react";
import Sidebar from "./Sidebar";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";

const MainBody = () => {
  return (
    <div className="hidden md:block md:flex fixed top-[9.6rem] w-full h-[83vh] bg-gray-100 border border-red-600">
      <Sidebar />
      <div className="md:p-6 w-full pt-5 pr-5 flex  justify-between">
        <div className=" w-[60%]  flex flex-col   ">
          <span className="text-red-500 font-semibold text-base">
            DISSCUSSION FORUM
          </span>
          <DiscussionForum />
        </div>
        <div className=" w-[40%] h-full flex flex-col justify-center border border-red-600">
          <span className="text-red-500 font-semibold text-base">
            MARKET STORES
          </span>
          <MarketStories />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
