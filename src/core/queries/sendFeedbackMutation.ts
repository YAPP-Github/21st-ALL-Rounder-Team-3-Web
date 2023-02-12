import { useMutation } from "react-query";
import httpService from "../services/httpService";

type Payload = {
  taskId: string;
  checkList: number[];
  detail: string;
};

const fetchSendFeedback = ({ taskId, checkList, detail }: Payload) => {
  return httpService.post(`/tasks/${taskId}/feedbacks`, { checkList, detail });
};

const useSendFeedbackMutation = () => {
  return useMutation((payload: Payload) => fetchSendFeedback(payload));
};

export default useSendFeedbackMutation;
