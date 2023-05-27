import Link from "next/link";
import React from "react";
const items: { link: string; title: string }[] = [
  {
    link: "/experiences",
    title: "تجربه",
  },
  {
    link: "projects",
    title: "پروژه ها",
  },
  {
    link: "/contact",
    title: "تماس",
  },
];

const Navs = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 w-full flex ">
      <ul className="flex justify-center mt-3">
        {items.map((el, index) => (
          <li key={`nav-${index}`}>
            <Link
              href={el.link}
              className="mx-1 border border-transparent rounded-my px-2 py-1 text-slate-400 hover:bg-primary-500 hover:text-white hover:border-primary-500"
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navs;
