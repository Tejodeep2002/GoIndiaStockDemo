"use client"
import React, {  useState } from "react";
import FeaturedCircles from "./misc/FeaturedCircles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import data from "@/DataBase/db";

const FeaturedSection = () => {
  return (
    <>
      <div className="md:hidden relative mt-20 flex items-center py-1 w-full h-14 pl-5 gap-3 bg-white border-red ">
        <Swiper slidesPerView={6} spaceBetween={30} className="mySwiper z-0">
          {data.companies.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedCircles image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block md:flex fixed top-[4.2rem] w-full pt-1  flex-col gap-1">
        <span className="text-red-500 text-base font-bold px-4 ">
          FEATURED COMPANIES
        </span>
        <div className="w-full h-14 bg-sky-200 flex items-center pl-5 gap-8 overflow-x-auto">
          {data.companies.map((item, index) => (
            
            <span key={index}>
              <img src={item.image} className="h-10" alt="" />
            </span>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;
