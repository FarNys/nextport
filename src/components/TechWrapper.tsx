import { ItemType } from "./TechContainer";

interface ListType {
  list: ItemType[];
}

const TechWrapper: React.FC<ListType> = ({ list }) => {
  return (
    <div className="flex w-full flex-wrap justify-center">
      {list.map((el, index) => (
        <div
          className="text-primary-500 mx-1 text-2xl tooltip relative border border-primary-500 p-1 flex justify-center items-center rounded-sm cursor-pointer mt-1"
          key={`logo-${index}`}
        >
          <p className="absolute tooltiptext flex items-center left-1/2 bottom-10 -translate-x-1/2 w-max text-xs bg-slate-950 px-3 pt-1 pb-0.5 rounded-sm border border-primary-500">
            {el.title}
          </p>
          {el.icon}
        </div>
      ))}
    </div>
  );
};

export default TechWrapper;
