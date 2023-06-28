import React, { useState } from "react";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 z-50 grid grid-cols-2 w-full h-auto bg-transparent px-7 py-3 md:px-12 md:py-5">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <h3 className="sm:text-lg md:text-xl lg:text-3xl text-primary">
          Travis & Tanya
        </h3>
      </div>

      {/* Right */}
      <ul className="hidden sm:flex sm:items-center sm:justify-end">
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("info")}>Info</h3>
        </li>
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("story")}>Story</h3>
        </li>
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("details")}>Details</h3>
        </li>
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("map")}>Map</h3>
        </li>
        <li className="headerText">
          <h3 onClick={() => handleClickScroll("marquee")}>Marquee</h3>
        </li>
      </ul>

      <div
        className="menu flex items-center justify-end sm:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuOutlined className="text-3xl text-primary" />
      </div>

      {/* Drawer */}
      <Drawer
        title={
          <div
            className="menu flex items-center justify-end sm:hidden"
            onClick={() => setOpen(false)}
          >
            <CloseOutlined className="text-3xl text-primary" />
          </div>
        }
        width="100%"
        bodyStyle={{
          background: "#FFFFF0",
          color: "#9D7553",
          fontFamily: "Comic Sans MS, Trebuchet MS",
          fontSize: "24px",
          textAlign: "center",
          opacity: 0.8,
        }}
        headerStyle={{
          background: "#ECDCC2",
          textAlign: "center",
          opacity: 0.6,
        }}
        closable={false}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ul className="flex flex-col items-center">
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h3
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("info");
              }}
            >
              Wedding Info
            </h3>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h3
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("story");
              }}
            >
              Story
            </h3>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h3
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("details");
              }}
            >
              Details
            </h3>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h3
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("map");
              }}
            >
              Map
            </h3>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h3
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("marquee");
              }}
            >
              Marquee
            </h3>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
