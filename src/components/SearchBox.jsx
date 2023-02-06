"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState();
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return "";
    router.push(`/search/${search}`);
    setSearch("");
  }
  return (
    <form
      className="flex justify-between items-center max-w-6xl mx-auto mt-3"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Enter Keywords..."
        className="bg-transparent w-full h-14 rounded-2xl placeholder:gary-500 outline-none flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400 disabled:cursor-not-allowed
         disabled:hover:shadow-md disabled:hover:shadow-black disabled:hover:scale-100 disabled:active:scale-100
          dark:text-white flex transition-all duration-500 items-center gap-1 rounded-2xl shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 active:shadow-md active:shadow-black active:scale-90 px-4 py-3 bg-transparent w-fit "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
        Search
      </button>
    </form>
  );
}

export default SearchBox;
