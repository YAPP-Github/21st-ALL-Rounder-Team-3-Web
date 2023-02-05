import styled from "styled-components";
import Divider from "../common/Divider";
import TaskDescription from "./TaskDescription";
import TaskManagerProfile from "./TaskManagerProfile";
import Input from "../common/Input";
import { useEffect, useRef, useState } from "react";
import BadgeWithDescription from "./BadgeWithDescription";
import DateForm from "../common/DateForm";
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
  const childComponentRef = useRef();

  const [urlTitle, setUrlTitle] = useState<string>("");
  const [urlContent, setUrlContent] = useState<string>("");

  return (
    <>
      <TaskManagerProfile name={representativeName} imageSource={representativeUrl} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 기간" content={`${formatDate(startDate)} ~ ${formatDate(dueDate)}`} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 내용" content={description} />

      {taskStatus === "LATE" || taskStatus === "INPROGRESS" ? (
        <>
          <Divider marginBottom={10} marginTop={10} />
          <TaskDescription title="URL" />
          <Input value={urlTitle} placeholder={"링크 제목을 입력해주세요."} onChange={setUrlTitle} />
          <Margin bottom={10} />
          <Input value={urlContent} placeholder={"완료된 업무 링크를 입력해주세요."} onChange={setUrlContent} />
          <Margin bottom={24} />
          <BadgeWithDescription title={"피드백 요청"} content={"업무를 끝냈다면, 피드백 요청을 보내세요!"} />
        </>
      ) : null}
    </>
  );
};

const Margin = styled.div<{ top?: number; bottom?: number }>`
  margin-top: ${props => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "0px")};
`;

export default TaskBasicDescription;
