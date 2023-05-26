import Layout from "@/components/Layout";
import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import Gallery from "@/components/Gallery";
import bi_Img from "/images/bi_menu.jpg";

const expData = {
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
    },
    {
      icon: <SiWebmoney />,
      title: "سایت کاوینو",
      subTitle: "تکنولوژی",
      desc: "سایت کاوینو ساخته شده با استفاده از تکنولوژی های Nextjs, PWA و پشتیبانی سمت سرور بوسیله Strapi Headless CMS",
      tags: ["Nextjs", "Scss", "SSR-SSG", "PWA", "Strapi", "Headless CMS"],
      link: "https://kavino.netlify.com/",
    },
  ],
};

const Experiences = () => {
  return (
    <div className="border w-full p-3 mt-20 ">
      <h3 className="text-slate-400 flex items-center">
        <FaCircle className="ml-2 text-sm" />
        از بهمن 1400 تا اردیبهشت 1402 - مدیاژ (کاوینو)
      </h3>
      <div className="flex mt-4">
        {expData.cards.map((el, index) => (
          <div
            key={`card-${index}`}
            className="flex-1 flex flex-col border-2 rounded-my mx-1 first:mr-0 bg-gradient-to-bl from-white to-primary-100 px-4 hover:border-primary-600"
          >
            <div className="flex justify-between my-2 items-center text-primary-700 text-lg">
              <h4>{el.title}</h4>
              <p>{el.icon}</p>
            </div>
            <p className="h-full">{el.desc}</p>
            <div className="mt-3">
              <h4 className="text-sm text-slate-500">{el.subTitle}</h4>
              <ul className="flex flex-wrap mb-2">
                {el.tags.map((item, index) => (
                  <li
                    className="rounded-my border text-sm w-max px-2 pt-1 pb-0.5 ml-1 mt-0.5 border-primary-400 bg-white text-slate-800"
                    key={`tech-${index}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-3">
              <h4 className="text-sm text-slate-500">تصاویر</h4>
              <Gallery
                galleryID="my-test-gallery"
                images={[
                  {
                    url: "/images/bi_menu.png",
                    width: 1366,
                    height: 738,
                  },
                  {
                    url: "/images/bi_sale.png",
                    width: 1366,
                    height: 738,
                  },
                ]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Experiences.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Experiences;
