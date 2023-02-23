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
import { typo_body2_medium, typo_body3_regular, typo_h3_semibold } from "@src/styles/Typo";
import FeedbackResult from "@src/components/task/FeedbackResult";
import { useParams } from "react-router-dom";
import useTaskDetailQuery from "@src/core/queries/useTaskDetailQuery";
import useFeedbackListQuery from "@src/core/queries/useFeedbackListQuery";
import goodFacialExpressionImg from "@src/assets/images/good_facial_expression_img.png";
import notEnoughFacialExpressionImg from "@src/assets/images/not_enough_facial_expression_img.png";
import useBottomSheet from "@src/core/hooks/useBottomSheet";
import useSendTaskContentMutation from "@src/core/queries/sendTaskContentMutation";
import getLeftDays from "@src/utils/getLeftDays";
import useChangeTaskStatusQuery from "@src/core/queries/changeTaskStatusQuery";
import DefaultLayout from "@src/components/layout/DefaultLayout";

const MyTaskDetailPage = () => {
  const [urlTitle, setUrlTitle] = useState<string>("");
  const [urlContent, setUrlContent] = useState<string>("");
  const [feedbackRequestCondition, setFeedbackRequestCondition] = useState<boolean>(false);
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const { taskId, projectId } = useParams();
  const { data, refetch } = useTaskDetailQuery(taskId || "");
  const { data: feedbackList } = useFeedbackListQuery(taskId || "");
  const { mutate: mutateTaskContent } = useSendTaskContentMutation();
  const { mutate: mutateTaskStatus } = useChangeTaskStatusQuery();
  const feedbackLeftDays = getLeftDays(data?.feedbackDueDate as string);
  const startLeftDays = getLeftDays(data?.startDate as string);
  const dueLeftDays = getLeftDays(data?.dueDate as string);

  const changeStatus = (state: "INPROGRESS" | "DONE" | "FEEDBACK" | "LATE") => {
    if (taskId && data) {
      mutateTaskStatus({
        taskId,
        taskStatus: state,
      });
    }
    refetch();
  };

  const handleRequestButton = () => {
    if (taskId) {
      mutateTaskContent({
        taskId,
        title: urlTitle,
        url: urlContent,
      });
    }
    changeStatus("FEEDBACK");
  };

  //임시 데이터
  if (data && feedbackList) {
    data.feedbackStatus = "pending";
    feedbackList.details[0] = "자료조사가 부족한 것 같아요.";
    feedbackList.details[1] = "시각 자료가 더 있었으면 좋겠어요.";
    feedbackList.evaluations.GOOD = 3;
    feedbackList.evaluations.NOT_ENOUGH = 2;
  }

  useMemo(() => {
    if (data && data.taskStatus === "BEFORE" && startLeftDays < 0) {
      changeStatus("INPROGRESS");
    }
    if (data && data.taskStatus === "INPROGRESS" && dueLeftDays < 0) {
      changeStatus("LATE");
    }
    if (data && data.taskStatus === "FEEDBACK" && feedbackLeftDays < 0) {
      changeStatus("DONE");
    }
  }, [data]);

  const handleFeedbackCancelButton = () => {
    openBottomSheet({
      title: "피드백 요청 취소하기",
      content: (
        <BottomSheetContentWrapper>
          <BlackContent>피드백 요청을 취소하실건가요?</BlackContent>
          <PurpleContent>취소하면 이때까지의 피드백은 무효가 돼요.</PurpleContent>
          <Margin bottom={22} />
          <Button
            type={"secondary"}
            value={"피드백 요청 취소하기"}
            onClick={() => {
              changeStatus("INPROGRESS");
              closeBottomSheet();
            }}
          ></Button>
        </BottomSheetContentWrapper>
      ),
      onClose: closeBottomSheet,
    });
  };

  const handleEditClick = () => {
    window.Android.navigateToMyTask(
      projectId!,
      taskId!,
      String(taskManager!.id),
      taskManager!.value,
      title,
      memo,
      String(startDate),
      String(dueDate),
    );
  };

  const handleBackClick = () => {
    window.Android.navigateToMain();
  };

  useEffect(() => {
    if (!urlTitle && urlContent) setFeedbackRequestCondition(true);
    else if (urlTitle && !urlContent) setFeedbackRequestCondition(true);
    else setFeedbackRequestCondition(false);
  }, [urlTitle, urlContent]);

  return (
    <DefaultLayout onBack={handleBackClick} title="" withEditIcon onEdit={handleEditClick}>
      <TaskHeader data={data} feedbackLeftDays={feedbackLeftDays} />
      <Divider height={8} marginBottom={20} />
      <DescriptionWrapper>
        <TaskBasicDescription data={data} />
        {data?.taskStatus === "FEEDBACK" || data?.taskStatus === "DONE" ? <URL data={data}></URL> : null}
      </DescriptionWrapper>
      {data?.taskStatus === "FEEDBACK" ? (
        <CheckStatus data={data} feedbackLeftDays={feedbackLeftDays} isMyTask={true} />
      ) : null}

      {data?.taskStatus === "LATE" || data?.taskStatus === "INPROGRESS" ? (
        <DescriptionWrapper>
          <Divider marginBottom={10} marginTop={10} />
          <TaskDescription title="URL" />
          <Input value={urlTitle} placeholder={"링크 제목을 입력해주세요."} onChange={setUrlTitle} />
          <Margin bottom={10} />
          <Input value={urlContent} placeholder={"완료된 업무 링크를 입력해주세요."} onChange={setUrlContent} />
          <Margin bottom={24} />
          <BadgeWithDescription
            title={"피드백 요청"}
            content={"업무를 끝냈다면, 피드백 요청을 보내세요!"}
            background={"green"}
          />
        </DescriptionWrapper>
      ) : null}

      {data?.taskStatus === "DONE" ? (
        <>
          <Margin top={24} />
          <Divider height={8} marginBottom={24} />

          <DescriptionWrapper>
            <BadgeWithDescription
              title={"피드백 완료"}
              content={"도착한 피드백은 나만 볼 수 있어요!"}
              background={"gray"}
            />
            <ResultContiner>
              <FeedbackResult value={"좋아요!"} src={goodFacialExpressionImg} count={feedbackList?.evaluations.GOOD} />
              <FeedbackResult
                value={"아쉬워요"}
                src={notEnoughFacialExpressionImg}
                count={feedbackList?.evaluations.NOT_ENOUGH}
              />
            </ResultContiner>
            <Margin top={20} />

            {feedbackList &&
              feedbackList.details.map((item, index) => <FeedbackContainer key={index}>{item}</FeedbackContainer>)}
          </DescriptionWrapper>
        </>
      ) : null}

      <Margin bottom={100} />

      {/* 업무 진행중, 지각 -> 피드백 요청버튼, 
      피드백 -> 피드백 취소하기 버튼
      완료, 진행 전 -> 버튼x
      */}
      {data?.taskStatus === "BEFORE" || data?.taskStatus === "DONE" ? null : data?.taskStatus === "FEEDBACK" ? (
        <FixedBottomButtonLayout
          children={<Button type={"secondary"} value={"피드백 요청 취소하기"} onClick={handleFeedbackCancelButton} />}
        />
      ) : (
        <FixedBottomButtonLayout
          children={
            <Button
              disabled={feedbackRequestCondition}
              type={"primary"}
              value={"피드백 요청하기"}
              onClick={handleRequestButton}
            />
          }
        />
      )}
    </DefaultLayout>
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
  margin-top: 10px;

  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.white};
`;

const FeedbackContainer = styled.div`
  background-color: ${({ theme }) => theme.sub[100]};
  ${typo_body2_medium};
  height: 44px;
  border-radius: 16px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  padding-left: 19px;
`;

const BottomSheetContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
`;

const BlackContent = styled.p`
  ${typo_body3_regular};
`;

const PurpleContent = styled.p`
  ${typo_body3_regular};
  color: ${({ theme }) => theme.primaryPurple[500]};
`;

export default MyTaskDetailPage;
