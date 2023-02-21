import styled from "styled-components";

type Props = {
  top?: number;
  bottom?: number;
};

const Margin = ({ top, bottom }: Props) => {
  return <BaseMargin top={top} bottom={bottom} />;
};

const BaseMargin = styled.div<{ top?: number; bottom?: number }>`
  margin-top: ${props => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

export default Margin;
