import styled, { css } from "styled-components";
import BadgeWithDescription from "./BadgeWithDescription";
import { typo_body4_regular, typo_h3_semibold, typo_h1_bold } from "../../styles/Typo";
import { TaskDetail } from "@src/core/queries/useTaskDetailQuery";
import Margin from "../common/Margin";

type Props = {
  isMyTask: boolean;
  feedbackLeftDays: number;
  data: TaskDetail;
};

const CheckStatus = ({ feedbackLeftDays, data, isMyTask }: Props) => {
  const badgeTitle = data.feedbackStatus === "PENDING" ? "피드백 요청" : "피드백 완료";
  const badgeContent =
    data.feedbackStatus === "PENDING"
      ? "완료된 내용을 확인하시고 피드백을 진행해주세요!"
      : `이미 ${data.representative.name}님의 업무를 피드백 완료했어요!`;
  return (
    <Wrapper>
      {!isMyTask && (
        <>
          <BadgeWithDescription title={badgeTitle} content={badgeContent} background={"green"} />
          <Margin bottom={24} />
        </>
      )}

      <TitleTextWrapper>
        <Title>피드백 현황</Title>
        <FeedbackPeriodText>
          {feedbackLeftDays === 0
            ? `피드백 마감날입니다! 얼른 진행해주세요~`
            : `피드백 기간이 ${Math.abs(feedbackLeftDays)}일 남았어요`}
        </FeedbackPeriodText>
      </TitleTextWrapper>
      <ProfileListContainer>
        <ProfileListTextWrapper>
          <ProfileListTitle>미완료한 팀원</ProfileListTitle>
          <ProfileListStatusNumber>{data.feedbackRequiredPersonnel - data.confirmCount}</ProfileListStatusNumber>
        </ProfileListTextWrapper>
        <ProfileListTextWrapper>
          <ProfileListTitle>완료한 팀원</ProfileListTitle>
          <ProfileListStatusNumber>{data.confirmCount}</ProfileListStatusNumber>
        </ProfileListTextWrapper>
      </ProfileListContainer>
      <Margin bottom={150} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 50px;
  padding: 24px 16px;

  background-color: ${({ theme }) => theme.gray[100]};
`;

const TitleTextWrapper = styled.div`
  /* margin-top: 24px; */
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  ${typo_h3_semibold};
`;

const FeedbackPeriodText = styled.div`
  ${typo_body4_regular};
  margin-left: 10px;
  color: ${({ theme }) => theme.primaryPurple[500]};
`;

const ProfileListContainer = styled.div`
  margin-bottom: 10px;
  gap: 12px;
  width: 100%;
  display: flex;
  gap: 12px;

  background-color: ${({ theme }) => theme.gray[100]};
`;

const ProfileListTextWrapper = styled.div`
  display: flex;
  border-radius: 16px;
  padding: 12px 14px;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
`;

const ProfileListTitle = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.gray[500]};
`;

const ProfileListStatusNumber = styled.div`
  ${typo_h1_bold};
  color: ${({ theme }) => theme.black};
  padding-left: 4px;
  padding-top: 8px;
`;

export default CheckStatus;
