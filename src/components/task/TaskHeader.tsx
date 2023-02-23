import { TaskDetail } from "@src/core/queries/useTaskDetailQuery";
import getLeftDays from "@src/utils/getLeftDays";
import styled, { css } from "styled-components";
import Badge from "../common/Badge";

const getProgressPercentage = (startDate?: string, endDate?: string, taskStatus?: string) => {
  if (!startDate || !endDate || !taskStatus) {
    return;
  }
  //기간이 지나지 않았더라도 피드백을 요청했을 경우 프로그레스 바 전체가 다 차도록 처리
  if (taskStatus === "FEEDBACK" || taskStatus === "DONE") return 100;
  if (taskStatus === "BEFORE") return 0;

  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const todayTime = new Date().getTime();
  return Math.abs(((todayTime - startTime) / (endTime - startTime)) * 100);
};

const getProgressStatusMessage = (taskStatus?: string) => {
  if (!taskStatus) {
    return;
  }
  if (taskStatus === "BEFORE") return "아직 업무 시작 전이에요";
  if (taskStatus === "INPROGRESS") return "으쌰으쌰 진행중이에요🔥";
  if (taskStatus === "LATE") return "기간이 지났어요🥲";
  return "업무를 완료했어요 🎉";
};

const getBadgeMessage = (feedbackLeftDays: number, taskStatus?: string) => {
  const feedbackLeftDaysValue = feedbackLeftDays === 0 ? "DAY" : Math.abs(feedbackLeftDays);
  if (taskStatus === "BEFORE") return "시작 전";
  if (taskStatus === "INPROGRESS" || taskStatus === "LATE") return "진행 중";
  else if (taskStatus === "FEEDBACK") return `피드백 요청 D-${feedbackLeftDaysValue}`;
  return "완료";
};

const getProgressColor = (taskStatus?: string) => {
  if (!taskStatus) {
    return;
  }
  if (taskStatus === "BEFORE" || taskStatus === "DONE") return "gray";
  if (taskStatus === "INPROGRESS") return "green";
  if (taskStatus === "LATE") return "red";
  return "purple";
};

interface Props {
  data: TaskDetail | undefined;
  feedbackLeftDays: number;
}

const TaskHeader = ({ data, feedbackLeftDays }: Props) => {
  const percentage = getProgressPercentage(data?.startDate, data?.dueDate, data?.taskStatus);
  const taskLeftDays = getLeftDays(data?.dueDate as string);
  const progressStatusMessage = getProgressStatusMessage(data?.taskStatus);
  const progressColor = getProgressColor(data?.taskStatus);
  const badgeMessage = getBadgeMessage(feedbackLeftDays, data?.taskStatus);

  return (
    <Wrapper>
      <Badge value={badgeMessage || ""} color={progressColor} />
      <Title>{data?.title}</Title>
      <ProgressContainer percentage={percentage} color={progressColor}></ProgressContainer>
      <ProgressTextContainer taskStatus={data?.taskStatus}>
        <Text color={progressColor || ""}>{progressStatusMessage}</Text>
        {data?.taskStatus === "BEFORE" || data?.taskStatus === "INPROGRESS" ? (
          <Text color={progressColor || ""}>D-{taskLeftDays}</Text>
        ) : null}
        {data?.taskStatus === "LATE" ? <Text color={progressColor || ""}>D+{taskLeftDays * -1}</Text> : null}
      </ProgressTextContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  padding: 20px 16px;
`;

const Title = styled.h2`
  margin: 10px 0 20px 0;
`;

const ProgressContainer = styled.div<{ percentage?: number; color?: string }>`
  background-color: ${({ theme }) => theme.gray[200]};
  width: 100%;
  height: 8px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;

  &::before {
    top: 0;
    left: 0;
    position: absolute;
    ${props => {
      if (props.color === "gray")
        return css`
          background-color: ${({ theme }) => theme.gray[500]};
        `;
      if (props.color === "green")
        return css`
          background-color: ${({ theme }) => theme.sub[500]};
        `;
      if (props.color === "purple")
        return css`
          background-color: ${({ theme }) => theme.primaryPurple[500]};
        `;
      if (props.color === "red")
        return css`
          background-color: ${({ theme }) => theme.error};
        `;
    }}
    border-radius: 7px;
    content: "";
    height: 100%;
    width: ${props => props.percentage}%;
  }
`;

const ProgressTextContainer = styled.div<{ taskStatus?: string }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Text = styled.p<{ color: string }>`
  ${props => {
    if (props.color === "gray")
      return css`
        color: ${({ theme }) => theme.gray[500]};
      `;
    if (props.color === "green")
      return css`
        color: ${({ theme }) => theme.sub[500]};
      `;
    if (props.color === "purple")
      return css`
        color: ${({ theme }) => theme.primaryPurple[500]};
      `;
    if (props.color === "red")
      return css`
        color: ${({ theme }) => theme.error};
      `;
  }}
  font-size: 12px;
`;

export default TaskHeader;
