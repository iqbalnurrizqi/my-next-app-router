"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DasboardPage = () => {


  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center text-black ">
      <h1>Dashboard</h1>
    </div>
  );
};

export default DasboardPage;
