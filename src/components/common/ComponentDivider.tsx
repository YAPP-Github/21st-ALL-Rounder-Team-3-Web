import React from "react";
import styled from "styled-components";

const StyledComponentDivider = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  height: 8px;
  margin-bottom: 20px;
`;

export const ComponentDivider = () => {
  return <StyledComponentDivider />;
};
