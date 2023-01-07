import React from "react";
import styled from "styled-components";
import { typo_body4_regular, typo_body2_medium } from "../../styles/Typo";

const TaskDescription = ({ title, content }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 16px;
  flex-direction: column;
  display: flex;
`;

const Title = styled.div`
  ${typo_body4_regular};
  margin-bottom: 4px;
`;

const Content = styled.div`
  ${typo_body2_medium};
`;

type Props = {
  title: string;
  content?: string;
};

export default TaskDescription;
