import Image from "next/image";
import Navbar from "./navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - my-learning",
  description: "Project pembelajaran next js app-route",
  authors: [{ name: "Iqbal's Team", url: "https://nextjs.org" }],
  icons: {
    icon: "https://tse3.mm.bing.net/th?id=OIP.r0HtX7FMJKolxOsVnkW3CQHaGw&pid=Api&P=0&h=180",
  },
};

export default function Home() {
  return (
    <div>
      <h1>hellow brow</h1>
    </div>
  );
}
