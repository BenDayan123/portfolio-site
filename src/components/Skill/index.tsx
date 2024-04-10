import { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import "./style.scss";

interface Props {
  icon: IconType;
  title: string;
}

export const Skill: React.FC<PropsWithChildren<Props>> = ({
  children,
  icon: Icon,
  title,
}) => {
  return (
    <div className="group skill text-copy-light cursor-pointer dark:text-copy-dark relative rounded-[30px] overflow-hidden">
      <div className="absolute size-full bg-gradient-to-t from-blue-500/10 to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="flex max-lg:items-center flex-col max-lg:flex-row gap-5 px-8 pb-6 mt-6 space-y-2">
        <div className="bg-blue-700 inline-flex w-fit rounded-lg p-3 ring-4 ring-slate-800">
          <Icon className="fill-white" size={25} />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold">{title}</h1>
          <p className="opacity-70">{children}</p>
        </div>
      </div>
    </div>
  );
};
