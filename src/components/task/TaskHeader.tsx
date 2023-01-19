import styled, { css } from "styled-components";
import Badge from "../common/Badge";

const startDate = "2022/12/02";
const endDate = "2022/12/09";

const getProgressPercentage = (startDate: string, endDate: string, taskStatus: string) => {
  //기간이 지나지 않았더라도 피드백을 요청했을 경우 프로그레스 바 전체가 다 차도록 처리
  if (taskStatus === "FEEDBACK" || taskStatus === "DONE") return 100;
  if (taskStatus === "BEFORE") return 0;

  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const todayTime = new Date().getTime();
  console.log(Math.abs(((todayTime - startTime) / (endTime - startTime)) * 100));
  return Math.abs(((todayTime - startTime) / (endTime - startTime)) * 100);
};

const getDateLeft = (dueDate: string) => {
  const endTime = new Date(dueDate).getTime();
  const todayTime = new Date().getTime();
  const timeDifference = endTime - todayTime;
  const leftDays = Math.floor(Math.abs(timeDifference) / (24 * 60 * 60 * 1000));
  if (timeDifference > 0) return `D-${leftDays}`;
  return `D+${leftDays}`;
};

const getProgressStatusMessage = (taskStatus: string) => {
  if (taskStatus === "BEFORE") return "아직 업무 시작 전이에요";
  if (taskStatus === "INPROGRESS") return "으쌰으쌰 진행중이에요🔥";
  return "업무를 완료했어요 🎉";
};

const getBadgeMessage = (taskStatus: string, feedbackLeftDays: number) => {
  const feedbackLeftDaysValue = feedbackLeftDays === 0 ? "DAY" : feedbackLeftDays;
  if (taskStatus === "BEFORE") return "시작 전";
  if (taskStatus === "INPROGRESS") return "진행 중";
  else if (taskStatus === "FEEDBACK") return `피드백 요청 D-${feedbackLeftDaysValue}`;
  return "완료";
};

const getProgressColor = (taskStatus: string) => {
  if (taskStatus === "BEFORE" || taskStatus === "DONE") return "gray";
  if (taskStatus === "INPROGRESS") return "green";
  return "purple";
};

interface Props {
  title: string;
  taskStatus: string;
  startDate: string;
  dueDate: string;
  feedbackRequestDate: string;
  feedbackLeftDays: number;
}

const TaskHeader = ({ title, taskStatus, startDate, dueDate, feedbackRequestDate, feedbackLeftDays }: Props) => {
  const percentage = getProgressPercentage(startDate, dueDate, taskStatus);
  const dateLeft = getDateLeft(dueDate);
  const progressStatusMessage = getProgressStatusMessage(taskStatus);
  const progressColor = getProgressColor(taskStatus);
  const badgeMessage = getBadgeMessage(taskStatus, feedbackLeftDays);
  return (
    <Wrapper>
      <Badge value={badgeMessage} color={progressColor} />
      <Title>{title}</Title>
      <ProgressContainer percentage={percentage} color={progressColor}></ProgressContainer>
      <ProgressTextContainer taskStatus={taskStatus}>
        <Text color={progressColor}>{progressStatusMessage}</Text>
        {taskStatus === "BEFORE" || taskStatus === "INPROGRESS" ? <Text color={progressColor}>{dateLeft}</Text> : null}
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

const ProgressContainer = styled.div<{ percentage: number; color: string }>`
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
    }}
    border-radius: 7px;
    content: "";
    height: 100%;
    width: ${props => props.percentage}%;
  }
`;

const ProgressTextContainer = styled.div<{ taskStatus: string }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Text = styled.div<{ color: string }>`
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
  }}
  font-size: 12px;
`;

export default TaskHeader;
