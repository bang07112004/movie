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
          className="flex gap-2 py-3 bg-transparent rounded-full items-center mx-4 group  bg-gray-300 shadow-md dark:text-gray-500 shadow-black px-4  hover:shadow-lg hover:shadow-black hover:scale-110 active:shadow-md active:shadow-black active:scale-90"
        >
          <Image
            src={avatar.src}
            width={200}
            height={200}
            alt="My avatar"
            className="rounded-full h-24 w-24 border-2 dark:border-black border-gray-700 group-hover:border-amber-400"
          />
          <p className="text-3xl hidden sm:inline-block group-hover:text-amber-400">
            My MovieDb
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
