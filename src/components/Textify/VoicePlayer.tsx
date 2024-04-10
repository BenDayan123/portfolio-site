import { MdPlayArrow } from "react-icons/md";
import { cn } from "../../utils";
import WaveSound from "/wave_sound.svg";

export const VoicePlayer: React.FC = () => {
  return (
    <div
      className={cn(
        "flex w-fit pointer-events-none items-center gap-x-2 overflow-hidden rounded-full px-2 bg-textify-surface-light dark:bg-textify-surface-dark shadow-lg"
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "relative z-10 aspect-square cursor-pointer rounded-full bg-blue-500 p-2 transition-colors duration-700 active:scale-75"
            //   !player?.paused && "bg-white",
          )}
        >
          <MdPlayArrow size={25} className="fill-white" />
        </div>
      </div>

      <div className="z-10 flex-1 cursor-pointer">
        <img
          src={WaveSound}
          alt="wave-sound"
          className="aspect-auto h-12 dark:invert"
        />
      </div>
      <time className="z-10 p-2 text-sm font-bold text-black dark:text-white">
        0:12
      </time>
    </div>
  );
};
