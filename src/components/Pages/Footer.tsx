import Noise from "../Noise";
import { FooterCard } from "../FooterCard";
import Memoji from "/emoji.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils";

const linkStyle =
  "size-16 flex-center cursor-pointer hover:bg-white/10 transition-colors";

export const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <footer
      id="contact"
      className="w-full top-border p-10 z-50 bg-[radial-gradient(_32.81%_53.93%_at_50%_0%,_rgba(133,_102,_255,_0.04)_0%,_rgba(133,_102,_255,_0)_100%,_rgba(133,_102,_255,_0)_100%_)]"
    >
      <div ref={ref} className="flex gap-3 justify-center max-md:flex-col">
        <FooterCard />
        <div className="text-gray-200 relative p-10 overflow-hidden h-96 rounded-r-[50px] rounded-l-[30px] bg-gradient-to-br from-blue-900 to-sky-300">
          <Noise />
          <div
            className={cn(
              "opacity-0 duration-1000 transition-all",
              isInView && "opacity-100"
            )}
          >
            <h1 className="text-3xl font-semibold">Contact me</h1>
            <p className="text-base opacity-70 w-1/2">
              Make a contact via email or LinkedIn DMs.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-md w-max divide-y divide-white/15 my-9 z-20">
              <a
                href="mailto:ben.dayan123@gmail.com"
                className={linkStyle}
                title="ben.dayan123@gmail.com"
              >
                <MdAlternateEmail size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/ben-dayan/"
                className={linkStyle}
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
          </div>
          <img
            src={Memoji}
            alt="memoji"
            className={cn(
              "absolute -right-10 duration-1000 delay-700 transition-[cubic-bezier(0.33_1_0.68_1)] -bottom-full h-[70%] object-cover w-auto pointer-events-none max-md:h-[60%]",
              isInView && "bottom-0"
            )}
          />
        </div>
      </div>
    </footer>
  );
};

{
  /* <section className="relative hero-background overflow-hidden z-10 pt-4 w-[1440px] h-[600px] mx-auto mt-[64px]">
    <div className="h-fit absolute left-1/2 -translate-x-1/2 w-[1000px] flex justify-center">
        <div className="w-full absolute top-0">
        <div className="hero-background-circle h-[1000px] top-0 rounded-[50%] absolute w-full bg-background-dark"></div>
        <div className="hero-background-circle h-[820px] aspect-square top-[164px] z-[3] rounded-[50%] absolute w-full bg-background-dark"></div>
        <div className="hero-background-circle h-[720px] top-[296px] z-[5] rounded-[50%] absolute w-full bg-background-dark"></div>
        </div>
        <div className="hero-background-circle-lights top-0 relative w-full">
        <motion.img
            src={Light}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            alt=""
            className="orbit hidden z-[1] origin-center top-24 drag-none absolute w-[716px] h-[558px]"
        />
        </div>
    </div>
</section> */
}
