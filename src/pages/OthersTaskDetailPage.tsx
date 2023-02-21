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
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useMemo, useState } from "react";
import useTaskDetail from "@src/core/queries/useTaskDetailQuery";
import useTaskDetailQuery from "@src/core/queries/useTaskDetailQuery";
import { useParams } from "react-router-dom";
import getFeedbackLeftDays from "@src/utils/getLeftDays";
import useFeedbackListQuery from "@src/core/queries/useFeedbackListQuery";
import { typo_body2_medium } from "@src/styles/Typo";
import Margin from "@src/components/common/Margin";
import BottomSheet from "@src/components/common/BottomSheet";
import useChangeTaskInformationQuery from "@src/core/queries/changeTaskInformationQuery";

const OthersTaskDetailPage = () => {
  const { taskId, projectId } = useParams();
  const { data } = useTaskDetailQuery(taskId || "");
  const { data: feedbackList } = useFeedbackListQuery(taskId || "");
  const { mutate } = useChangeTaskInformationQuery();
  const feedbackLeftDays = getFeedbackLeftDays(data?.feedbackDueDate as string);

  const changeStatus = () => {
    if (taskId && data) {
      mutate({
        taskId,
        taskInformation: {
          taskId: Number(taskId),
          title: data.title,
          startDate: data.startDate,
          dueDate: data.dueDate,
          memo: data.memo,
          taskStatus: "DONE",
        },
      });
    }
  };

  //피드백 요청 후 3일이 지나면 자동으로 업무 마감
  useMemo(() => {
    if (data && taskId && data.taskStatus === "FEEDBACK" && feedbackLeftDays < 0) {
      changeStatus();
    }
  }, [data]);

  if (data && feedbackList) {
    data.feedbackStatus = "finished";
  }

  return (
    <>
      <TaskHeader data={data} feedbackLeftDays={feedbackLeftDays} />
      <Divider height={8} marginBottom={20} />
      <DescriptionWrapper>
        <TaskBasicDescription data={data} />
        <Divider marginBottom={10} marginTop={10} />
        {data?.taskStatus === "FEEDBACK" || data?.taskStatus === "DONE" ? <URL data={data}></URL> : null}
      </DescriptionWrapper>
      {data?.taskStatus === "FEEDBACK" ? (
        <CheckStatus feedbackLeftDays={feedbackLeftDays} data={data} isMyTask={false} />
      ) : null}
      {data?.taskStatus === "FEEDBACK" && data?.feedbackStatus === "pending" ? (
        <FixedBottomButtonLayout children={<Button type={"primary"} value={"피드백 하러가기"} onClick={() => {}} />} />
      ) : null}
    </>
  );
};

const DescriptionWrapper = styled.div`
  padding: 0 16px;
`;

export default OthersTaskDetailPage;
