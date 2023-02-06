import Link from "next/link";
import React from "react";
export default function MenuItem() {
  return (
    <div className="flex items-center gap-5 m-4">
      <Link
        href="/"
        className="flex group items-center gap-1 dark:border-black border-gray-700 border-4 rounded-2xl shadow-md dark:text-gray-500 shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 active:shadow-md active:shadow-black active:scale-90 px-4 py-3 bg-gray-300 w-fit"
      >
        <p className="font-bold text-2xl hidden sm:inline group-hover:text-amber-400">
          Home
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 group-hover:text-amber-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
      <Link
        href="/about"
        className="flex group items-center gap-1  dark:border-black border-gray-700 border-4 rounded-2xl shadow-md dark:text-gray-500 shadow-black hover:shadow-lg hover:shadow-black hover:scale-110 active:shadow-md active:shadow-black active:scale-90 px-4 py-3 bg-gray-300 w-fit"
      >
        <p className="font-bold text-2xl hidden sm:inline group-hover:text-amber-400">
          About
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 group-hover:text-amber-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </Link>
    </div>
  );
}
