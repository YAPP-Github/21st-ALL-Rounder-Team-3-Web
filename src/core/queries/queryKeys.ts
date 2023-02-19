export const enum QUERY_KEY_NAMESPACE {
  PROJECT = "project",
  TASK = "task",
}

export const participantKey = {
  project: [QUERY_KEY_NAMESPACE.PROJECT, "participant"] as const,
};
