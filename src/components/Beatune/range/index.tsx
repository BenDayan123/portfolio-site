import { useRef } from "react";
import { cn } from "../../../utils";
import "./style.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  data_right?: string;
  data_left?: string;
  menu?: string;
}

export const InputRange: React.FC<Props> = ({
  data_left,
  data_right,
  menu,
  ...input
}) => {
  const { value, className, ...rest } = input;
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="range-container relative">
      <input
        type="range"
        ref={ref}
        style={{
          background: `linear-gradient(to right, #fff ${value || 0}%, #5e5e5e ${
            value || 0
          }%)`,
        }}
        className={cn("range-bar", className)}
        data-left={data_left}
        data-right={data_right}
        {...rest}
        defaultValue={value}
        alt=""
      />
    </div>
  );
};
