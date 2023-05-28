import Layout from "@/components/Layout";
import React from "react";
import { AiFillGithub, AiTwotonePhone } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
interface AccountType {
  title: string;
  address: string;
  logo: JSX.Element;
  link?: string;
}

const acctouns: AccountType[] = [
  {
    title: "پست الکترونیکی",
    logo: <SiGmail />,
    address: "faridsalmaniy@gmail.com",
  },
  {
    title: "تلفن",
    logo: <AiTwotonePhone />,
    address: "09361455030",
  },
  {
    title: "گیت هاب",
    logo: <AiFillGithub />,
    address: "https://github.com/FarNys",
    link: "https://github.com/FarNys",
  },
];

const Contact = () => {
  return (
    <div className=" w-full p-3 mt-4 md:mt-20">
      <h3 className="text-slate-400 flex items-center">
        <FaCircle className="ml-2 text-sm" />
        اکانت ها جهت ارتباط
      </h3>
      <ul className="mt-4 text-primary-200">
        {acctouns.map((acc, index) => (
          <li key={`acc-${index}`} className="flex items-center mt-4">
            <div className="flex items-center text-slate-500">
              {acc.logo}
              <p className="px-2 w-max">{acc.title}</p>
            </div>
            <div className="flex items-center">
              {acc.link ? (
                <a href={acc.link} target="_blank">
                  {acc.address}
                </a>
              ) : (
                <p>{acc.address}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contact.getLayout = (page: React.ReactElement) => {
  return (
    <Layout
      props={{
        title: "اکانت ها جهت تماس",
        description: "اکانت های ارتباطی جهت تماس و همکاری",
        keywords:
          "react, nextjs, typescript, tailwindcss, materialui, scss, html, css, bootstrap, redux,react query, frontend, front end, web, web developer, frontend web developer, javascript",
      }}
    >
      {page}
    </Layout>
  );
};

export default Contact;
