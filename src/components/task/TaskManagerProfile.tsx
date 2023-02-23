import styled from "styled-components";
import { typo_body4_regular, typo_body2_medium } from "../../styles/Typo";

type Props = {
  name: string | undefined;
  imageSource: string | undefined;
};

const TaskManagerProfile = ({ name, imageSource }: Props) => {
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
  border-radius: 50%;
`;

const TextWrapper = styled.span`
  margin-left: 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const ProfilePositionText = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.gray[500]};
  margin-bottom: 4px;
`;

const ProfileName = styled.p`
  ${typo_body2_medium}
  color: ${({ theme }) => theme.black};
`;

export default TaskManagerProfile;
