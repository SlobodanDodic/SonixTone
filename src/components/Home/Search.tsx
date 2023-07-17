"use client";
import { BsSearch } from "react-icons/bs";
import { RiFilter2Fill } from "react-icons/ri";

export default function Search() {
  return (
    <div className="mb-8 mt-4 flex w-screen max-w-lg items-center">
      <div className="mx-auto flex w-11/12 sm:w-full">
        <div className="relative mr-2 flex w-5/6 sm:w-11/12">
          <input
            type="search"
            className="h-8 w-full rounded bg-gray-700 p-2 text-sm text-gray-100 focus:border-red-0 focus:outline-none focus:ring-red-0"
            placeholder="Search"
            required
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-4">
            <BsSearch className="text-gray-100" />
          </button>
        </div>

        <button className="flex w-1/6 items-center justify-center rounded bg-gray-700 sm:w-1/12">
          <RiFilter2Fill className="text-gray-100" />
        </button>
      </div>
    </div>
  );
}
