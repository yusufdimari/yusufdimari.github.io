import React from "react";
import { screens } from "../types/Screens";

export const Navbar = ({
  active,
  setActive,
}: {
  active: screens;
  setActive: React.Dispatch<React.SetStateAction<screens>>;
}) => {
  return (
    <div
      className="
      border border-black-1 w-full md:w-fit p-5 border-b-0 md:border-b-[1px]
      rounded-tl-3xl rounded-tr-3xl md:rounded-bl-3xl md:rounded-tl-none
      fixed md:absolute md:top-0 right-0
      md:border-t-0 md:border-r-0 md:border-b-1
      bg-white md:px-10 bottom-0 md:bottom-auto z-20"
    >
      <ul className="flex md:gap-10 justify-evenly md:justify-start">
        {Object.values(screens).map((nav) => (
          <li
            key={nav}
            onClick={() => setActive(nav)}
            className={`cursor-pointer hover:text-amber-500 ${
              active === nav ? "font-bold text-amber-500" : ""
            }`}
          >
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
};
