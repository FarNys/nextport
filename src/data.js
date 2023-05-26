import { FaUserAlt, FaUserGraduate, FaNpm } from "react-icons/fa";
import { MdDashboardCustomize, MdOutlineAccountBox } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { BiTargetLock } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
// import { IconType } from "react-icons/lib";
// interface SingleSectionType{
//   title: string;
//   cards: {
//     icon: IconType;
//     title: string;
//     subTitle: string;
//     desc: string;
//     tags: string[];
//   }[];
// }

// interface DataType {
//   sections: SingleSectionType[];
// }

export const sectionData = {
  sections: [
    {
      title: "درباره من",
      cards: [
        {
          icon: <FaUserAlt />,
          title: "عمومی",
          subTitle: "علاقه مندی ها",
          desc: "اسم من فرید هست، اهل تهران و متولد 1372. علاقه زیادی به یادگیری دارم و تونستم با مطالعه و تماشای ویدیوهای آموزشی زیاد به همراه رو در زمینه های مختلف تماشا کردم",
          tags: ["گیم", "ویدیوآموزشی", "codewars", "anime"],
        },
        {
          icon: <FaUserGraduate />,
          title: "تخصصی",
          subTitle: "تکنولوژی ها",
          desc: "فوق لیسانس فیزیک دارم و از شهریور 1399 یادگیری برنامه نویسی رو در زمینه فرانت اند وب شروع کردم, در این مسیر ابتدا Html, Css, Js و سپس React و NextJs رو یادگرفتم. برای درک عمیق تر جاوااسکریپت به تکنولوژی سمت سرور Nodejs نیز آشنایی دارم. ",
          tags: ["↓"],
        },
      ],
    },
    {
      title: "پروژه های شرکتی",
      cards: [
        {
          icon: <BiTargetLock />,
          title: "پنل هوش تجاری",
          subTitle: "تکنولوژی",
          desc: "پنل ادمینی BI با قابیلت ایجاد نقش های مختلف برای ایجاد دسترسی های محدود، شامل ماژول های مانیتورینگ، مشتریان، انبار، مارکتینگ, آنالیتیکس",
          tags: [
            "Metronic",
            "React",
            "Bootstrap",
            "Redux toolkit",
            "ReChart",
            "NivoChart",
            "Rest Api",
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
    },
    {
      title: "پروژه های شخصی",
      cards: [
        {
          icon: <RiMovie2Line />,
          title: "فیلم های برتر",
          subTitle: "تکنولوژی ها",
          desc: "پروژه رنکینگ فیلم ها و سریال های برتر با استفاده از TMDB-api با قابیلت جستجو و ثبت نام با استفاده از Gmail",
          tags: [
            "React",
            "React-Reveal",
            "Animate",
            "Firebase",
            "Auth",
            "Scss",
          ],

          link: "https://zflix-77be9.web.app/",
        },
        {
          icon: <FaNpm />,
          title: "پکیج desingkit-react",
          subTitle: "تکنولوژی ها",
          desc: "پروژه متن باز desingkit-react شامل پکیج قابل دانلود با قابلیت شخصی سازی برپایه Tailwindcss و Typescript برای React تست شده با cypress که حاوی همه کامپوننت های پرکاربرد برای ساخت یک اپ می باشد(درحال توسعه و تست).",
          tags: [
            "React",
            "Typescript",
            "TailwindCss",
            "npm",
            "Cypress",
            "Unit Test",
          ],

          link: "https://www.npmjs.com/package/desingkit-react",
        },
        {
          icon: <MdOutlineAccountBox />,
          title: "پرتفولیو قدیمی ",
          subTitle: "تکنولوژی ها",
          desc: "پرتفولیوی قدیمی تر شامل پروژها تمرینی تکمیل شده و طراحی متفاوت ساخته شده با ری اکت و سی اس اس",
          tags: ["React", "Scss"],

          link: "https://farny.netlify.app/",
        },
      ],
    },
  ],
};
