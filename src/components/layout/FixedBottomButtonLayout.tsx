import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const FixedBottomButtonLayout = ({ children }: Props) => {
  return <FixedWrapper>{children}</FixedWrapper>;
};

const FixedWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export default FixedBottomButtonLayout;
