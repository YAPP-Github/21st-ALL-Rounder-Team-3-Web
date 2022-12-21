import React from "react";
import styled from "styled-components";
import * as typo from "../../styles/Typo";

const tmp_image = require("../../assets/images/tmp_profile_img1.png");

const Wrapper = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: row;
`;

const ProfileImg = styled.img`
  height: 48px;
  width: 48px;
`;

const TextWrapper = styled.span`
  margin-left: 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const ProfilePositionText = styled.text`
  ${typo.typo_body4}
  margin-bottom: 4px;
`;

const ProfileName = styled.text`
  ${typo.typo_body2}
`;

type Props = {
  name: string;
  imageSource: string;
};

export const TaskManagerProfile = ({ name, imageSource }: Props) => {
  imageSource = tmp_image;
  return (
    <Wrapper>
      <ProfileImg src={imageSource} />
      <TextWrapper>
        <ProfilePositionText>업무 담당자</ProfilePositionText>
        <ProfileName>{name}</ProfileName>
      </TextWrapper>
    </Wrapper>
  );
};
