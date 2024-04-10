import { PropsWithChildren, Children } from "react";
import { cn } from "../../utils";
import Noise from "../Noise";

interface Props {
  className?: string;
  size: number;
  reverse?: boolean;
}

export const CirclusPath: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  reverse,
  size,
}) => {
  const numCircles = Children.toArray(children);
  const radius = (size * numCircles.length) / (2 * Math.PI);

  return (
    <div
      style={{
        width: size * 2,
        height: size * 2,
        animationDirection: reverse ? "reverse" : "normal",
      }}
      className="build-crafted-box-brands absolute top-1/2 left-1/2 aspect-square"
    >
      {numCircles.map((circle, i) => {
        const angle = (2 * Math.PI * i) / numCircles.length;
        return (
          <div
            key={`circle#${angle}`}
            style={{
              width: size / 2,
              height: size / 2,
              left: radius * Math.cos(angle) + size / 2,
              top: radius * Math.sin(angle) + size / 2,
            }}
            //w-12
            className={cn(
              "brand-item flex items-center justify-center rounded-full absolute bg-background-light dark:bg-background-dark border-[2px] border-gray-400/40 dark:border-foreground-dark/40 aspect-square overflow-hidden",
              className
            )}
          >
            <Noise />
            {circle}
          </div>
        );
      })}
    </div>
  );
};
