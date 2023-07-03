"use client";
import React, { useState } from "react";
import Forum from "./misc/Forum";
import data from "@/DataBase/db";

const DiscussionForum = () => {
  const [fourm, setFourm] = useState(data.forum);

  const sectorSector = (id) => {
    const sector = data.forum.filter((item) => item.sector === id);
    setFourm(sector);
  };

  return (
    <div className="md:px-8 lg:w-[90%] relative w-full h-full mb-12 px-12 py-6  flex flex-col items-center">
      
        <div className="w-full mb-2 flex flex-col gap-2">
          <span>Filters</span>
          <div className="w-full h-14  rounded-lg flex justify-evenly items-center bg-white text-white">
            <button
              className="md:px-4 sm:px-6  py-1 px-2 text-[11px] flex rounded-full bg-red-600"
              onClick={() => sectorSector(1)}
            >
              Sector 1
            </button>
            <button
              className="md:px-4 sm:px-6  py-1 px-2 text-[11px] flex rounded-full bg-blue-600"
              onClick={() => sectorSector(2)}
            >
              Sector 2
            </button>
            <button
              className="md:px-4 sm:px-6 py-1 px-2 text-[10px] flex rounded-full bg-yellow-500"
              onClick={() => sectorSector(3)}
            >
              Sector 3
            </button>
            <span className="p-1 px-2 text-[10px] rounded-full bg-white flex justify-center items-center shadow-inner">
              <button>
                <img src="/icons/search.png" className="w-4 h-4" alt="" />
              </button>

              <input
                type="text"
                className="md:w-20 sm:w-40 lg:w-40 w-20 h-5 pl-3 bg-white "
                placeholder="Search here"
              />
            </span>
          </div>
        </div>
        <div className="h- flex flex-col gap-4 overflow-auto">
          {fourm.map((item, index) => (
            <Forum key={index} data={item} />
          ))}
        </div>
      
    </div>
  );
};

export default DiscussionForum;
