import { typo_body4_regular, typo_h4_semibold } from "@src/styles/Typo";
import styled from "styled-components";
import Icons from "@src/assets/icons/index";
import { TaskDetail } from "@src/core/queries/useTaskDetailQuery";

type Props = {
  data: TaskDetail;
};

const URL = ({ data }: Props) => (
  <Wrapper>
    <Title>URL</Title>
    <Content href={data?.taskContents[0].url}>
      <Icons.IconLink />
      {data?.taskContents[0].title}
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
