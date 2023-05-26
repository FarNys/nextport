import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMui,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiReactrouter,
  SiCypress,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiPwa,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import RQIcon from "./RQIcon";
import dynamic from "next/dynamic";
const TechWrapper = dynamic(() => import("./TechWrapper"), {
  ssr: false,
});
export interface ItemType {
  title: string;
  icon: JSX.Element;
}

const TechContainer = () => {
  const logos: ItemType[] = [
    {
      title: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      title: "React",
      icon: <SiReact />,
    },
    {
      title: "Next Js",
      icon: <SiNextdotjs />,
    },
    {
      title: "Material UI",
      icon: <SiMui />,
    },
    {
      title: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      title: "Tailwind Css",
      icon: <SiTailwindcss />,
    },
    {
      title: "Scss",
      icon: <BsFiletypeScss />,
    },
    {
      title: "Redux, Redux Toolkit",
      icon: <SiRedux />,
    },
    {
      title: "React Router",
      icon: <SiReactrouter />,
    },
    {
      title: "React Query",
      icon: <RQIcon />,
    },
  ];
  const otherLogos: ItemType[] = [
    {
      title: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      title: "PWA",
      icon: <SiPwa />,
    },
    {
      title: "Cypress(Test Tool)",
      icon: <SiCypress />,
    },
    {
      title: "NodeJs",
      icon: <SiNodedotjs />,
    },
    {
      title: "ExpressJs",
      icon: <SiExpress />,
    },
    {
      title: "Postgresql",
      icon: <SiPostgresql />,
    },
    {
      title: "Prisma(ORM)",
      icon: <SiPrisma />,
    },
    {
      title: "Socket IO",
      icon: <SiSocketdotio />,
    },
  ];

  return (
    <div className="flex w-full justify-center absolute bottom-0 flex-col">
      <div className="flex flex-col items-center">
        <h6 className="text-lg text-slate-400">مسلط به</h6>
        <TechWrapper list={logos} />
      </div>
      <div className="flex flex-col items-center my-3">
        <h6 className="text-lg text-slate-400">آشنا به</h6>
        <TechWrapper list={otherLogos} />
      </div>
    </div>
  );
};

export default TechContainer;
