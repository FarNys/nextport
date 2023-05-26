import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="border w-full mt-44 p-3 flex">
      <div className="flex-1">
        <h4 className="text-xl text-primary-500 font-semibold">
          JavaScript. React. Next
        </h4>
        <h1 className="text-4xl max-w-sm mt-4 font-extrabold text-slate-400 leading-snug">
          <span className="gradiant_bg bg-gradient-to-r from-primary-500 to-primary-300 ">
            فرانت اند
          </span>
          <span> </span>
          وب دولوپری که با کتابخانه ری اکت کار می کنم.
        </h1>
        <div className="mt-12 flex">
          <Link href="/" className="ml-2">
            <button className="group flex items-center bg-primary-600 px-4 py-2 rounded-md border border-primary-600 text-slate-200 hover:bg-primary-700">
              پروژه ها
              <BsArrowLeftShort className="mx-1 group-hover:-translate-x-2 text-2xl duration-300" />
            </button>
          </Link>
          <Link href="/">
            <button className="group flex items-center  px-4 py-2 rounded-md border border-primary-600 text-slate-200 hover:bg-primary-700">
              تماس
              <BsArrowLeftShort className="mx-1 group-hover:-translate-x-2 text-2xl duration-300" />
            </button>
          </Link>
        </div>
      </div>
      <div className="border flex-1">
        <p className="text-slate-400">
          سلام، اسم من فرید هست. توسعه دهنده وب وعلاقه مند به تکنولوژی های جدید.
          با تمرکز بیشتر برروی نحوه عملکرد برنامه های تحت وب.
          <br />
          از شهریور 1399 یادگیری برنامه نویسی رو با یادگیری HTML, CSS, JS شروع
          کردم و پس از اون به سراغ کتابخانه ری اکت رفتم. برای درک عمیقتر نحوه
          عملکرد یک برنامه همزمان با افزایش دانش فرانت اند، کمی هم با ابزار سمت
          سرور Nodejs, Postgresql, Prisma کار کردم.
        </p>
      </div>
    </div>
  );
}
Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
