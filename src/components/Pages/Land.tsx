import TitleButton from "../Buttons/Title";
import { IoIosApps } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { Skill } from "../Skill";
import { useInView } from "framer-motion";
import { cn } from "../../utils";
import { useRef } from "react";

const initial =
  "transition-[transform_opacity] opacity-0 translate-y-5 ease-in duration-[800ms] delay-[800ms]";
const animation = "translate-y-0 opacity-100";

export const LandSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="home"
      ref={ref}
      className="relative flex flex-col md:items-center md:justify-evenly min-h-screen h-screen w-full bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,_rgba(120,_119,_198,_0.2),transparent)]"
    >
      <div
        className={
          "absolute size-full bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,_rgba(120,_119,_198,_0.07),_transparent)]"
        }
      ></div>

      <div className="flex justify-evenly items-center p-4 w-full z-50 gap-7 flex-wrap">
        <div className="flex flex-col gap-3 max-lg:ml-0 max-lg:items-center justify-center relative z-10 pt-20 md:pt-0">
          <h1
            className={cn(
              "text-4xl max-lg:text-center md:text-7xl font-bold text-left text-copy-light dark:text-copy-dark",
              initial,
              isInView && animation
            )}
          >
            Hi, I&apos;m Ben Dayan.👋
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-animate-pan max-lg:text-center">
              <code>{`<Fullstack/>`}</code> Web Developer
            </span>
          </h1>
          <p
            className={cn(
              "mt-4 text-lg max-lg:text-center text-copy-light dark:text-copy-light-dark max-w-lg",
              initial,
              "duration-[1.2s] delay-[1.2s]",
              isInView && animation
            )}
          >
            Crative and self taught web developer can build web and native
            application, and handle the backend and the frontend behind the
            application
          </p>

          <TitleButton
            target="_blank"
            href="https://github.com/BenDayan123"
            className={cn(
              initial,
              "duration-[1.8s] delay-[1.8s]",
              isInView && animation
            )}
          />
        </div>

        {/* <div className="relative aspect-square h-full max-lg:hidden"></div> */}
      </div>
      <div
        className={cn(
          "grid grid-cols-3 z-50 mx-auto w-1/2 max-lg:w-full max-lg:grid-cols-1",
          initial,
          "duration-[2.4s] delay-[2.2s]",
          isInView && animation
        )}
      >
        <Skill title="Web Apps" icon={IoIosApps}>
          I develop web applications with Typescript and React
        </Skill>
        <Skill title="Self Learning" icon={FaBookOpenReader}>
          Fast Self Learner, and always updated to the lastest technologies
        </Skill>
        <Skill title="Problem Solver" icon={GiBrain}>
          Problem-solving skills and my ability to troubleshoot and debug issues
          effectively.
        </Skill>
      </div>
    </div>
  );
};
