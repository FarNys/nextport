import React from "react";
import Navs from "./Navs";

import TechContainer from "./TechContainer";
import Seo, { SeoType } from "./Seo";

interface LayoutType extends React.ComponentPropsWithoutRef<"main"> {
  props: SeoType;
}

const Layout = ({ children, props }: LayoutType) => {
  return (
    <>
      <Seo
        title={props.title}
        description={props.description}
        keywords={props.keywords}
      />
      <main className="flex min-h-screen flex-col items-center  mx-auto relative ">
        <div className="flex w-full justify-between sticky top-0 left-0 right-0 pb-4 bg-gradient-to-br from-slate-800 to-slate-900 z-10">
          <Navs />
        </div>
        <div className="max-w-7xl w-full flex-1">{children}</div>
        <TechContainer />
      </main>
    </>
  );
};

export default Layout;
