import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import TaskManagerProfile from "@src/components/task/TaskManagerProfile";
import TaskDescription from "@src/components/task/TaskDescription";
import CheckStatus from "@src/components/task/CheckStatus";
import TaskBasicDescription from "@src/components/task/TaskBasicDescription";

const tmpUrlList = [
  { description: "발표 대본 파일", url: "https://my.spline.design/keyboard-7f4fb3554eafc2ad173ced22f55b8c7c/" },
];

const TaskDetailPage = () => {
  return (
    <>
      <TaskHeader />
      <Divider height={8} marginBottom={20} />
      <TaskBasicDescriptionWrapper>
        <TaskBasicDescription
          representativeName="가연"
          representativeUrl={""}
          startDate="2022.11.30 (금)"
          dueDate="2023.03.22 (수)"
          urlList={tmpUrlList}
          description="워드로 정리해서 넘기기!!"
        />
      </TaskBasicDescriptionWrapper>

      <CheckStatus />
    </>
  );
};

const StatusWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin-top: 24px;
  padding-top: 24px;
`;

const TaskBasicDescriptionWrapper = styled.div`
  padding: 20px 16px;
`;

export default TaskDetailPage;
