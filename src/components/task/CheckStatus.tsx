import styled, { css } from "styled-components";
import BadgeWithDescription from "./BadgeWithDescription";
import {
  typo_cation1_semibold,
  typo_body4_regular,
  typo_h3_semibold,
  typo_body2_medium,
  typo_h4_semibold,
} from "../../styles/Typo";
import tmp_image1 from "../../assets/images/tmp_profile_img1.png";
import tmp_image2 from "../../assets/images/tmp_profile_img2.png";
import tmp_image3 from "../../assets/images/tmp_profile_img3.png";

type Profile = {
  key: number;
  imgUrl: string;
  name: string;
};

const checkedList: Profile[] = [
  { key: 1, imgUrl: tmp_image1, name: "가은" },
  { key: 2, imgUrl: tmp_image2, name: "나은" },
  { key: 3, imgUrl: tmp_image3, name: "다은" },
];

const uncheckedList: Profile[] = [
  { key: 1, imgUrl: tmp_image3, name: "희두" },
  { key: 2, imgUrl: tmp_image1, name: "나연" },
  { key: 3, imgUrl: tmp_image1, name: "가은" },
  { key: 4, imgUrl: tmp_image2, name: "나은" },
];

type Props = {
  feedbackLeftDays: number;
  taskStatus: string;
  feedbackStatus: "pending" | "finished";
  taskManager: string;
};

const CheckStatus = ({ feedbackLeftDays, taskStatus, feedbackStatus, taskManager }: Props) => {
  const badgeTitle = feedbackStatus === "pending" ? "피드백 요청" : "피드백 완료";
  const badgeContent =
    feedbackStatus === "pending"
      ? "완료된 내용을 확인하시고 피드백을 진행해주세요!"
      : `이미 ${taskManager}님의 업무를 피드백 완료했어요!`;
  return (
    <Wrapper>
      <BadgeWithDescription title={badgeTitle} content={badgeContent} />
      <TitleTextWrapper>
        <Title>피드백 현황</Title>
        <FeedbackPeriodText>
          {feedbackLeftDays === 0
            ? `피드백 마감날입니다! 얼른 진행해주세요~`
            : `피드백 기간이 ${feedbackLeftDays}일 남았어요`}
        </FeedbackPeriodText>
      </TitleTextWrapper>
      <ProfileListContainer>
        <ProfileListTextWrapper>
          <ProfileListTitle>피드백 미완료</ProfileListTitle>
          <ProfileListStatusNumber>{uncheckedList.length}</ProfileListStatusNumber>
        </ProfileListTextWrapper>
        <ProfileListWrapper>
          {uncheckedList.map(element => {
            return (
              <ProfileWrapper key={element.key}>
                <ProfileImg src={element.imgUrl} />
                <ProfileName>{element.name}</ProfileName>
              </ProfileWrapper>
            );
          })}
        </ProfileListWrapper>
      </ProfileListContainer>
      <ProfileListContainer>
        <ProfileListTextWrapper>
          <ProfileListTitle>피드백 완료</ProfileListTitle>
          <ProfileListStatusNumber>{checkedList.length}</ProfileListStatusNumber>
        </ProfileListTextWrapper>
        <ProfileListWrapper>
          {checkedList.map(element => {
            return (
              <ProfileWrapper key={element.key}>
                <ProfileImg src={element.imgUrl} />
                <ProfileName>{element.name}</ProfileName>
              </ProfileWrapper>
            );
          })}
        </ProfileListWrapper>
      </ProfileListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 24px;
  padding: 24px 16px;

  background-color: #fafafa;
`;

const TitleTextWrapper = styled.div`
  margin-top: 24px;
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
  padding: 12px 14px;
  border-radius: 16px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.white};
`;

const ProfileListWrapper = styled.span`
  display: flex;
`;

const ProfileListTextWrapper = styled.div`
  display: flex;
`;

const ProfileListTitle = styled.p`
  ${typo_body2_medium};
`;

const ProfileListStatusNumber = styled.div`
  ${typo_h4_semibold};
  color: ${({ theme }) => theme.primaryPurple[500]};
  padding-left: 4px;
`;

const ProfileWrapper = styled.div`
  margin-top: 10px;
  margin-right: 12px;
  width: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
`;

const ProfileName = styled.p`
  padding-top: 4px;
  ${typo_body4_regular};
`;

export default CheckStatus;
