"use client";
import Link from "next/link";
import React, { use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <>
      <nav className="flex bg-slate-800 justify-between p-4">
        <div className="text-xl">NEXT.</div>
        <ul className=" flex text-xl gap-7 cursor-pointer px-5w-1/3 justify-center ml-[100px]">
          <Link
            className={`  ${
              pathname === "/" ? "text-blue-500" : "text-white"
            } `}
            href="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className={`  ${
              pathname === "/about" ? "text-blue-500" : "text-white"
            } `}
            href="/about"
          >
            <li>About</li>
          </Link>
          <Link
            className={`  ${
              pathname === "/product" ? "text-blue-500" : "text-white"
            } `}
            href="/product"
          >
            <li>Product</li>
          </Link>
        </ul>
        <div>
          <div className="flex gap-5 ">
            {status === "authenticated" ? (
              <div className="text-white p-2">Welcome <span>{session?.user?.fullname}</span></div>
            ) : (
              <div className="text-white p-2">Welcome Guest</div>
            )}
            {status === "authenticated" ? (
              <button
                className=" bg-white text-black p-2 rounded-md hover:bg-blue-500 mr-5 hover:text-white"
                onClick={() => signOut()}
              >
                LogOut
              </button>
            ) : (
              <button
                className=" bg-white text-black p-2 rounded-md hover:bg-blue-500 mr-5 hover:text-white"
                onClick={() => signIn()}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
