import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import httpService from "../services/httpService";
import { participantKey } from "./queryKeys";

type ParticipantItem = {
  id: number;
  name: string;
  imageUrl: string;
  leader: boolean;
};

const getParticipant = async (projectId: string): Promise<ParticipantItem[]> => {
  const { data } = await httpService.get(`/projects/${projectId}/participants`);

  return data.data;
};

const useParticipantsQuery = (projectId: string) => {
  return useQuery(participantKey.project, () => getParticipant(projectId));
};

export default useParticipantsQuery;
