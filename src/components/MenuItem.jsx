import Link from "next/link";
import React from "react";
export default function MenuItem() {
  return (
    <div className="flex items-center gap-5 m-4">
      <Link
        href="/"
        className="flex group transition-all duration-500 items-center gap-1 rounded-2xl shadow-md dark:text-gray-500 shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 active:shadow-md active:shadow-black active:scale-90 px-4 py-3 bg-transparent w-fit"
      >
        <p className="font-bold text-2xl hidden sm:inline group-hover:text-amber-400 transition-all duration-500">
          Home
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 group-hover:text-amber-400 transition-all duration-500"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      </Link>
      <Link
        href="/about"
        className="flex group items-center gap-1 transition-all duration-500  rounded-2xl shadow-md dark:text-gray-500 shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 active:shadow-md active:shadow-black active:scale-90 px-4 py-3 bg-transparent w-fit"
      >
        <p className="font-bold text-2xl hidden sm:inline group-hover:text-amber-400 transition-all duration-500">
          About
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 group-hover:text-amber-400 transition-all duration-500"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
