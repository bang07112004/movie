import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";
import avatar from "../../public/avatar.jpg";
const Header = () => {
  return (
    <div className="flex justify-between my-3 max-w-6xl mx-2 items-center sm:mx-auto px-3 py-2">
      <div>
        <MenuItem />
      </div>
      <div className="">
        <Link href="/" className="flex gap-2 items-center mx-4">
          <Image
            src={avatar.src}
            width={200}
            height={200}
            alt="My avatar"
            className="rounded-full h-24 w-24"
          />
          <p className="text-3xl hidden sm:inline-block">My MovieDb</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
