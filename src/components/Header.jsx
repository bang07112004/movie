import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import avatar from "../../public/avatar.jpg";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = () => {
  return (
    <div className="flex justify-between max-w-7xl items-center sm:mx-auto py-5">
      <div>
        <MenuItem />
      </div>
      <div className="flex gap-2 items-center">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-2 items-center mx-4">
          <Image
            src={avatar.src}
            width={200}
            height={200}
            alt="My avatar"
            className="rounded-full h-24 w-24 border-2 dark:border-black border-gray-700"
          />
          <p className="text-3xl hidden sm:inline-block">My MovieDb</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
