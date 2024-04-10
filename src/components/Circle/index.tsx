import Beatune from "/Beatune/logo.svg";
import { FaReact as ReactIcon, FaSass as Sass } from "react-icons/fa";
import {
  SiNestjs as Nestjs,
  SiTauri as Tauri,
  SiTypescript as TypeScript,
  SiMongodb as MongoDB,
  SiAuth0 as Auth,
} from "react-icons/si";
import { CirclusPath } from "./circles";
import "./style.scss";
import Noise from "../Noise";
import { cn } from "../../utils";

interface Props {
  className?: string;
}

const circles = Array.from({ length: 24 });
const brands = [ReactIcon, MongoDB, Sass, Auth, Nestjs, Tauri, TypeScript];

export const BoxCircle: React.FC<Props> = ({ className }) => {
  //
  return (
    <div
      className={cn(
        "card-box bg-background-light/80 dark:bg-background-dark/20 overflow-hidden h-full w-96 relative rounded-md border border-black/30 dark:border-white/10",
        className
      )}
    >
      <Noise className="opacity-90" />
      <div className="absolute w-full h-full build-crafted-box-circles-gradient build-crafted-box-circles">
        {circles.map((_, i) => (
          <Rings index={i} key={`circle-gradient#${i}`} />
        ))}
      </div>

      <div className="absolute w-full h-full build-crafted-box-circles">
        {circles.map((_, i) => (
          <Rings index={i} key={`circle#${i}`} />
        ))}
      </div>
      <img
        src={Beatune}
        alt="beatune"
        className="absolute w-20 h-auto aspect-square top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <CirclusPath size={90} reverse>
        {brands.map((Icon, i) => (
          <Icon
            key={`brand-image#1${i}`}
            className="fill-black dark:fill-white w-1/2 h-auto"
          />
        ))}
      </CirclusPath>
      <CirclusPath size={130} className="scale-[.4]">
        {brands.map((_, i) => (
          <div key={`brand-image#2${i}`} />
        ))}
      </CirclusPath>
      <CirclusPath size={190} className="scale-50" reverse>
        {brands.map((_, i) => (
          <div key={`brand-image#3${i}`} />
        ))}
      </CirclusPath>
      <CirclusPath size={270} className="scale-[.3]">
        {brands.map((_, i) => (
          <div key={`brand-image#4${i}`} />
        ))}
      </CirclusPath>
    </div>
  );
};

const Rings: React.FC<{ index: number }> = ({ index: i }) => {
  return (
    <div
      className="absolute aspect-square rounded-full"
      style={{
        width: 104 + i * 32,
        height: 104 + i * 32,
        top: `calc(50% - ${52 + i * 16}px)`,
        left: `calc(50% - ${52 + i * 16}px)`,
        rotate: `-${17 * i}deg`,
      }}
    ></div>
  );
};
