import Icons from "@src/assets/icons";
import { typo_h3_semibold } from "@src/styles/Typo";
import styled from "styled-components";

export type TopBarProps = {
  title: string;
  onBack: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  withEditIcon?: boolean;
  withDeleteIcon?: boolean;
};

const TopBar = ({ title, onBack, onEdit, onDelete, withEditIcon, withDeleteIcon }: TopBarProps) => {
  return (
    <Wrapper>
      <BackButtonWrapper onClick={onBack}>
        <Icons.IconArrowBack />
      </BackButtonWrapper>
      <Title>{title}</Title>
      <IconWrapper>
        {withEditIcon && <Icons.IconEdit onClick={onEdit} />}
        {withDeleteIcon && <Icons.IconDelete onclick={onDelete} />}
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 10px;
  background-color: ${({ theme }) => theme.white};
`;

const BackButtonWrapper = styled.div`
  cursor: pointer;
`;

const Title = styled.p`
  ${typo_h3_semibold};
  color: ${({ theme }) => theme.black};
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 8px;

  & > svg {
    cursor: pointer;
  }
`;

export default TopBar;
