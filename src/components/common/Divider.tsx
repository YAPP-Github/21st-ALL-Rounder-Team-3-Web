import styled, { css } from "styled-components";

type Props = {
  height?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Divider = ({ height, marginTop, marginBottom }: Props) => {
  return <BaseDivider height={height} marginBottom={marginBottom} marginTop={marginTop} />;
};

const BaseDivider = styled.div<{ height?: number; marginTop?: number; marginBottom?: number }>`
  background-color: ${({ theme }) => theme.gray[200]};
  height: ${props => (props.height ? `${props.height}px` : "1px")};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : "0px")};
  margin-bottom: ${props => (props.marginBottom ? `${props.marginBottom}px` : "0px")};
`;

export default Divider;
