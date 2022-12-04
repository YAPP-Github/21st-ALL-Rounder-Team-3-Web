type Props = {
  height?: string;
  width?: string;
  color?: string;
};

const AlertCircleIcon = ({ height = "24", width = "24", color = "#8075F9" }: Props) => {
  return (
    <svg width={height} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0004 11.9999V7.1999M12.0004 15.5577V15.5999M21.6004 11.9999C21.6004 17.3018 17.3023 21.5999 12.0004 21.5999C6.69846 21.5999 2.40039 17.3018 2.40039 11.9999C2.40039 6.69797 6.69846 2.3999 12.0004 2.3999C17.3023 2.3999 21.6004 6.69797 21.6004 11.9999Z"
        stroke="#8075F9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AlertCircleIcon;
