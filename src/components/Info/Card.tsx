import Image from "next/image";
import Link from "next/link";
import { BiSolidLike } from "react-icons/bi";
import { BsEyeFill, BsStarFill } from "react-icons/bs";

export default function Card() {
  const height = "120px";

  return (
    <div className="mb-5 flex w-screen max-w-lg items-center">
      <div className="flex h-28 items-center justify-between rounded shadow-lg">
        <Image className="aspect-square object-cover shadow-inner sm:rounded" width={110} height={110} src="/card.jpg" alt="Guitar Image" />
        <Link href="/" className="group mx-2 flex flex-col overflow-hidden bg-white">
          <h1 className="text-sm font-bold text-gray-900 transition-all duration-300 group-hover:tracking-wide sm:text-lg">
            Harley Benton JA-60
          </h1>
          <h1 className="text-sm font-bold text-red-0 transition-all duration-500 group-hover:tracking-wider sm:text-base">800 eur</h1>
          <p className="my-1 line-clamp-3 overflow-hidden text-ellipsis whitespace-pre-wrap text-xs text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest
            enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Link>

        <div className="flex h-full w-6 items-center justify-center rounded-r bg-red-0 px-1 text-sm text-white drop-shadow-md hover:cursor-pointer">
          <BiSolidLike className="h-5 w-5" />
        </div>
        <div className="ml-1 flex h-full w-6 items-center justify-center bg-gray-700 text-sm text-white drop-shadow-md hover:cursor-pointer sm:rounded-r">
          <div className="-rotate-90 transform text-xs tracking-widest">MORE▶</div>
        </div>
      </div>
    </div>
  );
}
