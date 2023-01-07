import { createBrowserRouter } from "react-router-dom";
import { PROJECT_SETTING_URL, TASK_CREATE_URL, TASK_DETAIL_URL, TASK_FEEDBACK_URL } from "./constants/URLConstants";
import TaskDetail from "./pages/TaskDetail";

const router = createBrowserRouter([
  {
    path: TASK_DETAIL_URL,
    element: <TaskDetail />,
  },
  {
    path: TASK_FEEDBACK_URL,
    element: <div>업무 피드백 주기</div>,
  },
  {
    path: TASK_CREATE_URL,
    element: <div>업무 추가</div>,
  },
  {
    path: PROJECT_SETTING_URL,
    element: <div>프로젝트 수정</div>,
  },
]);

export default router;
