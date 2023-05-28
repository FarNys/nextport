import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";
const items: { link: string; title: string }[] = [
  {
    link: "/experiences",
    title: "تجربه",
  },
  {
    link: "/projects",
    title: "پروژه ها",
  },
  {
    link: "/contact",
    title: "تماس",
  },
];

const Navs = () => {
  const { pathname } = useRouter();
  return (
    <nav className=" w-full max-w-7xl mx-auto flex justify-between ">
      <ul className="flex justify-center mt-3">
        {items.map((el, index) => (
          <li key={`nav-${index}`}>
            <Link
              href={el.link}
              className={`"mx-1 border border-transparent rounded-my px-2 py-1 text-slate-400 hover:bg-primary-500 hover:text-white hover:border-primary-500" ${
                pathname === el.link ? "bg-primary-400 text-white" : ""
              }`}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className="flex items-center text-xl text-primary-600 hover:text-primary-700 px-2"
      >
        <AiFillHome />
      </Link>
    </nav>
  );
};

export default Navs;
