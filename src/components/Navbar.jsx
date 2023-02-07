"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import { useSearchParams } from "next/navigation";
function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className="flex flex-col justify-center dark:bg-gray-600 py-3 items-center bg-gray-700 lg:text-3xl">
      <div className="flex">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <NavbarItem title="TV Top Rated" param="fetchTV" />
    </div>
  );
}

export default Navbar;
