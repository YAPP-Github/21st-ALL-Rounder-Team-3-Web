import styled from "styled-components";
import { typo_body4_regular, typo_cation1_semibold } from "@src/styles/Typo";

type Props = {
  feedbackStatus: "pending" | "finished";
  manager?: string;
};

const getTextByType = (feedbackStatus: string, manager?: string) => {
  let title = feedbackStatus === "pending" ? "확인 요청" : "확인 완료";
  let description =
    feedbackStatus === "pending"
      ? "완료된 내용을 확인하시고 피드백을 진행해주세요!"
      : `이미 ${manager}님의 업무를 피드백 완료했어요!`;

  return { title, description };
};

const BadgeWithDescription = ({ feedbackStatus, manager }: Props) => {
  const { title, description } = getTextByType(feedbackStatus, manager);

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{description}</Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 16px;
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
