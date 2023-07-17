import Link from "next/link";
import { homeLinks } from "./homeLinks";

export default function Leftside() {
  return (
    <div className="relative mx-auto flex w-full max-w-xl flex-col px-0 py-3 pb-2 text-end text-sm font-semibold tracking-wider text-gray-700">
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-400"></div>

      {homeLinks.map((link, i) => {
        return (
          <Link href={link.href} key={i} className="flex items-center">
            <div className="mx-auto flex w-full items-center justify-end">
              <div className="w-full p-4">{link.title}</div>
            </div>
            <div className="absolute -right-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gray-500 text-white">
              {link.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
