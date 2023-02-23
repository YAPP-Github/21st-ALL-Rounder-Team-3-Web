export const enum QUERY_KEY_NAMESPACE {
  PROJECT = "project",
  TASK = "task",
  TASKCONTENT = "taskContent",
  FEEDBACK = "feedback",
}

export const participantKey = {
  project: [QUERY_KEY_NAMESPACE.PROJECT, "participant"] as const,
};

export const taskDetailKey = {
  detail: [QUERY_KEY_NAMESPACE.TASK, "taskDetail"] as const,
  changeInformation: [QUERY_KEY_NAMESPACE.TASK, "changeTaskInformation"] as const,
};

export const taskContentKey = {
  post: [QUERY_KEY_NAMESPACE.TASKCONTENT, "postTaskContent"] as const,
};

export const feedbackKey = {
  list: [QUERY_KEY_NAMESPACE.FEEDBACK, "feedbackList"] as const,
};
