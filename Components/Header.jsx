"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 z-10 w-full">
      <div className="reletive w-full h-12 px-3 flex bg-white justify-between items-center">
        <div className="md:gap-8 flex gap-1 items-center">
          <button>
            <img
              src="/logos/logewithname.png"
              className="md:w-16 w-14 "
              alt=""
            />
          </button>
          <span className="sm:w-[32rem] md:h-8 w-[80%] h-9 flex justify-center items-center bg-gray-300 rounded-md">
            <input
              style={{
                boxShadow:
                  " rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
              type="text"
              className=" w-full h-full rounded-md bg-gray-300"
            ></input>
            <button className=" w-16  h-full flex items-center justify-center">
              <img src="/icons/search.png" className=" w-6 h-6 " alt="" />
            </button>
          </span>
        </div>
        <div className=" lg:hidden w-8 h-8 ml-7 flex justify-center items-center  ">
          <img
            src="/logos/logewithname.png"
            alt=""
            className="w-7 h-7 rounded-full border border-black"
          />
        </div>
        <div className=" lg:block lg:flex reltaive hidden flex gap-5 text-sm">
          <button className="w-30 h-9  p-2   ">Contact Us</button>
          <button className="w-28 h-9 p-2 rounded border border-black  ">
            SIGN UP
          </button>
          <button className="w-28 h-9 p-2 rounded border border-black  ">
            SIGN IN
          </button>
        </div>
      </div>

      <div className="md:h-5 relative w-full h-6 bg-black text-white overflow-hidden ">
        <div className="relative text-sm flex justify-center items-center animate-[infloop_30s_linear_infinite]">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis
          </span>
          <span>
            tenetur ut vero, perspiciatis fugit excepturi cupiditate nam quaerat
          </span>
          <span>
            obcaecati autem optio nostrum temporibus! Voluptates quisquam
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
