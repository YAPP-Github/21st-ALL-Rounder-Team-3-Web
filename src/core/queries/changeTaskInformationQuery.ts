import { useMutation } from "react-query";
import httpService from "../services/httpService";

type Payload = {
  taskId: string;
  taskInformation: TaskInformation;
};

type TaskInformation = {
  taskId: number;
  title: string;
  startDate: string;
  dueDate: string;
  memo: string;
  taskStatus: "BEFORE" | "INPROGRESS" | "FEEDBACK" | "DONE";
};

const fetchChangeTaskInformation = ({ taskId, taskInformation }: Payload) => {
  return httpService.put(`/tasks/${taskId}`, taskInformation);
};

const useChangeTaskInformationQuery = () => {
  return useMutation((payload: Payload) => fetchChangeTaskInformation(payload));
};

export default useChangeTaskInformationQuery;
