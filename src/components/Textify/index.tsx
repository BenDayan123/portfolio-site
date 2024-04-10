import { Message } from "./Message";
import { cn } from "../../utils";
import MessageImage from "/message.png";
import { VoicePlayer } from "./VoicePlayer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Input } from "./input";
import Noise from "../Noise";
import "./style.scss";

export const Textify: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="rounded-md h-full">
      <div className="p-4 border-[3px] max-w-[750px] w-full h-auto rounded-2xl border-white/10 mx-auto [mask-image:linear-gradient(black_70%,_transparent)]">
        <div
          ref={ref}
          className="relative size-full border border-white/10 rounded-md bg-textify-background-light/30 p-4 dark:bg-textify-background-dark/40 space-y-1 overflow-hidden"
        >
          <Noise />
          <div className="pb-2 space-y-1">
            <Message
              // className={cn(isInView && "-translate-x-1/2 scale-125 opacity-100")}
              className={cn(isInView && "opacity-100")}
              text="Hey there! What's up? 👋"
            />
            <Message
              mine
              isConnected
              className={cn(isInView && "opacity-100")}
              text="Wanna go watch a Movie? 🍿"
            />
            <Message
              showBG={false}
              className={cn(isInView && "opacity-100")}
              text=""
              image={MessageImage}
            />
            <Message
              text="Wanna go watch this one?"
              className={cn(isInView && "opacity-100")}
            />
            <Message className="translate-x-1/4" text="I'm in" />
            <Message
              mine
              isConnected
              className={cn(isInView && "opacity-100")}
              text=""
              showBG={false}
            >
              <VoicePlayer />
            </Message>
            <Message
              mine
              isConnected
              className={cn(isInView && "opacity-100")}
              text="So see you there at 10:00pm"
            />
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
};
