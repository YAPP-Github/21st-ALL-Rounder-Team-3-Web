import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Container>
      <BaseWrapper>{children}</BaseWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BaseWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 98px;
`;

export default DefaultLayout;
