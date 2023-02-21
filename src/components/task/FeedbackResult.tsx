import styled, { css } from "styled-components";
import { typo_h3_semibold } from "@src/styles/Typo";

type Props = {
  value: string;
  count?: number;
  src: string;
};

const FeedbackResult = ({ value, src, count }: Props) => {
  return (
    <BaseButton>
      <Img src={src}></Img>
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
  padding: 13px 0;
  width: 100%;
  ${typo_h3_semibold};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.p`
  color: ${({ theme }) => theme.sub[500]};
  ${typo_h3_semibold}
  margin-left: 10px;
`;

const Img = styled.img`
  height: 27px;
  width: 24px;
  margin-right: 5px;
`;

export default FeedbackResult;
