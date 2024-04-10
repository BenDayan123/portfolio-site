import { IconType } from "react-icons";
import { cn } from "../utils";

interface Props {
  text: string;
  icon?: IconType | string | any;
  className?: string;
}

export const Badge: React.FC<Props> = ({ text, icon: Icon, className }) => {
  return (
    <div
      className={cn(
        "badge isolate relative flex gap-2 mx-auto my-3 px-4 py-2 w-max items-center backdrop-blur rounded-[32px] [box-shadow:inset_0_-7px_11px_#a48fff1f]",
        // `after:inset-0 after:bg-[linear-gradient(90deg,_rgba(229,_156,_255,_.24)_.01%,_rgba(186,_156,_255,_.24)_50.01%,_rgba(156,_178,_255,_.24)_100%)] after:[border-radius:inherit] after:content-[""] after:[mask:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] after:[mask-composite:exclude] after:[-webkit-mask-composite:xor] after:p-px after:pointer-events-none after:absolute after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)]`,
        className
      )}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} className="aspect-square max-w-6" />
      ) : (
        Icon && <Icon size={20} fill="white" />
      )}
      <div className="bg-clip-text font-semibold [-webkit-text-fill-color:transparent] [-webkit-background-clip:text] [background-blend-mode:normal,_screen] bg-[linear-gradient(0deg,_rgba(255,_255,_255,_.4),_rgba(255,_255,_255,_.4)),_linear-gradient(90.01deg,_#e59cff_.01%,_#ba9cff_50.01%,_#9cb2ff_100%)]">
        {text}
      </div>
    </div>
  );
};
