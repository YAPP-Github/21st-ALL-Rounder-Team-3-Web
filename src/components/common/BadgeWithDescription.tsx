import React from "react";
import styled from "styled-components";
import * as typo from "../../styles/Typo";

const Container = styled.div`
  background-color: #f1faf7;
  height: 33px;
  border-radius: 16px;
  margin: 40px 16px 20px 16px;
  align-items: center;
  display: flex;
  padding: 0 16px;
`;

const Title = styled.text`
  ${typo.typo_cation1_semibold};
  color: #1ac694;
  margin-right: 8px;
`;

const Content = styled.text`
  ${typo.typo_body4};
  color: #555555;
`;

type Props = {
  title: string;
  content: string;
};

export const BadgeWithDescription = ({ title, content }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};
