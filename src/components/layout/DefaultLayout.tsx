import { ReactNode } from "react";
import styled from "styled-components";
import TopBar, { TobBarProps } from "../common/TobBar";

type Props = TobBarProps & {
  children: ReactNode;
};

const DefaultLayout = ({ title, onBack, withWrite, withDelete, children }: Props) => {
  return (
    <Container>
      <Wrapper>
        <TopBar title={title} onBack={onBack} withWrite={withWrite} withDelete={withDelete} />
        {children}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 98px;
`;

export default DefaultLayout;
