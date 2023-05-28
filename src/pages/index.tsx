import Layout from "@/components/Layout";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" w-full justify-between mt-8 p-3 flex flex-col md:flex-row md:mt-44">
        <div className="flex-1 max-w-sm">
          <h4 className="text-xl text-primary-500 font-semibold">
            JavaScript. React. Next
          </h4>
          <h1 className="text-3xl mt-4 font-extrabold text-slate-400 leading-snug">
            <span className="gradiant_bg bg-gradient-to-r from-primary-500 to-primary-300 ">
              فرانت اند
            </span>
            <span> </span>
            وب دولوپر، آماده ی ساخت وب سایت و وب اپ با بروزترین تکنولوژی ها.
          </h1>
          <div className="mt-12 flex">
            <Link href="/experiences" className="ml-2">
              <button className="group flex items-center bg-primary-600 px-4 py-2 rounded-md border border-primary-600 text-slate-200 hover:bg-primary-700">
                پروژه ها
                <BsArrowLeftShort className="mx-1 group-hover:-translate-x-2 text-2xl duration-300" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="group flex items-center  px-4 py-2 rounded-md border border-primary-600 text-slate-200 hover:bg-primary-700">
                تماس
                <BsArrowLeftShort className="mx-1 group-hover:-translate-x-2 text-2xl duration-300" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex-1 max-w-2xl mt-4 md:mt-0">
          <p className="text-slate-400">
            سلام، اسم من فرید هست. توسعه دهنده وب وعلاقه مند به تکنولوژی های
            جدید. با گرایش به مطالعه پکیچ ها و بهینه سازی ها
            <br />
            از شهریور 1399 یادگیری برنامه نویسی رو با یادگیری HTML, CSS, JS شروع
            کردم و پس از اون به سراغ کتابخانه ری اکت رفتم و بیش از 2سال هست که
            دارم با React و به دنبال آن Nextjs کار می کنم. برای درک عمیقتر نحوه
            عملکرد یک برنامه همزمان با افزایش دانش فرانت اند، کمی هم با ابزار
            سمت سرور Nodejs, Postgresql, Prisma آشنایی پیدا کردم.
          </p>
        </div>
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout
      props={{
        title: "خانه",
        description: "صفحه اصلی پرتفولیو",
        keywords:
          "react, nextjs, typescript, tailwindcss, materialui, scss, html, css, bootstrap, redux,react query, frontend, front end, web, web developer, frontend web developer, javascript",
      }}
    >
      {page}
    </Layout>
  );
};
