import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import CheckStatus from "@src/components/task/CheckStatus";
import TaskBasicDescription from "@src/components/task/TaskBasicDescription";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import Button from "@src/components/common/Button";
import TaskDescription from "@src/components/task/TaskDescription";
import Input from "@src/components/common/Input";
import { useEffect, useMemo, useState } from "react";
import BadgeWithDescription from "@src/components/task/BadgeWithDescription";

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

const MyTaskDetailPage = () => {
  const [urlTitle, setUrlTitle] = useState<string>("");
  const [urlContent, setUrlContent] = useState<string>("");
  const [titleInputError, setTitleInputError] = useState<boolean>(false);
  const [contentInputError, setContentInputError] = useState<boolean>(false);
  const feedbackLeftDays = getFeedbackLeftDays();
  // const feedbackStatus => confirmedMemberInfos 리스트와 비교하여 사용자가 해당 업무에 피드백을 했는지 여부 파악

  const requestFeedback = () => {
    //console.log("titleerror1 : ", titleInputError);
    if (!urlTitle && urlContent) setTitleInputError(true);
    else if (urlTitle && !urlContent) setContentInputError(true);
    //console.log("titleerror2 : ", titleInputError);
  };

  const cancelFeedbackRequest = () => {};

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

      {data.taskInfo.taskStatus === "LATE" || data.taskInfo.taskStatus === "INPROGRESS" ? (
        <TaskBasicDescriptionWrapper>
          <Divider marginBottom={10} marginTop={10} />
          <TaskDescription title="URL" />
          <Input
            value={urlTitle}
            placeholder={"링크 제목을 입력해주세요."}
            onChange={setUrlTitle}
            withError={titleInputError}
          />
          <Margin bottom={10} />
          <Input
            value={urlContent}
            placeholder={"완료된 업무 링크를 입력해주세요."}
            onChange={setUrlContent}
            withError={contentInputError}
          />
          <Margin bottom={24} />
          <BadgeWithDescription title={"피드백 요청"} content={"업무를 끝냈다면, 피드백 요청을 보내세요!"} />
        </TaskBasicDescriptionWrapper>
      ) : null}

      <Margin bottom={100} />

      {data.taskInfo.taskStatus === "BEFORE" ? null : data.taskInfo.taskStatus === "FEEDBACK" ? (
        <FixedBottomButtonLayout
          children={<Button type={"secondary"} value={"피드백 요청 취소하기"} onClick={cancelFeedbackRequest} />}
        />
      ) : (
        <FixedBottomButtonLayout
          children={
            <Button
              type={"primary"}
              value={"피드백 요청하기"}
              onClick={() => {
                requestFeedback;
              }}
            />
          }
        />
      )}
    </>
  );
};

const TaskBasicDescriptionWrapper = styled.div`
  padding: 0 16px;
`;

const Margin = styled.div<{ top?: number; bottom?: number }>`
  margin-top: ${props => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

export default MyTaskDetailPage;
