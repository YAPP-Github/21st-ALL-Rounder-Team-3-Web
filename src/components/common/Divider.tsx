import React from "react";
import styled from "styled-components";

const StyledTextDivider = styled.div`
  margin: 10px 0;
  background-color: #f4f4f4;
  height: ${(props: Props) => `${props.height}px` || "1px"};
  margin-left: ${(props: Props) => `${props.marginHorizontal}px` || "0px"};
  margin-right: ${(props: Props) => `${props.marginHorizontal}px` || "0px"};
`;

type Props = {
  height: number;
  marginHorizontal?: number;
};

export const Divider = ({ height, marginHorizontal }: Props) => {
  return <StyledTextDivider height={height} marginHorizontal={marginHorizontal} />;
};
