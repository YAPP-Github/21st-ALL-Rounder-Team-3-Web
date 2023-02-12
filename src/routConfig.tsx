import { createBrowserRouter } from "react-router-dom";
import {
  MY_TASK_DETAIL_URL,
  PROJECT_SETTING_URL,
  TASK_CREATE_URL,
  TASK_DETAIL_URL,
  TASK_FEEDBACK_URL,
} from "./constants/URLConstants";
import MyTaskDetailPage from "./pages/MyTaskDetailPage";
import OthersTaskDetailPage from "./pages/OthersTaskDetailPage";

const router = createBrowserRouter([
  {
    path: TASK_DETAIL_URL,
    element: <OthersTaskDetailPage />,
  },
  {
    path: MY_TASK_DETAIL_URL,
    element: <MyTaskDetailPage />,
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
