import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { CardType, ProjectType } from "@/types/types";
import { SingleSectionType } from "@/types/types";
import React from "react";
import { BiTargetLock } from "react-icons/bi";
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
      desc: "در این پروژه با استفاده از tailwind css و Typescript یک کتابخانه شخصی برای کامپوننت ها ساخته شده که شامل اکثر کامپوننت های لازم برای یک پروژه می باشد که درحال تست با Cypress می باشد.",
      tags: ["React", "Typescript", "Tailwind css", "Cypress", "Unit Test"],
      link: "https://github.com/FarNys/ui-lib-container",
    },
    {
      title: "Spreadsheet",
      subTitle: "تکنولوژی ها",
      desc: "این پروژه شبیه به یک spreadsheet است، با قابلیت ساخت انواع سلول مانند number, dropdown, boolean, text, date و ... . شامل انتخاب یک یا چند سلول، یک ستون، ویرایش تکی و گروهی سلول ها، resize کردن و جابجایی ستونها و بروزرسانی زنده با کمک socket io می باشد. با قابلیت copy/paste سلول ها از Googlesheet و Excel",
      tags: [
        "React",
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
    <div className=" w-full p-3 mt-20 ">
      <h3 className="text-slate-400 flex items-center">
        <FaCircle className="ml-2 text-sm" />
        پروژه های شخصی
      </h3>
      <div className="flex mt-4">
        {projectsData.cards.map((el, index) => (
          <Card el={el} key={`card=${index}`} />
        ))}
      </div>
    </div>
  );
};

Projects.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Projects;
