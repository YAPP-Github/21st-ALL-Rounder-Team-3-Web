import styled, { css } from "styled-components";

type Props = {
  height?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  dividerType?: "componentDivider" | "textDivider";
};

const Divider = ({ height, marginHorizontal, marginTop, marginBottom, dividerType }: Props) => {
  return (
    <StyledTextDivider
      height={height}
      marginHorizontal={marginHorizontal}
      marginBottom={marginBottom}
      marginTop={marginTop}
      dividerType={dividerType}
    />
  );
};

const ComponentDivider = css`
  height: 8px;
`;
const TextDivider = css`
  height: 1px;
  margin: 10px 16px;
`;

const StyledTextDivider = styled.div`
  background-color: #f4f4f4;
  height: ${(props: Props) => `${props.height}px` || "1px"};
  margin-left: ${(props: Props) => `${props.marginHorizontal}px` || "0px"};
  margin-right: ${(props: Props) => `${props.marginHorizontal}px` || "0px"};
  margin-top: ${(props: Props) => `${props.marginTop}px` || "0px"};
  margin-bottom: ${(props: Props) => `${props.marginBottom}px` || "0px"};

  ${props => {
    if (props.dividerType == "componentDivider") return ComponentDivider;
    if (props.dividerType == "textDivider") return TextDivider;
  }}
`;

export default Divider;
