import React from "react";
import Menuitem from "./Menuitem";
import { MdHomeFilled } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from"./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      {/* Flex container for menu items */}
      <div className="flex">
        <Menuitem title="HOME" address="/" icon={<MdHomeFilled />} />
        <Menuitem title="ABOUT" address="/about" icon={<BsFillInfoCircleFill />} />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>

    </div>
  );
}
