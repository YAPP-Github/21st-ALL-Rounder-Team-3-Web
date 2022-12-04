type Props = {
  height?: string;
  width?: string;
  color?: string;
};

const CheckContainedIcon = ({ height = "24", width = "24", color = "#8075F9" }: Props) => {
  return (
    <svg width={height} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.3519 9.84843L10.8004 14.3999L9.24892 12.8484M12.0004 2.3999C6.69846 2.3999 2.40039 6.69797 2.40039 11.9999C2.40039 17.3018 6.69846 21.5999 12.0004 21.5999C17.3023 21.5999 21.6004 17.3018 21.6004 11.9999C21.6004 6.69797 17.3023 2.3999 12.0004 2.3999Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckContainedIcon;
