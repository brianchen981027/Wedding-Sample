import React from "react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

import Slider1 from "@/Images/SliderShow-1.jpg";
import Slider2 from "@/Images/SliderShow-2.jpg";
import Slider3 from "@/Images/SliderShow-3.jpg";
import Slider4 from "@/Images/SliderShow-4.jpg";

const Info = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-no-repeat bg-center lg:bg-fixed"
      id="info"
    >
      <Carousel
        arrows
        autoplay
        effect="fade"
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        <div className="w-full h-screen">
          <Image
            alt="Wedding Slider"
            className="h-screen"
            src={Slider1}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="w-full max-h-[768px]">
          <Image
            alt="Wedding Slider"
            className="h-screen"
            src={Slider2}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="w-full max-h-[768px]">
          <Image
            alt="Wedding Slider"
            className="h-screen"
            src={Slider3}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="w-full max-h-[768px]">
          <Image
            alt="Wedding Slider"
            className="h-screen"
            src={Slider4}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </Carousel>
      <div className="info-banner">
        <div className="flex flex-col justify-center items-center">
          <h3 className="mb-4 font-bold text-secondary text-center text-3xl md:text-4xl lg:text-5xl">
            Travis & Tanya
          </h3>
          <span className="text-sm text-black/60 text-center md:text-base lg:text-lg">
            Invite you to our wedding celebration💕
          </span>
        </div>
        <div className="w-px h-10 bg-gray-500 my-2" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="mb-4 font-bold text-secondary text-center text-3xl md:text-4xl lg:text-5xl">
            Sunday, December 24th, 2023
          </h3>
          <Link href="https://goo.gl/maps/ztNFD589E5NYgMzCA" target="_blank">
            <h5 className="text-sm text-black/60 text-center md:text-base lg:text-lg hover:text-secondary">
              臺北萬豪酒店 Garden Villa
              <br />
              <span>(臺北市中山區樂群二路199號8F)</span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
