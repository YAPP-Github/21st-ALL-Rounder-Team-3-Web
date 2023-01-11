import styled from "styled-components";
import { typo_body4_regular, typo_body2_medium } from "../../styles/Typo";

import tmp_image from "../../assets/images/tmp_profile_img1.png";

type Props = {
  name: string;
  imageSource: string;
};

const TaskManagerProfile = ({ name, imageSource }: Props) => {
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

const Wrapper = styled.div`
  display: flex;
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

const ProfilePositionText = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 4px;
`;

const ProfileName = styled.p`
  ${typo_body2_medium}
  color: ${({ theme }) => theme.colors.black};
`;

export default TaskManagerProfile;
