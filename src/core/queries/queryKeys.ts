export const enum QUERY_KEY_NAMESPACE {
  PROJECT = "project",
  TASK = "task",
  FEEDBACK = "feedback",
}

export const participantKey = {
  get: [QUERY_KEY_NAMESPACE.PROJECT, "participant"] as const,
};

export const taskDetailKey = {
  detail: [QUERY_KEY_NAMESPACE.TASK, "taskDetail"] as const,
};

export const feedbackKey = {
  list: [QUERY_KEY_NAMESPACE.FEEDBACK, "feedbackList"] as const,
};
