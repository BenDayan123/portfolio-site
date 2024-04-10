import { IconType } from "react-icons";
import { Card } from "../Grid";
import GridImage from "/spreadsheet-grid.png";
import { cn } from "../../utils";
import EmptyIcon from "/empty-icon.svg";
import { Badge } from "../Badge";
import { IoIosConstruct } from "react-icons/io";

interface Props {
  icon: IconType;
  title: string;
  description: string;
  progress?: number;
  active?: boolean;
  badge?: boolean;
  onClick?: () => any;
}

const lines = [90, 100, 70];

export const TimerCard: React.FC<Props> = ({
  icon: Icon,
  title,
  description,
  active,
  onClick,
  badge,
  progress = 0,
}) => {
  return (
    <Card
      lineBorder={false}
      className="h-full flex-1 relative cursor-pointer w-96"
      style="dark:bg-[#050D1D]"
      onClick={() => onClick && onClick()}
    >
      {badge && (
        <Badge
          icon={IoIosConstruct}
          text="Upcoming Feature!"
          className={cn(
            "absolute top-0 right-4 text-sm font-semibold rounded-md transition-opacity opacity-0",
            active && "opacity-100"
          )}
        />
      )}
      <img
        src={GridImage}
        alt="grid"
        className={cn(
          "absolute opacity-0 transition-opacity top-2 right-2 w-[80%] aspect-auto drag-none pointer-events-none group-hover/card:opacity-100",
          active && "opacity-100"
        )}
      />

      <div className="p-7 space-y-2">
        <div className="w-14 aspect-square">
          {active && (
            <div className="rounded-full h-full grid w-full place-items-center bg-[radial-gradient(75.99%_80.36%_at_100%_0%,_rgba(133,_102,_255,_.32)_0%,_rgba(133,_102,_255,_0)_100%),_linear-gradient(46.74deg,_rgba(186,_179,_255,_0)_25.96%,_rgba(186,_179,_255,_.32)_89.02%)]">
              <Icon size={25} color="white" />
            </div>
          )}
          {!active && (
            <img
              src={EmptyIcon}
              alt="empty-icon"
              className="w-full h-full aspect-auto"
            />
          )}
        </div>
        <h1 className="text-copy-dark text-xl font-semibold">{title}</h1>
        <div className="min-h-20">
          {active && <p className="text-copy-dark/70">{description}</p>}
          {!active &&
            lines.map((line, i) => (
              <div
                key={`line#${i + line}`}
                style={{ width: `${line}%` }}
                className="h-4 bg-white/10 rounded mt-2"
              ></div>
            ))}
        </div>

        <div className="w-full bg-white/10 h-[2px] overflow-hidden">
          <div
            className="bg-white h-full transition-all [transition-timing-function:ease]"
            style={{ width: active ? `${progress}%` : 0 }}
          ></div>
        </div>
      </div>
    </Card>
  );
};
