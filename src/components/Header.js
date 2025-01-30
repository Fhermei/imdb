import React from "react";
import Menuitem from "./Menuitem";
import { MdHomeFilled } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6x1 sm:mx-auto items-center py-6">
      {/* Flex container for menu items */}
      <div className="flex">
        <Menuitem title="HOME" address="/" icon={<MdHomeFilled size={24} />} />
        <Menuitem title="ABOUT" address="/about" icon={<BsFillInfoCircleFill size={24} />} />
      </div>

      <div className="flex justify-between mx-2 max-w-6x1 items-center">
        <ink href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </ink>
      </div>

    </div>
  );
}
