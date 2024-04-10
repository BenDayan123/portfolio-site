import { useInView } from "framer-motion";
import { Line } from "./line";
import CardBackground from "/card-background.png";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import {
  SiTailwindcss as Tailwind,
  SiNextdotjs as NextJS,
  SiPrisma as Prisma,
} from "react-icons/si";
import { useRef } from "react";
import { cn } from "../../utils";
import Noise from "../Noise";

export const FooterCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="overflow-hidden border border-white/15 justify-between max-lg:justify-center max-lg:items-center max-lg:flex-col dark:bg-black/50 h-96 bg-copy-light relative w-[1000px] max-md:w-full max-lg:w-fit z-50 dark:shadow-none shadow-lg rounded-l-[50px] rounded-r-[30px] flex p-12 text-white dark:text-copy-dark"
    >
      <div className="max-w-80">
        <p className="mb-3">I constantly try to improve myself</p>
        <h1 className="text-4xl max-lg:text-2xl mb-7">
          Currently, I am learning Docker.🐋
        </h1>
        <p className="opacity-60 text-xl max-lg:text-lg">
          I am also learning Kubernetes. Other than that, I also constantly
          practice Web design and Leetcode Questions Daily.
        </p>
      </div>
      <div className="w-1/2 max-lg:hidden flex justify-between p-4 h-full max-lg:h-[80%] rotate-[15deg]">
        {/* -4700 < x < -20 */}
        <Line
          icon={BiLogoTypescript}
          className={cn(
            "-translate-y-[-4500px] duration-[2s]",
            isInView && "-translate-y-[2700px]"
          )}
        />
        <Line
          icon={Tailwind}
          className={cn(
            "-translate-y-[4600px] duration-[2.3s]",
            isInView && "-translate-y-[2630px]"
          )}
        />
        <Line
          icon={NextJS}
          className={cn(
            "-translate-y-[4600px] duration-[2.3s]",
            isInView && "-translate-y-[2530px]"
          )}
        />
        <Line
          icon={Prisma}
          className={cn(
            "translate-y-[100px] duration-[1.5s]",
            isInView && "-translate-y-[2630px]"
          )}
        />
        <Line
          icon={BiLogoReact}
          className={cn(
            "-translate-y-[200px] duration-[2.2s]",
            isInView && "-translate-y-[2730px]"
          )}
        />
      </div>
      <Noise />
      <img
        alt=""
        src={CardBackground}
        className="absolute drag-none pointer-events-none z-20 top-0 left-0 w-full h-full hue-rotate-180"
      />
    </div>
  );
};
