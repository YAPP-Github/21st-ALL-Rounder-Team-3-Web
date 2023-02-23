import { typo_body4_regular, typo_h4_semibold } from "@src/styles/Typo";
import styled from "styled-components";
import Icons from "@src/assets/icons/index";
import { TaskDetail } from "@src/core/queries/useTaskDetailQuery";
import Divider from "../common/Divider";

type Props = {
  data: TaskDetail;
};

const createValidUrlPath = (url: string) => {
  if (!url.match(/^https?:\/\//i)) {
    url = "http://" + url;
  }
  return url;
};

const URL = ({ data }: Props) => {
  const url = createValidUrlPath(data.taskContents[data.taskContents.length - 1].url);

  return (
    <Wrapper>
      {data?.taskContents[data.taskContents.length - 1].title !== "" ? (
        <>
          <Divider marginBottom={10} marginTop={10} height={1} />

          <Title>URL</Title>
          <Content
            onClick={() => {
              window.open(url);
            }}
          >
            <Icons.IconLink />
            {data?.taskContents[data.taskContents.length - 1].title}
          </Content>
        </>
      ) : null}
    </Wrapper>
  );
};

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
