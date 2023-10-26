import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { ProjectType } from "@/types/types";
import React from "react";
import { FaCircle } from "react-icons/fa";

const projectsData: ProjectType = {
  title: "پروژه ها",
  cards: [
    {
      title: "فیلم های برتر",
      subTitle: "تکنولوژی ها",
      desc: "پروژه رنکینگ فیلم ها و سریال های برتر با استفاده از TMDB-api با قابیلت جستجو و ثبت نام با استفاده از Gmail",
      tags: ["React", "Scss", "React-Reveal", "Redux toolkit", "Firebase"],
      link: "https://zflix-77be9.web.app/",
    },
    {
      title: "کتابخانه myreact-ui-lib",
      subTitle: "تکنولوژی ها",
      desc: "در این پروژه با استفاده از tailwind css و Typescript یک کتابخانه شخصی برای کامپوننت ها ساخته شده که شامل اکثر کامپوننت های لازم برای یک پروژه که با cypress تست شده است.(درحال توسعه)",
      tags: ["React", "Typescript", "Tailwind css", "Cypress", "Unit Test"],
      link: "/projects/ui",
    },
    {
      title: "Spreadsheet",
      subTitle: "تکنولوژی ها",
      desc: "این پروژه شبیه به یک spreadsheet است، با قابلیت ساخت انواع سلول مانند number, dropdown, boolean, text, date و ... . شامل انتخاب یک یا چند سلول، یک ستون، ویرایش تکی و گروهی سلول ها، resize کردن و جابجایی ستونها و بروزرسانی زنده با کمک socket io می باشد. با قابلیت copy/paste سلول ها از Googlesheet و Excel",
      tags: [
        "React",
        "Typescript",
        "Redux toolkit",
        "React-Virtualize",
        "Socket io",
        "Cypress",
        "Tailwind css",
        "Postgresql",
        "Nodejs",
        "Prisma",
      ],
      images: [
        {
          url: "/images/fsheet_1.png",
          height: 500,
          width: 1450,
        },
        {
          url: "/images/fsheet_2.png",
          height: 500,
          width: 1450,
        },
        {
          url: "/images/fsheet_3.png",
          height: 500,
          width: 1450,
        },
      ],
    },
  ],
};

const Projects = () => {
  return (
    <div className=" w-full p-3 mt-4 md:mt-10">
      <h3 className="text-slate-400 flex items-center">
        <FaCircle className="ml-2 text-sm" />
        پروژه های شخصی
      </h3>
      <div className="flex mt-4 flex-col md:flex-row">
        {projectsData.cards.map((el, index) => (
          <Card el={el} key={`card=${index}`} />
        ))}
      </div>
    </div>
  );
};

Projects.getLayout = (page: React.ReactElement) => {
  return (
    <Layout
      props={{
        title: "پروژه ها",
        description:
          "پروژه های متن باز و در حال توسعه شخصی جهت یادگیری و تمرین تکنولوژی های جدید",
        keywords:
          "react, nextjs, typescript, tailwindcss, materialui, scss, html, css, bootstrap, redux,react query, frontend, front end, web, web developer, frontend web developer, javascript",
      }}
    >
      {page}
    </Layout>
  );
};

export default Projects;
