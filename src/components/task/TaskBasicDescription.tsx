import styled from "styled-components";
import Divider from "../common/Divider";
import TaskDescription from "./TaskDescription";
import TaskManagerProfile from "./TaskManagerProfile";

type Props = {
  representativeName: string;
  representativeUrl: string;
  startDate: string;
  dueDate: string;
  description: string;
  urlList: { description: string; url: string }[];
};

const TaskBasicDescription = ({
  representativeName,
  representativeUrl,
  startDate,
  dueDate,
  description,
  urlList,
}: Props) => {
  return (
    <>
      <TaskManagerProfile name={representativeName} imageSource={representativeUrl} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 기간" content={`${startDate} ~ ${dueDate}`} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="업무 설명" content={description} />
      <Divider marginBottom={10} marginTop={10} />
      <TaskDescription title="URL" content={urlList[0].url} />
    </>
  );
};

export default TaskBasicDescription;
