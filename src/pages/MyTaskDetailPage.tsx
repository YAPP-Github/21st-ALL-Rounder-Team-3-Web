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
import URL from "@src/components/task/URL";
import Icons from "@src/assets/icons/index";
import { typo_body2_medium, typo_h3_semibold } from "@src/styles/Typo";
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
    taskStatus: "INPROGRESS", //BEFORE, INPROGRESS, FEEDBACK, DONE, LATE
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
  const [feedbackRequestCondition, setFeedbackRequestCondition] = useState<boolean>(false);
  const feedbackLeftDays = getFeedbackLeftDays();
  // const feedbackStatus => confirmedMemberInfos 리스트와 비교하여 사용자가 해당 업무에 피드백을 했는지 여부 파악

  const requestFeedback = () => {
    //console.log("titleerror1 : ", titleInputError);
    if (!urlTitle && urlContent) setTitleInputError(true);
    else if (urlTitle && !urlContent) setContentInputError(true);
    //console.log("titleerror2 : ", titleInputError);
  };

  useEffect(() => {
    if (!urlTitle && urlContent) setFeedbackRequestCondition(true);
    else if (urlTitle && !urlContent) setFeedbackRequestCondition(true);
    else setFeedbackRequestCondition(false);
  }, [urlTitle, urlContent]);

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
      <DescriptionWrapper>
        <TaskBasicDescription
          representativeName={data.taskInfo.representative.name}
          representativeUrl={""}
          startDate={new Date(data.taskInfo.startDate)}
          dueDate={new Date(data.taskInfo.dueDate)}
          description={data.taskInfo.memo}
          taskStatus={data.taskInfo.taskStatus}
        />
      </DescriptionWrapper>
      {data.taskInfo.taskStatus === "FEEDBACK" ? (
        <CheckStatus
          feedbackLeftDays={feedbackLeftDays}
          taskStatus={data.taskInfo.taskStatus}
          feedbackStatus={"finished"}
          taskManager={data.taskInfo.representative.name}
        />
      ) : null}

      {data.taskInfo.taskStatus === "LATE" || data.taskInfo.taskStatus === "INPROGRESS" ? (
        <DescriptionWrapper>
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
          <BadgeWithDescription
            title={"피드백 요청"}
            content={"업무를 끝냈다면, 피드백 요청을 보내세요!"}
            background={"green"}
          />
        </DescriptionWrapper>
      ) : null}

      {data.taskInfo.taskStatus === "DONE" ? (
        <>
          <DescriptionWrapper>
            <Divider height={1} marginTop={10} marginBottom={10} />
            <URL urlLink={data.taskInfo.urlLink} urlDescription={data.taskInfo.urlDescription} />
          </DescriptionWrapper>
          <Margin top={24} />
          <Divider height={8} marginBottom={24} />

          <DescriptionWrapper>
            <BadgeWithDescription
              title={"피드백 완료"}
              content={"피드백은 가장 많이 받은 것부터 보여져요!"}
              background={"gray"}
            />
            <ResultContiner>
              <FeedbackResult
                value={"완벽해요"}
                icon={<Icons.IconCheckContainedGray />}
                count={data.taskInfo.perfectCount}
              />
              <FeedbackResult value={"아쉬워요"} icon={<Icons.IconAlertCircleGray />} count={data.taskInfo.badCount} />
            </ResultContiner>
            <Margin top={20} />

            {data.feedbackList.map(item => (
              <FeedbackContainer>{item} </FeedbackContainer>
            ))}
          </DescriptionWrapper>
        </>
      ) : null}

      <Margin bottom={100} />

      {/* 업무 진행중, 지각 -> 피드백 요청버튼, 
      피드백 -> 피드백 취소하기 버튼
      완료, 진행 전 -> 버튼x
      */}
      {data.taskInfo.taskStatus === "BEFORE" || data.taskInfo.taskStatus === "DONE" ? null : data.taskInfo
          .taskStatus === "FEEDBACK" ? (
        <FixedBottomButtonLayout
          children={<Button type={"secondary"} value={"피드백 요청 취소하기"} onClick={cancelFeedbackRequest} />}
        />
      ) : (
        <FixedBottomButtonLayout
          children={
            <Button
              disabled={feedbackRequestCondition}
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

const DescriptionWrapper = styled.div`
  padding: 0 16px;
`;

const Margin = styled.div<{ top?: number; bottom?: number }>`
  margin-top: ${props => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

const ResultContiner = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.white};
  border-top: 1px solid ${({ theme }) => theme.gray[300]};
`;

const FeedbackContainer = styled.div`
  background-color: ${({ theme }) => theme.sub[100]};
  border-radius: 16px;
  padding: 10px 19px;
  ${typo_body2_medium}
  margin-bottom: 10px;
`;

export default MyTaskDetailPage;
