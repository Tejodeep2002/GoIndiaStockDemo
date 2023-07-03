import React from "react";

const BottomMenuBar = () => {
  return (
    <div className="md:hidden fixed z-10 bottom-0 left-0 right-0 w-full h-12 flex justify-evenly items-center  bg-sky-900">
      <button
        className={
          "w-[50%] h-full  bg-sky-950  border-b-2 border-red-700 flex items-center justify-center"
        }
      >
        <img src="/icons/mul.png" className="w-6 h-6 " alt="" />
      </button>
      <button
        className={
          "w-[50%] h-full bg-sky-950  border-b-2 border-red-700 flex items-center justify-center"
        }
      >
        <img src="/icons/option.png" className="w-6 h-6" alt="" />
      </button>
      <button
        className={
          "w-[50%] h-full  bg-sky-950  border-b-2 border-red-700 flex items-center justify-center"
        }
      >
        <img src="/icons/home.png" className="w-6 h-6" alt="" />
      </button>
      <button
        className={
          "w-[50%] h-full bg-sky-950  border-b-2 border-red-700 flex items-center justify-center"
        }
      >
        <img src="/icons/messages.png" className="w-6 h-6" alt="" />
      </button>
      <button
        className={
          "w-[50%] h-full bg-sky-950  border-b-2 border-red-700 flex items-center justify-center"
        }
      >
        <img src="/icons/checklist.png" className="w-6 h-6" alt="" />
      </button>
    </div>
  );
};

export default BottomMenuBar;
