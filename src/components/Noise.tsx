import { cn } from "../utils";

interface Props {
  className?: string;
}

const Noise: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 [mask-image:linear-gradient(black,_transparent)] pointer-events-none",
        `before:absolute before:inset-0 before:content-[""] before:bg-white/5`,
        `after:absolute after:inset-0 after:content-[""] after:opacity-20 after:[filter:url(#noiseFilter)]`,
        className
      )}
    ></div>
  );
};

export const NoiseFilter: React.FC = () => {
  return (
    <svg aria-hidden="true" className="hidden">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="6.29"
          numOctaves="6"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
    </svg>
  );
};

export default Noise;
