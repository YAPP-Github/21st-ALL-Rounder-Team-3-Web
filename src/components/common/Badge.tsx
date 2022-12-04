import styled, { css } from "styled-components";

const PurpleBadge = css`
  background-color: #f5f0ff;
  color: #8075f9;
  border: 1px solid #f1ebff;
`;

const GreenBadge = css`
  background-color: #f1faf7;
  color: #1ac694;
  border: 1px solid #d3f4eb;
`;

const RedBadge = css`
  background-color: #fff0f0;
  color: #ed3b3b;
  border: 1px solid #ffe6e6;
`;

const GrayBadge = css`
  background-color: #fafafa;
  color: #999999;
  border: 1px solid #f4f4f4;
`;

const StyledBadge = styled.span`
  padding: 2px 10px;
  border-radius: 4px;
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

type Props = {
  color: "purple" | "red" | "green" | "gray";
  value: string;
};

const Badge = ({ color, value }: Props) => {
  return <StyledBadge color={color}>{value}</StyledBadge>;
};

export default Badge;
