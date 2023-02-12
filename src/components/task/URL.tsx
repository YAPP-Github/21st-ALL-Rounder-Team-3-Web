import { typo_body4_regular, typo_h4_semibold } from "@src/styles/Typo";
import styled from "styled-components";
import Icons from "@src/assets/icons/index";

type Props = {
  link: string;
  description: string;
};

const URL = ({ link, description }: Props) => (
  <Wrapper>
    <Title>URL</Title>
    <Content href={link}>
      <Icons.IconLink />
      {description}
    </Content>
  </Wrapper>
);

const Wrapper = styled.div``;

const Title = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.gray[500]};
  margin-bottom: 4px;
`;

const Content = styled.a`
  display: flex;
  ${typo_h4_semibold};
  color: ${({ theme }) => theme.black};
  text-decoration: underline;
  gap: 4px;
`;

export default URL;
