import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import TaskManagerProfile from "@src/components/task/TaskManagerProfile";
import TaskDescription from "@src/components/task/TaskDescription";
import CheckStatus from "@src/components/task/CheckStatus";

const TaskDetail = () => {
  return (
    <>
      <TaskHeader />
      <Divider height={8} marginBottom={20} />
      <TaskManagerProfile name="가연" imageSource={""} />
      <Divider dividerType="textDivider" />
      <TaskDescription title="업무 기간" content="2022.11.30 (금) ~ 2023.03.22(수)" />
      <Divider dividerType="textDivider" />
      <TaskDescription title="업무 설명" content="워드로 정리해서 넘기기!!" />
      <Divider dividerType="textDivider" />
      <TaskDescription
        title="URL"
        content="https://my.spline.design/keyboard-7f4fb3554eafc2ad173ced22f55b8c7c/https://my.spline.design/keyboard-7f4fb3554eafc2ad173ced22f55b8c7c/"
      />
      <CheckStatus />
    </>
  );
};

const StatusWrapper = styled.div`
  background-color: #fafafa;
  margin-top: 24px;
  padding-top: 24px;
`;

export default TaskDetail;
