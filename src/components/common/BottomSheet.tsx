import Icons from "@src/assets/icons";
import { typo_h2_semibold } from "@src/styles/Typo";
import { ReactNode } from "react";
import styled from "styled-components";

export interface BottomSheetProps {
  title: string;
  description?: string;
  content?: ReactNode;
  onClose: () => void;
}

const BottomSheet = ({ title, description, content, onClose }: BottomSheetProps) => {
  return (
    <Wrapper>
      <Dimmed onClick={onClose} />
      <ContentWrapper>
        <Header>
          <Icons.IconClose onClick={onClose} />
        </Header>
        <Title>{title}</Title>
        {content && content}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 4px;
`;

const Title = styled.h2`
  ${typo_h2_semibold};
  color: ${({ theme }) => theme.gray[700]};
`;

export default BottomSheet;
