"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      {" "}
      <Link
        href={`/?genre=${param}`}
        className={`text-2xl font-bold text-white ${
          genre && genre === param && " dark:text-amber-600 text-gray-400  "
        } `}
      >
        {title === "Trending" && (
          <div
            className={`flex mx-3 gap-2 px-3 py-3 group ${
              genre &&
              genre === param &&
              "bg-transparent shadow-md scale-110 shadow-black rounded-2xl text-amber-600 transition-all duration-500"
            }`}
          >
            <h1 className="group-hover:text-amber-600 transition-all duration-500">
              {title}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 group-hover:text-amber-600 transition-all duration-500 "
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <div className="flex flex-col">
          {title === "Top" && (
            <div
              className={`flex gap-2 mx-3 px-3 py-3 group ${
                genre &&
                genre === param &&
                "bg-transparent shadow-md scale-110 shadow-black rounded-2xl text-amber-600 transition-all duration-500"
              }`}
            >
              <h1 className="group-hover:text-amber-600 transition-all duration-500">
                {title}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 group-hover:text-amber-600 transition-all duration-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          {title === "TV" && (
            <div
              className={`flex gap-2 mx-3 px-3 py-3 group ${
                genre &&
                genre === param &&
                "bg-transparent shadow-md scale-110 shadow-black rounded-2xl text-amber-600 transition-all duration-500"
              }`}
            >
              <h1 className="group-hover:text-amber-600 transition-all duration-500">
                {title}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 group-hover:text-amber-600 transition-all duration-500"
              >
                <path d="M19.5 6h-15v9h15V6z" />
                <path
                  fillRule="evenodd"
                  d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default NavbarItem;
