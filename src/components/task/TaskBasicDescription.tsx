import styled from "styled-components";
import Divider from "../common/Divider";
import TaskDescription from "./TaskDescription";
import TaskManagerProfile from "./TaskManagerProfile";
import dayjs from "dayjs";

const dayMap = ["일", "월", "화", "수", "목", "금", "토"];

type Props = {
  representativeName: string;
  representativeUrl: string;
  startDate: Date;
  dueDate: Date;
  description: string;
};

const getDayInKorean = (date: Date) => {
  const formattedDate = dayjs(date).format("YYYY.MM.DD").toString();
  const dayOfWeekInKorean = dayMap[Number(dayjs(date).format("d"))];
  return formattedDate + " (" + dayOfWeekInKorean + ")";
};

const TaskBasicDescription = ({ representativeName, representativeUrl, startDate, dueDate, description }: Props) => {
  const startDateFormatted = getDayInKorean(startDate);
  const endDateFormatted = getDayInKorean(dueDate);
  return (
    <>
      <TaskManagerProfile name={representativeName} imageSource={representativeUrl} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 기간" content={`${startDateFormatted} ~ ${endDateFormatted}`} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 내용" content={description} />
    </>
  );
};

export default TaskBasicDescription;
