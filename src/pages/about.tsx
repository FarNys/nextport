import Layout from "@/components/Layout";
import React from "react";
const cards = [1, 2];
const items = [1, 2, 3, 4, 5, 6];
const About = () => {
  return (
    <div className="max-w-7xl flex w-full justify-center">
      {cards.map((el, index) => (
        <div
          key={`card-${index}`}
          className="mx-2 flex-1 max-w-sm border relative rounded-md overflow-hidden border-slate-400 text-slate-800 hover:border-emerald-400 hover:text-slate-950"
        >
          <h3 className="p-3">Title</h3>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            atque magni animi, facere molestias obcaecati neque voluptatum!
            Aspernatur, quo nam?
          </p>
          {/* <div className="absolute top-0 left-0 h-full w-full "></div> */}
          <div className="p-3">
            <h3>Techs</h3>
            <ul className="flex  flex-wrap">
              {items.map((item, index) => (
                <li
                  key={`item-${index}`}
                  className="mx-0.5 mt-1 px-2 rounded-my bg-emerald-400 text-white border-transparent"
                >{`item-${index + 1}`}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

About.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default About;
