import { useEffect, useState } from "react";
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

const MARGIN = 32 + 28;

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
  { key: 5, imgUrl: tmp_image3, name: "다은" },
  { key: 6, imgUrl: tmp_image3, name: "다은" },
];

function getWindowSize() {
  const width = window.innerWidth;
  return width;
}

type Props = {};

const CheckStatus = () => {
  return (
    <Wrapper>
      <BadgeWithDescription badgeType="finished" manager="예진" />
      <TitleTextWrapper>
        <Title>피드백 현황</Title>
        <FeedbackPeriodText>피드백 기간이 2일 남았어요</FeedbackPeriodText>
      </TitleTextWrapper>
      <ProfileListContainer>
        <ProfileListTextWrapper>
          <ProfileListTitle>확인 미완료</ProfileListTitle>
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
        <ProfileListTitle>확인 완료</ProfileListTitle>
        <ProfileListStatusNumber>2</ProfileListStatusNumber>
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
  color: ${({ theme }) => theme.colors.main[500]};
`;

const ProfileListContainer = styled.div`
  padding: 12px 14px;
  border-radius: 16px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.main[500]};
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
