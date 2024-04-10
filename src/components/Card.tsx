import { useId } from "react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./Badge";
import Noise from "./Noise";
import { cn } from "../utils";

interface Props {
  image: string;
  logo: string;
  projectName: string;
  title: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  href?: string;
  github: string;
  className?: string;
  bg?: string;
}

export const Card: React.FC<Props> = ({
  description,
  projectName,
  href,
  title,
  primaryColor,
  secondaryColor,
  logo,
  image,
  bg,
  github,
  className,
}) => {
  const id = useId();

  return (
    <article
      className={cn(
        "flex flex-col group dark:border-[.5px] dark:border-white/0 relative overflow-hidden mx-auto rounded-lg max-w-lg max-lg:max-wfull w-fit p-2 text-copy-light dark:text-copy-dark dark:bg-background-dark bg-foreground-light dark:shadow-none shadow-[0px_18px_36px_-18px_rgba(0,0,0,0.1),0px_30px_45px_-30px_rgba(50,50,93,0.25)]",
        className
      )}
      style={{ background: bg }}
    >
      <div className="overflow-hidden h-full w-full rounded-[1.4rem] relative min-h-20 aspect-video bg-gradient-to-b from-foreground-light dark:from-foreground-dark to-background-light dark:to-background-dark">
        <Noise />
        <div className="absolute top-0 left-0 w-full aspect-[1.5] opacity-0 group-hover:opacity-60 transition-[cubic-bezier(0.33_1_0.68_1)] duration-300">
          <svg
            width="800"
            height="600"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <ellipse
              className="card__ellipse"
              opacity="0.5"
              cx="305.095"
              cy="294.189"
              rx="292.729"
              ry="272.493"
              transform="rotate(-41.7514 305.095 294.189)"
              fill={`url(#product-card-paint-one-${id})`}
            ></ellipse>
            <ellipse
              className="card__ellipse"
              opacity="0.6"
              cx="314.947"
              cy="283.229"
              rx="314.947"
              ry="283.229"
              transform="matrix(0.8571 -0.51515 -0.51515 -0.8571 373.81 726)"
              fill={`url(#product-card-paint-two-${id})`}
            ></ellipse>
            <defs>
              <radialGradient
                id={`product-card-paint-one-${id}`}
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(319.628 260.311) rotate(88.8263) scale(253.398 377.821)"
              >
                <stop offset="0.25" stopColor={primaryColor}></stop>
                <stop
                  offset="0.744792"
                  stopColor={primaryColor}
                  stopOpacity="0"
                ></stop>
              </radialGradient>
              <radialGradient
                id={`product-card-paint-two-${id}`}
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(330.582 248.016) rotate(89.4327) scale(234.804 286.235)"
              >
                <stop stopColor={secondaryColor}></stop>
                <stop
                  offset="1"
                  stopColor={secondaryColor}
                  stopOpacity="0"
                ></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <img
          src={image}
          className="absolute left-1/3 top-1/3 rounded-[inherit] group-hover:-translate-y-4 transition-[cubic-bezier(0.33_1_0.68_1)] duration-300"
        />
      </div>
      <div className="transition-[cubic-bezier(0.33_1_0.68_1)] w-[105%] duration-300 bg-inherit space-y-2 p-4 pr-8 will-change-transform group-hover:-translate-y-[42px]">
        <Badge text={projectName} className="mx-0" icon={logo} />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg opacity-75">{description}</p>
      </div>
      <div className="flex z-50 items-center justify-between absolute bottom-0 right-6 left-6 opacity-0 group-hover:-translate-y-7 group-hover:opacity-100 will-change-[transform_opacity] transition-[cubic-bezier(0.33_1_0.68_1)] duration-300">
        <a
          href={href}
          target="_blank"
          className="text-primary w-fit hover:text-copy-light dark:hover:text-copy-dark cursor-pointer"
        >{`Explore More >`}</a>
        <a
          href={github}
          target="_blank"
          className="hover:scale-125 transition-transform cursor-pointer"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </article>
  );
};
