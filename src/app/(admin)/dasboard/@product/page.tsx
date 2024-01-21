"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=123456789`,
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }

  };

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px]">
    <div className=" text-center  h-full flex justify-center items-center m-10">
      <h1 className="text-black">{status}</h1>
      <button
        className="bg-blue-500 p-3 rounded-md justify-center"
        onClick={() => revalidate()}
      >
        revalidate button
      </button>
    </div>
    </div>
  );
};

export default Dashboard;
