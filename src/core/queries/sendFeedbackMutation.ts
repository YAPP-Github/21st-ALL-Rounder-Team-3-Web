import { useMutation } from "react-query";
import httpService from "../services/httpService";

const fetchSendFeedback = (taskId: string) => {
  return httpService.post(`/tasks/${taskId}/feedbacks`);
};

const useSendFeedbackMutation = () => {
  return useMutation((taskId: string) => fetchSendFeedback(taskId));
};

export default useSendFeedbackMutation;
