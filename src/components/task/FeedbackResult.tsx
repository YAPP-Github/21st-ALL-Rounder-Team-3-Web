import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { typo_h3_semibold } from "@src/styles/Typo";

type Props = {
  value: string;
  icon?: ReactNode;
  count: number;
};

const FeedbackResult = ({ value, icon, count }: Props) => {
  return (
    <BaseButton>
      <IconWrapper>{icon && icon}</IconWrapper>
      {value}
      <Count>{count}</Count>
    </BaseButton>
  );
};

const BaseButton = styled.div`
  background-color: ${({ theme }) => theme.gray[100]};
  color: ${({ theme }) => theme.gray[600]};
  border: 1px solid ${({ theme }) => theme.gray[300]};

  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  ${typo_h3_semibold};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.p`
  color: ${({ theme }) => theme.sub[500]};
  ${typo_h3_semibold}
  margin-left: 10px;
`;

export default FeedbackResult;
