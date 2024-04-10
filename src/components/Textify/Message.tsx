import { PropsWithChildren } from "react";
import { cn } from "../../utils";

interface Props {
  mine?: boolean;
  showBG?: boolean;
  isConnected?: boolean;
  className?: string;
  text: string;
  image?: string;
}

export const Message: React.FC<PropsWithChildren<Props>> = ({
  isConnected,
  mine,
  className,
  text,
  image,
  children,
  showBG = true,
}) => {
  return (
    <div
      // initial={{ opacity: 0, translateX: 0, scale: 0 }}
      // whileInView={{ opacity: 1, translateX: x, translateY: y, scale: z }}
      // transition={{ duration: 1 }}
      className={cn(
        "relative h-auto w-fit break-words rounded-md font-light px-4 py-2 shadow-xl duration-[2s] transition-[transform_opacity] opacity-0",
        mine && "bg-message-out-bg-light text-message-out-text-light ml-auto",
        !mine &&
          "bg-message-in-bg-light text-message-in-text-light dark:bg-message-in-bg-dark dark:text-message-in-text-dark",
        !showBG && "bg-transparent dark:bg-transparent shadow-none",
        !isConnected && !mine && "rounded-tl-none",
        !isConnected && mine && "rounded-tr-none",
        className
      )}
    >
      {children}
      {image && (
        <img src={image} alt="banner" className="rounded-xl shadow-2xl w-24" />
      )}
      {text}
    </div>
  );
};
