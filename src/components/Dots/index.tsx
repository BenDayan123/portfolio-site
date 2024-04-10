import DotsImage from "/dots.png";
import "./style.scss";
import { cn } from "../../utils";

interface Props {
  className?: string;
}

export const Dots: React.FC<Props> = ({ className }) => {
  return (
    <div
      style={{
        maskImage: `url(${DotsImage})`,
        maskSize: "cover",
        backgroundImage: `url(${DotsImage})`,
      }}
      className={cn(
        "communicate-dots w-[1136px] h-[242px] relative overflow-hidden bg-cover",
        className
      )}
    >
      <div></div>
    </div>
  );
};
