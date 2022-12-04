import { ReactNode } from "react";
import styled, { css } from "styled-components";

const PrimaryButtonStyle = css`
  background-color: #8075f9;
  color: #ffffff;
`;

const SecondaryButtonStyle = css`
  background-color: #ffffff;
  color: #8075f9;
  border: 1px solid #8075f9;
`;

const DisabledButtonStyle = css`
  background-color: #cccccc;
  border: 0;
  color: #ffffff;
`;

const StyledButton = styled.button<{ btnType: string; disabled?: boolean }>`
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => {
    if (props.disabled) {
      return DisabledButtonStyle;
    }

    switch (props.btnType) {
      case "primary":
        return PrimaryButtonStyle;
      case "secondary":
        return SecondaryButtonStyle;
    }
  }};
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  type: "primary" | "secondary";
  value: string;
  disabled?: boolean;
  icon?: ReactNode;
  margin?: number;
};

const Button = ({ type, value, disabled, icon }: Props) => {
  return (
    <StyledButton btnType={type} disabled={disabled}>
      <IconWrapper>{icon && icon}</IconWrapper>
      {value}
    </StyledButton>
  );
};

export default Button;
