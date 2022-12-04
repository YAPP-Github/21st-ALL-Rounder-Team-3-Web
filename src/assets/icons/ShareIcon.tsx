type Props = {
  height?: string;
  width?: string;
  color?: string;
};

const ShareIcon = ({ height = "24", width = "24", color = "#8075F9" }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 12.6831V15.7714C3 16.2394 3.18437 16.6882 3.51256 17.0192C3.84075 17.3501 4.28587 17.5361 4.75 17.5361H15.25C15.7141 17.5361 16.1592 17.3501 16.4874 17.0192C16.8156 16.6882 17 16.2394 17 15.7714V12.6831M10.0361 12.4638L10.0361 2.46379M10.0361 2.46379L6.03613 6.28475M10.0361 2.46379L14.0361 6.28475"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
