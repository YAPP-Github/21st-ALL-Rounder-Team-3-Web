import { useQuery } from "react-query";
import { TaskStatus } from "../types/type";
import httpService from "../services/httpService";
import { taskDetailKey } from "./queryKeys";

export type TaskDetail = {
  id: number;
  representative: {
    participantId: number;
    name: string;
    imageUrl: string;
  };
  title: string;
  startDate: string;
  dueDate: string;
  memo: string;
  taskStatus: TaskStatus;
  confirmCount: number;
  participantCount: number;
  feedbackRequestedDate: string;
  perfectCount: number;
  taskContents: [
    {
      taskContentId: number;
      title: string;
      url: string;
    },
  ];
};

const getTaskDetail = async (taskId: string): Promise<TaskDetail> => {
  const { data } = await httpService.get(`/tasks/${taskId}`);
  return data.data;
};

const useTaskDetailQuery = (taskId: string) => {
  return useQuery(taskDetailKey.detail, () => getTaskDetail(taskId));
};

export default useTaskDetailQuery;
