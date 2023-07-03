import React from "react";

const Forum = ({ data }) => {
  return (
    <div className="w-full p-1 bg-white rounded-md drop-shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-full px-2 flex justify-end text-[10px] ">
          <span>2 min ago</span>
        </div>
        <img src={data?.contentImage} className="" alt="" />
      </div>

      <div className="flex flex-col gap-1 text-[10px] font-semibold">
        <div className="w-full h-15 border-black overflow-hidden flex items-center gap-1">
          <img src="/users/user1.jpg" className="w-9 h-9 rounded-full" alt="" />
          <div className="flex items-center gap-2 font-bold ">
            <span>{data.name}</span>
            {data.sector === 1 ? (
              <span className="p-1 px-2 text-[10px] rounded-full text-white bg-red-600">
                Sector {data.sector}
              </span>
            ) : data.sector === 2 ? (
              <span className="p-1 px-2 text-[10px] rounded-full text-white bg-blue-600">
                Sector {data.sector}
              </span>
            ) : data.sector === 3 ? (
              <span className="p-1 px-2 text-[10px] rounded-full text-white bg-yellow-500">
                Sector {data.sector}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="md:text-sm px-10 flex flex-col gap-3">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est
            dolorem minus eos neque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Soluta quasi, aspernatur fugit est praesentium
            atque consequuntur nobis nam ratione officia!
          </span>

          <div className="md:justify-normal md:gap-6 flex items-center justify-between">
            <button className="flex gap-1 items-center">
              <img
                src="/icons/like-holo.png"
                alt=""
                className="w-3 h-3"
                srcset=""
              />
              2k
            </button>
            <button className="flex gap-1 items-center">
              <img src="/icons/look.png" alt="" className="w-3 h-3" srcset="" />
              2k
            </button>
            <button className="flex gap-1 items-center">
              <img
                src="/icons/message-holo.png"
                alt=""
                className="w-3 h-3"
                srcset=""
              />
              2k
            </button>
            <button className="flex gap-1 items-center">
              <img
                src="/icons/share.png"
                alt=""
                className="w-3 h-3"
                srcset=""
              />
              2k
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
