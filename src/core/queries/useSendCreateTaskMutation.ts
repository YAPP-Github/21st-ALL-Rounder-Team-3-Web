import { useMutation } from "react-query";
import httpService from "../services/httpService";

type Payload = {
  projectId: string;
  participantId: number;
  title: string;
  startDate: string;
  dueDate: string;
  memo: string;
  taskStatus: string;
};

const sendCreateTask = ({ projectId, ...payload }: Payload) => {
  return httpService.post(`/projects/${projectId}/tasks`, { ...payload });
};

const useSendCreateTaskMutation = () => {
  return useMutation((payload: Payload) => sendCreateTask(payload));
};

export default useSendCreateTaskMutation;
