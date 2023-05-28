import Layout from "@/components/Layout";
import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { FaCircle } from "react-icons/fa";

import Card from "@/components/Card";
import { SingleSectionType } from "@/types/types";

const expData: SingleSectionType = {
  title: "پروژه های شرکتی",
  cards: [
    {
      icon: <BiTargetLock />,
      title: "پنل هوش تجاری",
      subTitle: "تکنولوژی",
      desc: "پنل ادمینی BI با قابیلت ایجاد نقش های مختلف برای ایجاد دسترسی های متنوع شامل ماژول های مانیتورینگ، مشتریان، انبار، مارکتینگ, آنالیتیکس برای گزارش وضعیت با استفاده از نمودار و جدول",
      tags: [
        "Metronic",
        "React",
        "Bootstrap",
        "Redux toolkit",
        "ReChart",
        "NivoChart",
        "Rest Api",
        "Auth",
      ],
      images: [
        {
          url: "/images/bi_menu.png",
          width: 1366,
          height: 738,
        },
        {
          url: "/images/bi_sale_.png",
          width: 1366,
          height: 738,
        },
        {
          url: "/images/bi_table.png",
          width: 1366,
          height: 738,
        },
      ],
    },
    {
      icon: <MdDashboardCustomize />,
      title: "پنل ورکفلو",
      subTitle: "تکنولوژی",
      desc: "پنل workflow، برنامه ای با قابیلت های شبیه به spreadsheet مانند دسترسی همزمان، بروز رسانی زنده و انتخاب محدوده ای از سلول ها برای ویرایش. قابلیت تعیین دسترسی های متفاوت به هر ستون و نوبت دهی در تکمیل سلول های صفحه.",
      tags: [
        "React",
        "Bootstrap",
        "Metronic",
        "Authentication",
        "Authorization",
        "RBAC",
        "Redux toolkit",
        "react-datasheet-grid",
        "Rest Api",
      ],
      images: [
        {
          url: "/images/wf_access.png",
          width: 1366,
          height: 738,
        },
        {
          url: "/images/wf_create.png",
          width: 1366,
          height: 738,
        },
        {
          url: "/images/wf_sheet.png",
          width: 1366,
          height: 738,
        },
      ],
    },
    {
      icon: <SiWebmoney />,
      title: "سایت کاوینو",
      subTitle: "تکنولوژی",
      desc: "سایت کاوینو ساخته شده با استفاده از تکنولوژی های Nextjs, PWA و پشتیبانی سمت سرور بوسیله Strapi Headless CMS",
      tags: ["Nextjs", "Scss", "SSR-SSG", "PWA", "Strapi", "Headless CMS"],
      link: "https://kavino.netlify.com/",
      images: [
        {
          url: "/images/kavino_1.png",
          width: 1366,
          height: 738,
        },
        {
          url: "/images/kavino_2.png",
          width: 1366,
          height: 738,
        },
        {
          url: "/images/kavino_3.png",
          width: 1366,
          height: 738,
        },
      ],
    },
  ],
};

const Experiences = () => {
  return (
    <div className=" w-full p-3 mt-4 md:mt-20">
      <h3 className="text-slate-400 flex items-center">
        <FaCircle className="ml-2 text-sm" />
        از بهمن 1400 تا اردیبهشت 1402 - مدیاژ (کاوینو)
      </h3>
      <div className="flex mt-4 flex-col md:flex-row">
        {expData.cards.map((el, index) => (
          <Card el={el} key={`card=${index}`} />
        ))}
      </div>
    </div>
  );
};

Experiences.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      props={{
        title: "تجربه کاری",
        description:
          "شامل پروژه های شرکتی توسعه داده شده با react و nextjs و readux",
        keywords:
          "react, nextjs, typescript, scss, html, css, bootstrap, redux,react query, frontend, front end, web, web developer, frontend web developer, javascript",
      }}
    >
      {page}
    </Layout>
  );
};

export default Experiences;
