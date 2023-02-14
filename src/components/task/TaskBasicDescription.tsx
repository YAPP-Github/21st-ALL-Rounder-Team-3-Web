import styled from "styled-components";
import Divider from "../common/Divider";
import TaskDescription from "./TaskDescription";
import TaskManagerProfile from "./TaskManagerProfile";
import formatDate from "@src/utils/formatDate";
import { TaskDetail } from "@src/core/queries/useTaskDetailQuery";

type Props = {
  data: TaskDetail | undefined;
};

const TaskBasicDescription = ({ data }: Props) => {
  const formattedStartDate = formatDate(new Date(data?.startDate || new Date()));
  const formattedDueDate = formatDate(new Date(data?.dueDate || new Date()));
  return (
    <>
      <TaskManagerProfile name={data?.representative.name} imageSource={data?.representative.imageUrl} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 기간" content={`${formattedStartDate} ~ ${formattedDueDate}`} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 내용" content={data?.memo} />
    </>
  );
};

export default TaskBasicDescription;
