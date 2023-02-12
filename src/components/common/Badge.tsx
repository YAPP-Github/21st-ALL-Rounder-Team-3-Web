import styled, { css } from "styled-components";

type Props = {
  color?: "purple" | "green" | "gray" | "red";
  value: string;
};

const Badge = ({ color, value }: Props) => {
  return <BaseBadge color={color}>{value}</BaseBadge>;
};

const PurpleBadge = css`
  background-color: ${({ theme }) => theme.primaryPurple[100]};
  color: ${({ theme }) => theme.primaryPurple[500]};
  border: 1px solid ${({ theme }) => theme.primaryPurple[200]};
`;

const GreenBadge = css`
  background-color: ${({ theme }) => theme.sub[100]};
  color: ${({ theme }) => theme.sub[500]};
  border: 1px solid ${({ theme }) => theme.sub[300]};
`;

const GrayBadge = css`
  background-color: ${({ theme }) => theme.gray[200]};
  color: ${({ theme }) => theme.gray[600]};
  border: 1px solid ${({ theme }) => theme.gray[300]};
`;

const RedBadge = css`
  background-color: #ffefef;
  color: ${({ theme }) => theme.error};
  border: 1px solid #ffc8c8;
`;

const BaseBadge = styled.span`
  padding: 2px 10px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  ${props => {
    if (props.color === "purple") return PurpleBadge;
    if (props.color === "green") return GreenBadge;
    if (props.color === "gray") return GrayBadge;
    if (props.color === "red") return RedBadge;
  }};
`;

export default Badge;
