import { useMutation } from "react-query";
import httpService from "../services/httpService";

export type TaskContent = {
  taskId: string;
  title: string;
  url: string;
};

const fetchSendTaskContent = async ({ taskId, title, url }: TaskContent) => {
  return httpService.post(`/tasks/${taskId}/taskContents`, { title, url });
};

const useSendTaskContentMutation = () => {
  return useMutation((taskContent: TaskContent) => fetchSendTaskContent(taskContent));
};

export default useSendTaskContentMutation;
