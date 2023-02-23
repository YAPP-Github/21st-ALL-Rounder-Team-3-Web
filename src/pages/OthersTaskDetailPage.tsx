import TaskHeader from "@src/components/task/TaskHeader";
import Divider from "@src/components/common/Divider";
import styled from "styled-components";
import CheckStatus from "@src/components/task/CheckStatus";
import TaskBasicDescription from "@src/components/task/TaskBasicDescription";
import FixedBottomButtonLayout from "@src/components/layout/FixedBottomButtonLayout";
import Button from "@src/components/common/Button";
import URL from "@src/components/task/URL";
import { useMemo } from "react";
import useTaskDetailQuery from "@src/core/queries/useTaskDetailQuery";
import { useParams } from "react-router-dom";
import useFeedbackListQuery from "@src/core/queries/useFeedbackListQuery";
import getLeftDays from "@src/utils/getLeftDays";
import useChangeTaskStatusQuery from "@src/core/queries/changeTaskStatusQuery";
import DefaultLayout from "@src/components/layout/DefaultLayout";

const OthersTaskDetailPage = () => {
  const { taskId, projectId } = useParams();
  const { data } = useTaskDetailQuery(taskId || "");
  const { data: feedbackList } = useFeedbackListQuery(taskId || "");
  const { mutate } = useChangeTaskStatusQuery();
  const feedbackLeftDays = getLeftDays(data?.feedbackDueDate as string);
  const startLeftDays = getLeftDays(data?.startDate as string);
  const dueLeftDays = getLeftDays(data?.dueDate as string);

  const changeStatus = (state: "INPROGRESS" | "DONE" | "FEEDBACK" | "LATE") => {
    if (taskId && data) {
      mutate({
        taskId,
        taskStatus: state,
      });
    }
  };

  const handleBackClick = () => {
    window.Android.navigateToMain();
  };

  const handleFeedbackClick = () => {
    window.Android.navigateToFeedback(projectId!, taskId!);
  };

  useMemo(() => {
    if (data && data.taskStatus === "BEFORE" && startLeftDays <= 0) {
      changeStatus("INPROGRESS");
      useTaskDetailQuery(taskId || "");
    }
    if (data && data.taskStatus === "INPROGRESS" && dueLeftDays < 0) {
      changeStatus("LATE");
      useTaskDetailQuery(taskId || "");
    }
    if (data && data.taskStatus === "FEEDBACK" && feedbackLeftDays < 0) {
      changeStatus("DONE");
      useTaskDetailQuery(taskId || "");
    }
  }, [data]);

  return (
    <DefaultLayout onBack={handleBackClick} title="">
      <TaskHeader data={data} feedbackLeftDays={feedbackLeftDays} />
      <Divider height={8} marginBottom={20} />
      <DescriptionWrapper>
        <TaskBasicDescription data={data} />
        {data?.taskStatus === "FEEDBACK" || data?.taskStatus === "DONE" ? <URL data={data}></URL> : null}
      </DescriptionWrapper>
      {data?.taskStatus === "FEEDBACK" ? (
        <CheckStatus feedbackLeftDays={feedbackLeftDays} data={data} isMyTask={false} />
      ) : null}
      {data?.taskStatus === "FEEDBACK" && data?.feedbackStatus === "PENDING" ? (
        <FixedBottomButtonLayout
          children={<Button type={"primary"} value={"피드백 하러가기"} onClick={handleFeedbackClick} />}
        />
      ) : null}
    </DefaultLayout>
  );
};

const DescriptionWrapper = styled.div`
  padding: 0 16px;
`;

export default OthersTaskDetailPage;
