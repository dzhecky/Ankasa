"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

export default function CardSlider() {
  const ImageSlider = [
    {
      image: "/spain.jpg",
      country: "Japan",
      city: "Tokyo",
    },
    {
      image: "/indo.jpg",
      country: "Spain",
      city: "Madrid",
    },
    {
      image: "/london.jpg",
      country: "Indonesia",
      city: "Bali",
    },
    {
      image: "/paris.png",
      country: "England",
      city: "London",
    },
    {
      image: "/london.jpg",
      country: "Japan",
      city: "Tokyo",
    },
    {
      image: "/paris.png",
      country: "Spain",
      city: "Madrid",
    },
    {
      image: "/indo.jpg",
      country: "Indonesia",
      city: "Bali",
    },
    {
      image: "/paris.png",
      country: "England",
      city: "London",
    },
  ];

  return (
    <main>
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          slidesPerView={5}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          className="swiper_container  w-full"
        >
          {ImageSlider.map((item) => (
            <SwiperSlide className="px-2">
              <div className="relative h-[262px] overflow-hidden rounded-lg w-[206px]">
                <Image
                  src={item.image}
                  alt="slide_image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
                <div className="airline absolute bg-white bg-opacity-[40%] top-5 left-3 py-[4px] px-4 rounded-full">
                  <p className="text-white font-[200]">
                    <span className="text-white font-[600] mr-2">15</span>
                    Airlines
                  </p>
                </div>
                <div className="text absolute flex justify-between items-center w-full px-5 bottom-4">
                  <div className="text">
                    <p className="text-white text-[12px] font-[600] ">
                      {item.city},
                    </p>
                    <p className="text-white text-[20px] font-[600]">
                      {item.country}
                    </p>
                  </div>
                  <Image
                    src="/more.png"
                    width={29}
                    height={29}
                    className=""
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
