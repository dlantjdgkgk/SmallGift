interface IProps {
  fill?: string;
}

const BackSVG = ({ fill = "#60C" }: IProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
    <g clipPath="url(#a)">
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23.65 15.88H8.63m6 6.17L7.75 15.9l6.88-6.15"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h17.4v13.8H0z" transform="translate(7 9)" />
      </clipPath>
    </defs>
  </svg>
);

export default BackSVG;
