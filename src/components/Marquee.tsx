import React from "react";

import Image from "next/image";

import QRCodeImage from "@/Images/QRCode.png";

const Marquee = () => {
  return (
    <div
      className="bg-secondaryBg/60 max-h-[480px] px-[5%] py-[10%] flex flex-col items-center justify-center"
      id="marquee"
    >
      <h1 className="border-b border-solid border-b-primary text-[32px] text-primary text-center sm:text-[36px] md:text-[48px] ">
        Marquee
      </h1>
      <div className="flex flex-col mt-[5%] items-center justify-center">
        <h5 className="text-[16px] text-primary text-center sm:text-[18px] md:text-[20px] mb-4">
          Line Bot
        </h5>
        <Image
          alt="Line Bot QRCode"
          width={160}
          height={160}
          src={QRCodeImage}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
        <h5 className="text-[12px] text-primary text-center sm:text-[14px] md:text-[16px] mt-4">
          掃描QRCode或輸入ID加入Line好友 (@794omale)
        </h5>
      </div>
    </div>
  );
};

export default Marquee;
