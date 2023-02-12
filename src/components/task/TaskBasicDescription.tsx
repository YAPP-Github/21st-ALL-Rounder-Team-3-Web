import styled from "styled-components";
import Divider from "../common/Divider";
import TaskDescription from "./TaskDescription";
import TaskManagerProfile from "./TaskManagerProfile";
import { useEffect, useState } from "react";
import { formatDate } from "@src/utils/formatDate";

type Props = {
  representativeName: string;
  representativeUrl: string;
  startDate: Date;
  dueDate: Date;
  description: string;
  taskStatus: string;
};

const TaskBasicDescription = ({
  representativeName,
  representativeUrl,
  startDate,
  dueDate,
  description,
  taskStatus,
}: Props) => {
  return (
    <>
      <TaskManagerProfile name={representativeName} imageSource={representativeUrl} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 기간" content={`${formatDate(startDate)} ~ ${formatDate(dueDate)}`} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 내용" content={description} />
    </>
  );
};

export default TaskBasicDescription;
