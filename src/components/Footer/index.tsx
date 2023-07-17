import Link from "next/link";
import { homeLinks } from "../Home/homeLinks";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 right-0 z-20 bg-gray-800 pb-2 pt-4 text-white sm:hidden">
      <div className="flex items-center justify-around text-sm">
        {homeLinks.map((link, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="">
                <div className="">{link.icon}</div>
              </div>
              <div className="pt-1">
                <Link href={link.href}>{link.title}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
