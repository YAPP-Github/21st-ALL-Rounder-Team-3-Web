import { useQuery } from "react-query";
import { TaskStatus } from "../types/type";
import httpService from "../services/httpService";
import { feedbackKey } from "./queryKeys";

export type FeedbackList = {
  evaluations: {
    GOOD: number;
    NOT_ENOUGH: number;
  };
  details: string[];
  templates: {
    id: number;
    count: number;
  }[];
};

const getFeedbackList = async (taskId: string): Promise<FeedbackList> => {
  const { data } = await httpService.get(`/tasks/${taskId}/feedbacks`);
  return data.data;
};

const useFeedbackListQuery = (taskId: string) => {
  return useQuery(feedbackKey.list, () => getFeedbackList(taskId));
};

export default useFeedbackListQuery;
