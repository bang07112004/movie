import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import avatar from "../../public/avatar.jpg";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = () => {
  return (
    <div className="flex justify-between max-w-7xl items-center mx-3 sm:mx-auto py-5">
      <div>
        <MenuItem />
      </div>
      <div className="flex gap-2 items-center">
        <DarkModeSwitch />
        <Link
          href="/"
          className="flex gap-2 transition-all duration-500 py-3 rounded-full items-center mx-4 group bg-transparent md:shadow-md dark:text-gray-500 md:shadow-black px-4  md:hover:shadow-lg md:hover:shadow-black md:hover:scale-110 md:active:shadow-md md:active:shadow-black md:active:scale-90"
        >
          <Image
            src={avatar.src}
            width={500}
            height={500}
            alt="My avatar"
            className="md:rounded-full w-16 h-16 rounded-lg md:h-24 md:w-24 border-2 dark:border-black transition-all duration-500 border-gray-700 group-hover:border-amber-400"
          />
          <p className="text-3xl hidden sm:inline-block group-hover:text-amber-400 transition-all duration-500">
            My MovieDb
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
