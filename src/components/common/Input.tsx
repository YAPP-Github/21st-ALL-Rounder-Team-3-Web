import Icons from "@src/assets/icons";
import { typo_body1_medium, typo_cation1_regular } from "@src/styles/Typo";
import { ChangeEvent, FocusEvent, useCallback, useMemo, useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  value: string;
  placeholder: string;
  maxLength?: number;
  onChange: (value: string) => void;
}

type ErrorCode = "REQUIRED" | "MAX_LENGTH";

const ERROR_MESSAGE: { [key in ErrorCode]: string } = {
  REQUIRED: "필수 입력 값입니다.",
  MAX_LENGTH: "",
};

const Input = ({ value, placeholder, maxLength, onChange }: Props) => {
  const [focused, setFocused] = useState(false);
  const [currentLength, setCurrentLength] = useState(0);
  const [errorCode, setErrorCode] = useState<ErrorCode>();

  const setMaxLengthErrorCode = (value: string) => {
    if (value.length === maxLength) {
      setErrorCode("MAX_LENGTH");
    } else {
      setErrorCode(undefined);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setCurrentLength(e.target.value.length);
    setMaxLengthErrorCode(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    setErrorCode(undefined);
    setMaxLengthErrorCode(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    setMaxLengthErrorCode(e.target.value);

    if (!e.target.value) {
      setErrorCode("REQUIRED");
    }
  };

  const handleClear = () => {
    onChange("");
    setErrorCode("REQUIRED");
    setCurrentLength(0);
  };

  return (
    <>
      <InputWrapper focused={focused} error={errorCode}>
        <BaseInput
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
        />

        <IconWrapper>{!focused && value && <Icons.IconClose onClick={handleClear} />}</IconWrapper>
      </InputWrapper>
      <HelpMessage error={errorCode}>
        {focused && maxLength && (
          <>
            {currentLength}/{maxLength}
          </>
        )}
        {!focused && errorCode && <>{ERROR_MESSAGE[errorCode]}</>}
      </HelpMessage>
    </>
  );
};

const InputWrapper = styled.div<{ focused: boolean; error?: ErrorCode }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px 8px 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 8px;
  transition: border 0.2s;

  ${({ focused, error }) => {
    if (error) {
      return css`
        border: 1px solid ${({ theme }) => theme.error};
      `;
    }

    if (focused) {
      return css`
        border: 1px solid ${({ theme }) => theme.primaryPurple[500]};
      `;
    }
  }}
`;

const BaseInput = styled.input`
  display: flex;
  flex-grow: 1;
  ${typo_body1_medium};
  color: ${({ theme }) => theme.black};

  &::placeholder {
    color: ${({ theme }) => theme.gray[400]};
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const HelpMessage = styled.p<{ error?: ErrorCode }>`
  ${typo_cation1_regular};
  color: ${({ theme }) => theme.primaryPurple[500]};
  text-align: right;
  transition: color 0.2s;

  ${({ error }) => {
    if (error) {
      return css`
        color: ${({ theme }) => theme.error};
      `;
    }
  }};
`;

export default Input;
