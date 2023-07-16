import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import { linksData } from "./linksData";

interface MenuProps {
  isMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen }) => {
  const { data: sessionData } = useSession();

  return (
    <>
      {isMenuOpen && (
        <div className="fixed left-0 right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-black/60">
          <div className="relative mb-24 w-11/12 max-w-sm">
            <div className="relative rounded-lg bg-gray-800 text-gray-200 shadow">
              <div className="flex items-start justify-between rounded-t p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={sessionData?.user?.image ?? "/avatar.png"}
                    alt="Profile"
                    className="rounded-full"
                    width={50}
                    height={50}
                  />
                  <div className="font-medium text-white">
                    <div>{sessionData?.user?.name}</div>
                    <div className="text-sm text-gray-400">
                      {sessionData?.user?.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-lg rounded-b border-t border-gray-600 bg-star bg-contain bg-center bg-no-repeat p-2 text-center text-sm font-medium text-gray-200">
                {linksData.map((link, i) => {
                  return (
                    <div
                      key={i}
                      className="group flex w-full items-center justify-between rounded-lg px-2 py-4 hover:cursor-pointer hover:bg-gray-600/60"
                    >
                      <div className="ml-2 flex items-baseline transition-all duration-500 group-hover:scale-125 group-hover:tracking-wider">
                        <Link href={link.href}>{link.title}</Link>
                      </div>
                      <div className="flex items-center justify-end">
                        <p className="mr-3 text-xs font-medium italic text-gray-500 group-hover:text-transparent">
                          {link.description}
                        </p>
                        <div className="transition-all duration-1000 group-hover:scale-150">
                          {link.icon}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="group flex rounded-lg rounded-t border-t border-gray-600 px-2 py-5 text-center text-sm font-medium text-gray-200 hover:cursor-pointer">
                <button
                  onClick={() => void signOut()}
                  className="flex w-full items-center justify-center rounded-2xl border border-gray-700 p-2 hover:bg-gray-700"
                >
                  <div className="flex transition-all duration-500 group-hover:scale-125">
                    <RiLogoutCircleLine
                      style={{ fontSize: "1.35rem", marginRight: "10px" }}
                    />
                    <p>Logout</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
