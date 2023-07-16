"use client";
import { BsSearch } from "react-icons/bs";
import { RiFilter2Fill } from "react-icons/ri";

export default function Search() {
  return (
    <div className="container my-5 flex flex-col items-center justify-start sm:flex-row">
      <div className="w-full sm:w-1/3" />
      <div className="relative mr-3 flex w-full max-w-sm sm:w-2/3">
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

      <button className="flex items-center rounded bg-gray-700 p-2">
        <RiFilter2Fill className="text-gray-100" />
      </button>
    </div>
  );
}
