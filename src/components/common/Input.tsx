import Icons from "@src/assets/icons";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input = ({ value, placeholder, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <InputWrapper>
      <BaseInput value={value} placeholder={placeholder} onChange={handleChange} />
      <IconWrapper>{value && <Icons.IconClose onClick={handleClear} />}</IconWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px 10px 8px;
  background-color: #fafafa;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
`;

const BaseInput = styled.input`
  display: flex;
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export default Input;
