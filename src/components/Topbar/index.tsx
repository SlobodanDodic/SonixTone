"use client";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { BiLogInCircle } from "react-icons/bi";
import { CgMenuRight, CgClose } from "react-icons/cg";
import Link from "next/link";
import Menu from "./Menu";

export default function TopBar() {
  const { data: sessionData } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="z-50 flex items-center">
          <img className="h-8 w-8" src="/logo.png" alt="Logo" />
        </Link>

        <div className="flex items-center">
          <h1 className="relative px-3 text-2xl font-extrabold tracking-wide text-gray-200">
            Soni<span className="text-red-0">X</span>tone
            <span className="absolute right-0 top-0">™</span>
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-center justify-center gap-4 hover:cursor-pointer">
            {sessionData ? (
              isMenuOpen ? (
                <CgClose
                  onClick={toggleMenu}
                  style={{ fontSize: "1.5rem", zIndex: 50 }}
                />
              ) : (
                <CgMenuRight
                  onClick={toggleMenu}
                  style={{ fontSize: "1.5rem", zIndex: 50 }}
                />
              )
            ) : (
              <BiLogInCircle
                onClick={() => void signIn()}
                style={{ fontSize: "1.5rem" }}
              />
            )}
          </div>
        </div>

        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />}
      </div>
    </div>
  );
}
