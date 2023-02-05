import styled from "styled-components";
import { typo_body4_regular, typo_cation1_semibold } from "@src/styles/Typo";

type Props = {
  title: string;
  content: string;
};

const BadgeWithDescription = ({ title, content }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 16px;
  background-color: #f1faf7;
  height: 33px;
  border-radius: 8px;

  align-items: center;
  display: flex;
  justify-content: center;
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
