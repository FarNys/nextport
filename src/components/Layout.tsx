import React from "react";
import Navs from "./Navs";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import TechContainer from "./TechContainer";

interface LayoutType extends React.ComponentPropsWithoutRef<"main"> {}

const Layout = ({ children }: LayoutType) => {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-7xl mx-auto relative">
      <div className="flex w-full justify-between">
        <Navs />
        <Link
          href="/"
          className="flex items-center text-xl text-primary-600 hover:text-primary-700"
        >
          <AiFillHome />
        </Link>
      </div>
      {children}
      <TechContainer />
    </main>
  );
};

export default Layout;
