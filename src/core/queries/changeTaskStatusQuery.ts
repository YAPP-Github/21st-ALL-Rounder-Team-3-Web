import { useMutation } from "react-query";
import httpService from "../services/httpService";

type Payload = {
  taskId: string;
  taskStatus: "BEFORE" | "INPROGRESS" | "FEEDBACK" | "DONE" | "LATE";
};

const fetchChangeTaskStatus = ({ taskId, taskStatus }: Payload) => {
  return httpService.patch(`/tasks/${taskId}/status`, { taskId, taskStatus });
};

const useChangeTaskStatusQuery = () => {
  return useMutation((payload: Payload) => fetchChangeTaskStatus(payload));
};

export default useChangeTaskStatusQuery;
