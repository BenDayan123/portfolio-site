import { Props } from ".";

export const Dots: React.FC<Props> = ({ color, className }) => {
  return (
    <div {...{ className }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="40"
        viewBox="0 0 110 40"
        data-shape="true"
      >
        <path
          fill="none"
          stroke={color}
          stroke-miterlimit="50"
          stroke-width="2"
          d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"
        ></path>
      </svg>
    </div>
  );
};
