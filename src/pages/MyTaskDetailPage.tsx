import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import CheckStatus from "@src/components/task/CheckStatus";
import TaskBasicDescription from "@src/components/task/TaskBasicDescription";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import Button from "@src/components/common/Button";

//postman return 값
const data = {
  taskInfo: {
    id: 1,
    representative: {
      name: "가연",
      imageUrl: "https://1",
    },
    title: "2차 세계 대전",
    startDate: "2022-10-10",
    dueDate: "2023-10-15",

    feedbackRequestDate: "2023-01-12",

    memo: "어려워",
    taskStatus: "INPROGRESS", //BEFORE, INPROGRESS, FEEDBACK, DONE, LATE
    confirmCount: 1,
    participantCount: 1,
  },
  confirmedMemberInfos: [
    {
      name: "m2",
      imageUrl: "https://1",
    },
  ],
};

const getFeedbackLeftDays = () => {
  const FEEDBACK_DUE_TIME = 3 * 24 * 60 * 60 * 1000; //3일 to millisecond
  const feedbackDueTime = new Date(data.taskInfo.feedbackRequestDate).getTime() + FEEDBACK_DUE_TIME;
  const currentTime = new Date().getTime();

  return Math.floor((feedbackDueTime - currentTime) / (24 * 60 * 60 * 1000));
};

const requestFeedback = () => {};

const cancelFeedbackRequest = () => {};

const MyTaskDetailPage = () => {
  const feedbackLeftDays = getFeedbackLeftDays();
  // const feedbackStatus => confirmedMemberInfos 리스트와 비교하여 사용자가 해당 업무에 피드백을 했는지 여부 파악
  return (
    <>
      <TaskHeader
        title={data.taskInfo.title}
        taskStatus={data.taskInfo.taskStatus}
        dueDate={data.taskInfo.dueDate}
        startDate={data.taskInfo.startDate}
        feedbackRequestDate={data.taskInfo.feedbackRequestDate}
        feedbackLeftDays={feedbackLeftDays}
      />
      <Divider height={8} marginBottom={20} />
      <TaskBasicDescriptionWrapper>
        <TaskBasicDescription
          representativeName={data.taskInfo.representative.name}
          representativeUrl={""}
          startDate={new Date(data.taskInfo.startDate)}
          dueDate={new Date(data.taskInfo.dueDate)}
          description={data.taskInfo.memo}
          taskStatus={data.taskInfo.taskStatus}
        />
      </TaskBasicDescriptionWrapper>
      {data.taskInfo.taskStatus === "FEEDBACK" ? (
        <CheckStatus
          feedbackLeftDays={feedbackLeftDays}
          taskStatus={data.taskInfo.taskStatus}
          feedbackStatus={"finished"}
          taskManager={data.taskInfo.representative.name}
        />
      ) : null}

      {data.taskInfo.taskStatus === "BEFORE" ? null : data.taskInfo.taskStatus === "FEEDBACK" ? (
        <FixedBottomButtonLayout
          children={<Button type={"secondary"} value={"피드백 요청 취소하기"} onClick={cancelFeedbackRequest} />}
        />
      ) : (
        <FixedBottomButtonLayout
          children={<Button type={"primary"} value={"피드백 요청하기"} onClick={requestFeedback} />}
        />
      )}
    </>
  );
};

const TaskBasicDescriptionWrapper = styled.div`
  padding: 0 16px;
`;

export default MyTaskDetailPage;
