import { cn } from "../../utils";
import Icon from "/favicon.ico";

const style =
  "absolute aspect-square rounded-full top-1/2 left-1/2 mt-3 [box-shadow:inset_0_0_30px_#ffffff7a,_inset_20px_0_80px_#2B208B]";

export const CircleWave = () => {
  return (
    <div className="w-full h-full absolute max-md:hidden">
      <div className={cn(style, "w-64 circle-wave")}></div>
      <div className={cn(style, "w-40 circle-wave")}></div>
      <div className={cn(style, "w-24 circle-wave")}></div>
      <img src={Icon} alt="" className="absolute-center mt-3 w-12" />
      <div className="absolute-center mt-3 w-14 rounded-full aspect-square blur-md bg-gradient-to-r from-fuchsia-500 to-cyan-500"></div>
    </div>
  );
};
