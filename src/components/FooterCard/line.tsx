import React from "react";
import { IconType } from "react-icons";
import { cn } from "../../utils";

interface Props {
  icon: IconType;
  className?: string;
}

const points = Array.from({ length: 45 });

export const Line: React.FC<Props> = ({ icon: Icon, className }) => {
  return (
    <div
      className={cn(
        "w-[5px] h-[2000%] flex items-center flex-col duration-[1s] -translate-y-[900px] transition-all ease-[cubic-bezier(0.33_1_0.68_1)]",
        className
      )}
    >
      {points.map((_, i) => (
        <React.Fragment key={"top" + i}>
          <div className="w-[1px] bg-white/10 h-[50px]"></div>
          <Point />
        </React.Fragment>
      ))}
      <div className="w-[1px] bg-white/20 h-[40px]"></div>
      <div className="p-3 z-10 rounded-full w-fit aspect-square bg-white/10">
        <Icon size={55} className="fill-white" />
      </div>
      {points.map((_, i) => (
        <React.Fragment key={"bottom" + i}>
          <div className="w-[1px] bg-white/10 h-[40px]"></div>
          <Point />
        </React.Fragment>
      ))}
    </div>
  );
};

const Point: React.FC = () => {
  return (
    <div className="relative w-3 h-3 aspect-square bg-opacity-0 border border-white/10 rounded-full">
      <div className="rounded-full bg-white/10 aspect-square w-1 h-1 absolute-center"></div>
    </div>
  );
};
