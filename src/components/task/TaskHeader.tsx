import React from "react";
import styled from "styled-components";
import Badge from "../common/Badge";

const startDate = "2022/12/02";
const endDate = "2022/12/09";

const getProgressPercentage = (startDate: string, endDate: string) => {
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const todayTime = new Date().getTime();

  return ((todayTime - startTime) / (endTime - startTime)) * 100;
};

const getDateLeft = (endDate: string) => {
  const endTime = new Date(endDate).getTime();
  const todayTime = new Date().getTime();

  const timeDifference = endTime - todayTime;
  const leftDays = new Date(Math.abs(timeDifference)).getDate() - 1;

  if (timeDifference > 0) return `D-${leftDays}`;
  return `D+${leftDays}`;
};

const BEFORE_PROGRESS = 0;
const IN_PROGRESS = 1;
const AFTER_PROGRESS = 2;

const getProgressStatus = (percentage: number) => {
  if (percentage <= 0) return BEFORE_PROGRESS;
  if (percentage < 100) return IN_PROGRESS;

  return AFTER_PROGRESS;
};

const getProgressStatusMessage = (progressStatus: number) => {
  if (progressStatus === 0) return "아직 업무 시작 전이에요";
  if (progressStatus === 1) return "으쌰으쌰 진행중이에요🔥";
  return "업무 완료했어요 🎉";
};

const getBadgeMessage = (progressStatus: number) => {
  return "진행중";
};

const TaskHeader = () => {
  const percentage = getProgressPercentage(startDate, endDate);
  const dateLeft = getDateLeft(endDate);
  const progressStatus = getProgressStatus(percentage);
  const progressStatusMessage = getProgressStatusMessage(progressStatus);
  const badgeMessage = getBadgeMessage(progressStatus);
  return (
    <Wrapper>
      <Badge value={badgeMessage} color="gray" />
      <Title>DBPia, RISS 논문 리서치</Title>
      <ProgressContainer percentage={percentage}></ProgressContainer>
      <ProgressTextContainer>
        <Text>{progressStatusMessage}</Text>
        <Text>{dateLeft}</Text>
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

const ProgressContainer = styled.div<{ percentage: number }>`
  background-color: #f4f4f4;
  width: 100%;
  height: 8px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;

  &::before {
    top: 0;
    left: 0;
    position: absolute;
    background-color: #8075f9;
    border-radius: 7px;
    content: "";
    height: 100%;
    width: ${props => props.percentage}%;
  }
`;

const ProgressTextContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Text = styled.div`
  color: #8075f9;
  font-size: 12px;
`;

export default TaskHeader;
