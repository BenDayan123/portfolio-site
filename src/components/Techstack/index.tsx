import Database from "/Techstack/database.svg";
import Git from "/Techstack/git.svg";
import HTML from "/Techstack/html.svg";
import Javascript from "/Techstack/javascript.svg";
import Python from "/Techstack/python.svg";
import ReactIcon from "/Techstack/react.svg";
import Tailwind from "/Techstack/tailwind.svg";
import Sass from "/Techstack/sass.svg";
import NextJS from "/Techstack/next.svg";
import Prisma from "/Techstack/prisma.svg";
import Tauri from "/Techstack/tauri.svg";
import TypeScript from "/Techstack/typescript.svg";
import Socket from "/Techstack/socket.svg";
import NestJS from "/Techstack/nestjs.svg";
import VSCode from "/Techstack/vscode.svg";
import NodeJS from "/Techstack/nodejs.svg";
import Postman from "/Techstack/postman.svg";
import CSharp from "/Techstack/csharp.svg";
import Vite from "/Techstack/vite.svg";
import Yarn from "/Techstack/yarn.svg";

import Grid from "/grid.png";
import { Icon } from "../Icon";
import { cn } from "../../utils";
import { Badge } from "../Badge";
import { CircleWave } from "./CircleWave";
import Eclipse from "../Eclipse";
import "./style.scss";

const backend = [
  { src: Database, text: "MongoDB" },
  { src: NextJS, text: "Next.js", className: "dark:invert" },
  { src: NestJS, text: "NestJS" },
  { src: Socket, text: "Socket.IO" },
  { src: NodeJS, text: "NodeJS" },
  { src: Prisma, text: "Prisma", className: "dark:invert" },
];
const frontend = [
  { src: HTML, text: "HTML" },
  { src: Tailwind, text: "Tailwind" },
  { src: Sass, text: "Sass" },
  { src: ReactIcon, text: "React" },
  { src: Tauri, text: "Tauri" },
];
const tools = [
  { src: Git, text: "Git" },
  { src: VSCode, text: "VSCode" },
  { src: Postman, text: "Postman" },
  { src: Yarn, text: "Yarn" },
  { src: Vite, text: "Vite" },
];
const languages = [
  { src: Javascript, text: "Javascript" },
  { src: Python, text: "Python" },
  { src: TypeScript, text: "Typescript" },
  { src: CSharp, text: "C#" },
];
{
  /* <div className="absolute z-50 size-full bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,_rgba(180,_112,_243,_0.1),_transparent)]"></div> */
}

export const GridTechStack: React.FC = () => {
  return (
    <div className="relative z-50 bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,_rgba(102,_99,_246,_0.1),_transparent)]">
      <Eclipse />
      <div className="-translate-y-36 p-6" id="techstack">
        <Badge text="Fullstack" />
        <h1 className="relative text-6xl text-center w-fit mx-auto font-semibold text-copy-light dark:text-copy-dark">
          My Tech Stack <br /> Technologies
        </h1>
        <div className="relative grid overflow-hidden mt-10 z-50 grid-cols-2 h-[432px] mx-auto w-1/2 max-2xl:w-full pt-[24px]">
          <div
            style={{ backgroundImage: `url(${Grid})` }}
            className="absolute bg-cover bg-center max-md:hidden h-full w-full invert dark:invert-0"
          ></div>

          <CircleWave />

          <Cell
            skills={backend}
            title="Back-End"
            className="dark:bg-[radial-gradient(100%_100%_at_100%_100%,_rgba(255,_255,_255,_.08)_0%,_rgba(3,_0,_20,_0)_100%)]
                  bg-[radial-gradient(100%_100%_at_100%_100%,_rgba(0,0,0,_.08)_0%,_rgba(3,_0,_20,_0)_100%)]"
          />
          <Cell
            skills={languages}
            title="Languages"
            className="dark:bg-[radial-gradient(100%_100%_at_0%_100%,_rgba(255,_255,_255,_.03)_0%,_rgba(3,_0,_20,_0)_100%)]
                  bg-[radial-gradient(100%_100%_at_0%_100%,_rgba(0,0,0,_.03)_0%,_rgba(3,_0,_20,_0)_100%)]"
          />
          <Cell
            skills={tools}
            title="Tools"
            className="dark:bg-[radial-gradient(100%_100%_at_100%_0%,_rgba(255,_255,_255,_.03)_0%,_rgba(3,_0,_20,_0)_100%)]
                  bg-[radial-gradient(100%_100%_at_100%_0%,_rgba(0,0,0,_.03)_0%,_rgba(3,_0,_20,_0)_100%)]"
          />
          <Cell
            skills={frontend}
            title="Front-End"
            className="dark:bg-[radial-gradient(100%_100%_at_0%_0%,_rgba(255,_255,_255,_.08)_0%,_rgba(3,_0,_20,_0)_100%)]
                  bg-[radial-gradient(100%_100%_at_0%_0%,_rgba(0,0,0,_.08)_0%,_rgba(3,_0,_20,_0)_100%)]"
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  skills: typeof backend;
  title: string;
  className?: string;
}

export const Cell: React.FC<Props> = ({ skills, title, className }) => {
  return (
    <div
      className={cn(
        "p-7 w-full h-full flex-center gap-4 flex-col overflow-hidden",
        className
      )}
    >
      <div className="flex justify-center flex-wrap gap-4 border border-black/10 bg-white/10 dark:border-white/10 dark:bg-black/20 p-3 rounded-md">
        {skills.map((skill, i) => (
          <div className="relative group" key={skill.text + i}>
            <Icon
              {...skill}
              className={cn(
                skill.className,
                "rounded-md max-md:w-7 max-md:h-7"
              )}
            />
            <span className="absolute w-px dark:bg-white/10 bg-black/20 rounded-lg -translate-x-full h-3/4 top-1/2 -translate-y-1/2 -right-1/4 group-last:hidden max-md:hidden"></span>
          </div>
        ))}
      </div>
      <h1 className="font-semibold text-xl text-copy-light dark:text-copy-dark text-center max-md:hidden">
        {title}
      </h1>
    </div>
  );
};
