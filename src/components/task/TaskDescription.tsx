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

const Wrapper = styled.div``;

const Title = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 4px;
`;

const Content = styled.div`
  ${typo_body2_medium};
  color: ${({ theme }) => theme.colors.black};
`;

type Props = {
  title: string;
  content?: string;
};

export default TaskDescription;
