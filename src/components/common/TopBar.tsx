import Icons from "@src/assets/icons";
import { typo_h3_semibold } from "@src/styles/Typo";
import styled from "styled-components";

export type TopBarProps = {
  title: string;
  onBack: () => void;
  withEdit?: boolean;
  withDelete?: boolean;
};

const TopBar = ({ title, onBack, withEdit, withDelete }: TopBarProps) => {
  return (
    <Wrapper>
      <BackButtonWrapper onClick={onBack}>
        <Icons.IconArrowBack />
      </BackButtonWrapper>
      <Title>{title}</Title>
      <IconWrapper>
        {withEdit && <Icons.IconEdit />}
        {withDelete && <Icons.IconDelete />}
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const BackButtonWrapper = styled.div`
  cursor: pointer;
`;

const Title = styled.p`
  ${typo_h3_semibold};
  color: ${({ theme }) => theme.colors.black};
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 8px;

  & > svg {
    cursor: pointer;
  }
`;

export default TopBar;
