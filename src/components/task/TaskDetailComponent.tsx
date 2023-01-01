import React from "react";
import styled from "styled-components";
import * as typo from "../../styles/Typo";

const Wrapper = styled.div`
  margin-left: 16px;
  flex-direction: column;
  display: flex;
`;

const Title = styled.text`
  ${typo.typo_body4};
  margin-bottom: 4px;
`;

const Content = styled.text`
  ${typo.typo_body2};
`;

type Props = {
  title: string;
  content?: string;
};

export const TaskDetailComponent = ({ title, content }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};
