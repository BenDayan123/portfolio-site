import Noise from "../Noise";
import { cn } from "../../utils";
import {
  MdPlayCircleFilled,
  MdVolumeUp,
  MdLyrics,
  MdQueueMusic,
  MdSkipPrevious,
  MdSkipNext,
  MdLoop,
  MdShuffle,
} from "react-icons/md";
import { InputRange } from "./range";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BeatunePlayer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "w-[1277px] scale-x-0 duration-[1s] delay-[400ms] max-lg:w-fit mx-auto overflow-hidden rounded-2xl relative select-none pointer-events-none flex-center max-w-full",
        `before:inset-0 before:absolute before:content-[""] before:[mask-size:auto,_auto] before:[mask-repeat:repeat,_repeat] before:[mask-origin:content-box,_border-box] before:[mask-clip:content-box,_border-box] before:[mask-composite:exclude] before:[border-radius:inherit] before:p-px before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask-image:linear-gradient(black,black),_linear-gradient(black,black)]`,
        `after:content-[""] after:absolute after:pointer-events-none after:select-none after:opacity-80 after:bg-[radial-gradient(ellipse_50%_50%_at_center,_rgba(194,97,254,_0.1),_transparent)] after:[transition:opacity_960ms_ease_0s]`,
        isInView && "scale-x-100"
      )}
    >
      <Noise />
      <div
        className={cn(
          "flex justify-between delay-[1.4s] duration-500 max-lg:flex-col max-lg:gap-2 p-7 opacity-0 items-center w-full [mask-image:linear-gradient(blac,_transparent)]",
          isInView && "opacity-100"
        )}
      >
        <div className="flex items-center gap-4 max-lg:gap-8 [flex:0_1_calc(100%_/_3)] max-lg:flex-col">
          <img
            className="size-20 max-lg:size-64 aspect-square rounded-md shadow-xl shadow-orange-500/10"
            src="https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg"
            alt="profile"
          />
          <div className="text-white max-lg:text-center">
            <h1 className="font-bold text-2xl">I Fall Apart</h1>
            <h3 className="font-semibold opacity-75">Post Malone</h3>
          </div>
        </div>
        <div className="space-y-2 [flex:0_1_calc(100%_/_3)]">
          <div className="flex-center gap-1 max-lg:gap-2">
            <MdShuffle color="white" size={25} className="opacity-60" />
            <MdSkipPrevious color="white" size={25} className="opacity-60" />
            <MdPlayCircleFilled color="white" size={50} />
            <MdSkipNext color="white" size={25} className="opacity-60" />
            <MdLoop color="white" size={25} className="opacity-60" />
          </div>
          <div className="relative">
            <p className="text-white/50 text-xs absolute -translate-x-full -left-3 -translate-y-1/2 mt-[3px] top-1/2">
              2:55
            </p>
            <InputRange className="w-full flex-1" value={70} />
            <p className="text-white/50 text-xs absolute translate-x-full -right-3 -translate-y-1/2 mt-[3px] top-1/2">
              3:34
            </p>
          </div>
        </div>
        <div className="[flex:0_1_calc(100%_/_3)] flex items-center justify-end gap-3 max-lg:hidden">
          <MdQueueMusic color="white" size={25} className="opacity-60" />
          <MdLyrics color="white" size={25} className="opacity-60" />
          <MdVolumeUp color="white" size={25} className="opacity-60" />
          <InputRange value={30} />
        </div>
      </div>
    </div>
  );
};

export default BeatunePlayer;
