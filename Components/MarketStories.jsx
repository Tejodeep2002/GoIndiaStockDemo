import React from "react";
import MarketPost from "./misc/MarketPost";
import data from "@/DataBase/db";

const MarketStories = () => {
  return (
    <div className="md:flex-row md:py-0  w-full h-full  p-9 mb-14  flex flex-col gap-4 overflow-y-scroll">
      <div className=" flex  flex-wrap gap-6 justify-center">
        {data.market.map((item, index) => (
          <MarketPost key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
