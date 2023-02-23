import { useMutation } from "react-query";
import httpService from "../services/httpService";

type Payload = {
  taskId: string;
  evaluation: "GOOD" | "NOT_ENOUGH";
  checkList: number[];
  detail: string;
};

const fetchSendFeedback = ({ taskId, evaluation, checkList, detail }: Payload) => {
  return httpService.post(`/tasks/${taskId}/feedbacks`, { evaluation, checkList, detail });
};

const useSendFeedbackMutation = () => {
  return useMutation((payload: Payload) => fetchSendFeedback(payload));
};

export default useSendFeedbackMutation;
