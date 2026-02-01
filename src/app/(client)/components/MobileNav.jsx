"use client";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { mobileNavMenus } from "@/constants";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("0");

  const handleNavMenu = (e) => {
    setCurrent(e.key);
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="mobile-nav">
      <button onClick={showDrawer} className="lg:hidden  ">
        <FaBarsStaggered className="text-2xl" />
      </button>
      <Drawer
        width={"80%"}
        title={
          <Image
            src={"/images/logo.webp"}
            height={50}
            width={150}
            alt="logo"
            className="w-[70px]"
          />
        }
        // closable={{ "aria-label": "Close Button" }}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="mobile-nav-body ">
          <Menu
            onClick={handleNavMenu}
            style={{ width: "100%" }}
            defaultOpenKeys={["0"]}
            selectedKeys={[current]}
            mode="inline"
            items={mobileNavMenus}
          />
        </div>
      </Drawer>
    </nav>
  );
};

export default MobileNav;
