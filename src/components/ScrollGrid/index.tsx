import React from "react";
import { Grid } from "../Grid";
import { PropsWithChildren, useEffect, useState } from "react";
export { TimerCard } from "./Card";

interface Props {}

export const ScrollGrid: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const cards = React.Children.count(children);
  const current = active % cards;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p < 100) return p + 1;
        setActive((a) => a + 1);
        return 0;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-ml-[133px] px-[133px] w-[120%] py-0 [mask-image:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0,_#fff_8.66%,_#fff_91.34%,_rgba(255,_255,_255,_0)_100%)]">
      <div
        style={{
          transform: `translate(${
            (cards - current > 2 ? current : cards - 3) * -400
          }px)`,
        }}
        className="[transition:.35s_cubic-bezier(.6,.6,0,1)_transform]"
      >
        <Grid className="w-max flex min-h-64 h-64 gap-3 overflow-x-auto">
          {React.Children.map(children, (child, i) => {
            if (React.isValidElement(child))
              return React.cloneElement(child as React.ReactElement, {
                progress,
                active: i === current,
                onClick: () => {
                  if (active !== i) {
                    void setActive(i);
                    void setProgress(0);
                  }
                },
              });
            return child;
          })}
        </Grid>
      </div>
    </div>
  );
};
