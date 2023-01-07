import { ChangeEvent } from "react";
import styled from "styled-components";

import { typo_body1_medium } from "@src/styles/Typo";

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const Textㅁrea = ({ value, placeholder, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextㅁreaWrapper>
      <WriteArea value={value} placeholder={placeholder} onChange={e => handleChange(e)} />
    </TextㅁreaWrapper>
  );
};

const TextㅁreaWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
`;

const WriteArea = styled.textarea`
  ${typo_body1_medium};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 108px;
  padding: 10px 12px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export default Textㅁrea;
