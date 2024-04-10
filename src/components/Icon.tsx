import { cn } from "../utils";

interface Props {
  src: string;
  text?: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ src, text, className }) => {
  return (
    <div className="relative flex aspect-square w-10 h-10 rounded-lg justify-center select-none items-center flex-col gap-2 text-copy-light font-semibold dark:text-copy-light-dark">
      <img
        src={src}
        alt={text}
        className={cn("drag-none w-14 aspect-square", className)}
      />
      {/* {text && <p>{text}</p>} */}
    </div>
  );
};
