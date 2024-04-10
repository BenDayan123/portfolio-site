import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import "./style.scss";

interface Props {
  className?: string;
  lineBorder?: boolean;
  onClick?: () => any;
  style?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
  style,
  lineBorder = true,
}) => {
  return (
    <div
      className={cn(
        "group/card card h-full rounded-lg bg-[linear-gradient(90deg,_rgba(186,_179,_255,_0)_0%,_rgba(186,_179,_255,_.6)_17.02%,_rgba(186,_179,_255,_0)_34.04%),_linear-gradient(180deg,_rgba(169,_163,_194,_.2)_0%,_rgba(169,_163,_194,_.048)_100%)]",
        !lineBorder && "bg-none bg-white/10",
        className
      )}
      onClick={() => onClick && onClick()}
    >
      <div
        className={cn(
          "card-content dark:bg-background-dark bg-background-dark overflow-hidden rounded-[inherit] [background:radial-gradient(47.16%_90.82%_at_50%_0%,_rgba(133,_102,_255,_.08)_0%,_rgba(133,_102,_255,_0)_100%),_radial-gradient(67.49%_100%_at_50%_0%,_rgba(255,_255,_255,_.04)_0%,_rgba(255,_255,_255,_0)_100%),_#0a0118]",
          style
        )}
      >
        {children}
      </div>
    </div>
  );
};
