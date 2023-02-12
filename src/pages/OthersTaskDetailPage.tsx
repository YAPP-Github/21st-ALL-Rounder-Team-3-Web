import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import CheckStatus from "@src/components/task/CheckStatus";
import TaskBasicDescription from "@src/components/task/TaskBasicDescription";
import Icons from "@src/assets/icons/index";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import Button from "@src/components/common/Button";
import URL from "@src/components/task/URL";
import BadgeWithDescription from "@src/components/task/BadgeWithDescription";
import FeedbackResult from "@src/components/task/FeedbackResult";

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
    taskStatus: "FEEDBACK", //BEFORE, INPROGRESS, FEEDBACK, DONE, LATE
    confirmCount: 1,
    participantCount: 1,

    urlLink: "https://comic.naver.com/index",
    urlDescription: "발표 대본 파일",

    perfectCount: 3,
    badCount: 1,
  },
  confirmedMemberInfos: [
    {
      name: "m2",
      imageUrl: "https://1",
    },
  ],
  feedbackList: [
    "자료 조사가 부족한 것 같아요.",
    "시각 자료가 더 있었으면 좋겠어요.",
    "프로젝트와 관련없는 자료가 많아요.",
    "업무 기한을 지켜주세요.",
    "맞춤법 맞춰서 작성해주세요~!",
  ],
};

const getFeedbackLeftDays = () => {
  const FEEDBACK_DUE_TIME = 3 * 24 * 60 * 60 * 1000; //3일(피드백 기간) to millisecond
  const feedbackDueTime = new Date(data.taskInfo.feedbackRequestDate).getTime() + FEEDBACK_DUE_TIME;
  const currentTime = new Date().getTime();

  return Math.floor((feedbackDueTime - currentTime) / (24 * 60 * 60 * 1000));
};

const OthersTaskDetailPage = () => {
  const feedbackLeftDays = getFeedbackLeftDays();

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
      <DescriptionWrapper>
        <TaskBasicDescription
          representativeName={data.taskInfo.representative.name}
          representativeUrl={""}
          startDate={new Date(data.taskInfo.startDate)}
          dueDate={new Date(data.taskInfo.dueDate)}
          description={data.taskInfo.memo}
          taskStatus={data.taskInfo.taskStatus}
        />
        <Divider marginBottom={10} marginTop={10} />
        {data.taskInfo.taskStatus === "FEEDBACK" || data.taskInfo.taskStatus === "DONE" ? (
          <URL urlLink={data.taskInfo.urlLink} urlDescription={data.taskInfo.urlDescription}></URL>
        ) : null}
      </DescriptionWrapper>

      {data.taskInfo.taskStatus === "FEEDBACK" ? (
        <CheckStatus
          feedbackLeftDays={feedbackLeftDays}
          taskStatus={data.taskInfo.taskStatus}
          feedbackStatus={"finished"}
          taskManager={data.taskInfo.representative.name}
        />
      ) : null}

      {data.taskInfo.taskStatus === "DONE" ? (
        <>
          <Divider height={8} marginBottom={24} marginTop={24} />

          <DescriptionWrapper>
            <BadgeWithDescription
              title={"피드백 완료"}
              content={"피드백은 가장 많이 받은 것부터 보여져요!"}
              background={"gray"}
            />
            <ResultContiner>
              <FeedbackResult
                value={"완벽해요"}
                icon={<Icons.IconCheckContained stroke={"#555555"} />}
                count={data.taskInfo.perfectCount}
              />
              <FeedbackResult
                value={"아쉬워요"}
                icon={<Icons.IconAlertCircle stroke="#555555" />}
                count={data.taskInfo.badCount}
              />
            </ResultContiner>
            <Margin top={20} />
          </DescriptionWrapper>
        </>
      ) : null}

      <Margin bottom={100} />

      {data.taskInfo.taskStatus === "FEEDBACK" ? (
        <>
          <FixedBottomButtonLayout
            children={
              <>
                <Button type={"secondary"} icon={<Icons.IconAlertCircle />} value={"아쉬워요"} onClick={() => {}} />
                <Button type={"primary"} icon={<Icons.IconCheckContained />} value={"완벽해요"} onClick={() => {}} />
              </>
            }
          />
        </>
      ) : null}
    </>
  );
};

const DescriptionWrapper = styled.div`
  padding: 0 16px;
`;

const Margin = styled.div<{ top?: number; bottom?: number }>`
  top: ${props => (props.top ? `${props.top}px` : "0px")};
  bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

const ResultContiner = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.white};
  border-top: 1px solid ${({ theme }) => theme.gray[300]};
`;

export default OthersTaskDetailPage;
