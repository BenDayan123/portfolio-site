import { PropsWithChildren, useRef } from "react";
export { Card } from "./card";
import { cn } from "../../utils";
import "./style.scss";

interface Props {
  className?: string;
}

export const Grid: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const grid = useRef<HTMLDivElement>(null);

  function handleHover(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!grid.current) return;
    const cards = grid.current.getElementsByClassName("card");
    // const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      const rect = (card as HTMLDivElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
    }
  }
  return (
    <div
      ref={grid}
      className={cn("cards-grid gap-5 relative grid grid-cols-2", className)}
      onMouseMove={handleHover}
    >
      {children}
    </div>
  );
};
