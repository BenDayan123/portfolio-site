import { cn } from "../../utils";
import "./style.scss";

interface Props {
  className?: string;
  circle?: boolean;
  image: string;
}

const frames = Array.from({ length: 3 });

export const SquareFrame: React.FC<Props> = ({ className, circle, image }) => {
  return (
    <div className={cn("relative w-32 z-[9999]", className)}>
      <div className="w-full aspect-square -z-[1] relative flex-center hidden">
        {frames.map((_, i) => (
          <div
            key={`framer#${i}`}
            className={cn("square-frames-item hidden", circle && "circle")}
          >
            <div className="w-[150%] h-[150%] absolute -top-1/4 -left-1/4 opacity-30"></div>
          </div>
        ))}
      </div>
      <img
        src={image}
        alt=""
        className="w-[82%] absolute h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};
