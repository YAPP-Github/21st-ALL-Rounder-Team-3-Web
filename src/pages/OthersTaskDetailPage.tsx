import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import CheckStatus from "@src/components/task/CheckStatus";
import TaskBasicDescription from "@src/components/task/TaskBasicDescription";
import Icons from "@src/assets/icons/index";
import { typo_body4_regular, typo_h4_semibold } from "@src/styles/Typo";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import Button from "@src/components/common/Button";
import icons from "@src/assets/icons/index";

//postman return 값
const data = {
  taskInfo: {
    id: 1,
    representative: {
      name: "지수",
      imageUrl: "https://1",
    },
    title: "2차 세계 대전",
    startDate: "2022-10-10",
    dueDate: "2023-10-15",

    feedbackRequestDate: "2023-02-05",

    memo: "어려워",
    taskStatus: "FEEDBACK", //BEFORE, INPROGRESS, FEEDBACK, DONE, LATE
    confirmCount: 1,
    participantCount: 1,

    urlLink: "https://comic.naver.com/index",
    urlDescription: "발표 대본 파일",
  },
  confirmedMemberInfos: [
    {
      name: "m2",
      imageUrl: "https://1",
    },
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
      <TaskBasicDescriptionWrapper>
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
          <UrlWrapper>
            <UrlTitle>URL</UrlTitle>
            <UrlContent href={data.taskInfo.urlLink}>
              <Icons.IconLink />
              {data.taskInfo.urlDescription}
            </UrlContent>
          </UrlWrapper>
        ) : null}
      </TaskBasicDescriptionWrapper>
      {data.taskInfo.taskStatus === "FEEDBACK" ? (
        <CheckStatus
          feedbackLeftDays={feedbackLeftDays}
          taskStatus={data.taskInfo.taskStatus}
          feedbackStatus={"finished"}
          taskManager={data.taskInfo.representative.name}
        />
      ) : null}

      <Margin bottom="100" />

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

const TaskBasicDescriptionWrapper = styled.div`
  padding: 0 16px;
`;

const UrlWrapper = styled.div``;

const UrlTitle = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.gray[500]};
  margin-bottom: 4px;
`;

const UrlContent = styled.a`
  display: flex;
  ${typo_h4_semibold};
  color: ${({ theme }) => theme.black};
  text-decoration: underline;
`;

const Margin = styled.div<{ top?: string; bottom?: string }>`
  margin-top: ${props => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

export default OthersTaskDetailPage;
