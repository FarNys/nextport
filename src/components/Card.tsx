import React from "react";
import Gallery from "./Gallery";
import { FiLink } from "react-icons/fi";
import { CardType } from "@/types/types";

const Card: React.FC<{ el: CardType }> = ({ el }) => {
  return (
    <div className="flex-1 mt-2 flex flex-col border border-slate-700 rounded-my mx-1 first:mr-0 bg-gradient-to-bl from-slate-900 to-slate-800 px-4 hover:to-slate-900">
      <div className="flex justify-between my-2 items-center text-slate-400 text-lg">
        <h4>{el.title}</h4>
        <p>{el.icon}</p>
      </div>
      <p className="text-slate-200">{el.desc}</p>
      <div className="mt-3 h-full">
        <h4 className="text-sm text-slate-400">{el.subTitle}</h4>
        <ul className="flex flex-wrap mb-2 mt-1">
          {el.tags.map((item, index) => (
            <li
              className="rounded-my  text-sm w-max px-2 pt-1 pb-0.5 ml-1 mt-0.5 border border-slate-700  bg-slate-900 text-slate-200"
              key={`tech-${index}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {el.link && (
        <a
          href={el.link}
          className="mt-3 mb-2 hover:text-primary-600 font-semibold flex items-center text-sm text-slate-500"
          target="_blank"
        >
          <FiLink className="ml-1 " />
          لینک دمو
        </a>
      )}
      {el.images && el?.images.length > 0 && (
        <div className="my-3">
          <div className="flex text-sm text-slate-500">
            <h4>تصاویر</h4>
          </div>

          <Gallery galleryID="my-test-gallery" images={el.images} />
        </div>
      )}
    </div>
  );
};

export default Card;
