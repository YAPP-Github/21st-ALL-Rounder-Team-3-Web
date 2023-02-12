import styled from "styled-components";
import Divider from "../common/Divider";
import TaskDescription from "./TaskDescription";
import TaskManagerProfile from "./TaskManagerProfile";
import Input from "../common/Input";
import { useEffect, useState } from "react";
import BadgeWithDescription from "./BadgeWithDescription";
import FixedBottomButtonLayout from "../layout/FixedBottomButtonLayout";

type Props = {
  representativeName: string;
  representativeUrl: string;
  startDate: Date;
  dueDate: Date;
  description: string;
  taskStatus: string;
};

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    weekday: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

const TaskBasicDescription = ({
  representativeName,
  representativeUrl,
  startDate,
  dueDate,
  description,
  taskStatus,
}: Props) => {
  const [urlTitle, setUrlTitle] = useState<string>("");
  const [urlContent, setUrlContent] = useState<string>("");

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

const Margin = styled.div<{ top?: number; bottom?: number }>`
  margin-top: ${props => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

export default TaskBasicDescription;
