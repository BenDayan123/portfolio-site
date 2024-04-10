import { Props } from ".";

export const Stair: React.FC<Props> = ({ color, className }) => {
  return (
    <div {...{ className }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="910"
        height="910"
        viewBox="0 0 910 910"
        data-shape="true"
      >
        <path
          fill="none"
          stroke={color}
          stroke-miterlimit="50"
          stroke-width="2"
          d="M165.648 352.811v0l15.343 16.136v0l15.343-16.136v0l15.341 16.136v0l15.343-16.136v0l15.343 16.136v0l15.343-16.136v0l15.344 16.136v0l15.345-16.136v0"
        ></path>
      </svg>
    </div>
  );
};
