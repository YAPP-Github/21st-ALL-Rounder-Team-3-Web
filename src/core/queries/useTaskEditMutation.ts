import { useMutation } from "react-query";
import httpService from "../services/httpService";

type Payload = {
  taskId: string;
  participantId: number;
  title: string;
  startDate: string;
  dueDate: string;
  memo: string;
};

const taskEdit = ({ taskId, ...payload }: Payload) => {
  return httpService.put(`/tasks/${taskId}`, { taskId, ...payload });
};

const useTaskEditMutation = () => {
  return useMutation((payload: Payload) => taskEdit(payload));
};

export default useTaskEditMutation;
