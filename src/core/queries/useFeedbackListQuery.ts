import { useQuery } from "react-query";
import { TaskStatus } from "../types/type";
import httpService from "../services/httpService";
import { feedbackKey } from "./queryKeys";

export type FeedbackList = {
  details: string[];
  templates: string[];
};

const getFeedbackList = async (taskId: string): Promise<FeedbackList> => {
  const { data } = await httpService.get(`/tasks/${taskId}/feedbacks`);
  return data.data;
};

const useFeedbackListQuery = (taskId: string) => {
  return useQuery(feedbackKey.list, () => getFeedbackList(taskId));
};

export default useFeedbackListQuery;
