import styled from "styled-components";
import { typo_body4_regular, typo_cation1_semibold } from "@src/styles/Typo";

type Props = {
  badgeType: "request" | "finished";
  manager?: string;
};

const BadgeWithDescription = ({ badgeType, manager }: Props) => {
  let titleText = "",
    contentText = "";
  if (badgeType == "request") {
    titleText = "확인 요청";
    contentText = "완료된 내용을 확인하시고 확인을 진행해주세요!";
  } else if ((badgeType = "finished")) {
    titleText = "확인 완료";
    contentText = `이미 ${manager}님의 업무를 확인했어요`!;
  }
  return (
    <Container>
      <Title>{titleText}</Title>
      <Content>{contentText}</Content>
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

const Title = styled.text`
  ${typo_cation1_semibold};
  color: ${({ theme }) => theme.colors.sub[500]};
  margin-right: 8px;
`;

const Content = styled.text`
  ${typo_body4_regular};
  color: #555555;
`;

export default BadgeWithDescription;
