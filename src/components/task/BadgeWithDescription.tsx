import styled, { css } from "styled-components";
import { typo_body4_regular, typo_cation1_semibold } from "@src/styles/Typo";

type Props = {
  title: string;
  content: string;
  background: string;
};

const BadgeWithDescription = ({ title, content, background }: Props) => {
  return (
    <Container background={background}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div<{ background: string }>`
  padding: 0 16px;
  height: 33px;
  border-radius: 8px;

  align-items: center;
  display: flex;
  justify-content: center;

  ${props => {
    if (props.background === "gray")
      return css`
        background-color: ${({ theme }) => theme.gray[100]};
      `;
    if (props.background === "green")
      return css`
        background-color: ${({ theme }) => theme.sub[100]};
      `;
  }};
`;

const Title = styled.div`
  ${typo_cation1_semibold};
  color: ${({ theme }) => theme.sub[500]};
  margin-right: 8px;
`;

const Content = styled.div`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.gray[600]};
`;

export default BadgeWithDescription;
