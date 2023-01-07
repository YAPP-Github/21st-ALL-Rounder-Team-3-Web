import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { typo_h3_semibold } from "@src/styles/Typo";

const PrimaryButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.main[500]};
  color: ${({ theme }) => theme.colors.white};
`;

const SecondaryButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main[500]};
  border: 1px solid ${({ theme }) => theme.colors.main[500]};
`;

const DisabledButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.main[200]};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
`;

const BaseButton = styled.button<{ btnType: string; disabled?: boolean }>`
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  ${typo_h3_semibold};
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
  onClick: () => void;
};

const Button = ({ type, value, disabled, icon, onClick }: Props) => {
  return (
    <BaseButton btnType={type} disabled={disabled} onClick={onClick}>
      <IconWrapper>{icon && icon}</IconWrapper>
      {value}
    </BaseButton>
  );
};

export default Button;
