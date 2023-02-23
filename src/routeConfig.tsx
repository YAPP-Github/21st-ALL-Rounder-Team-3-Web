import { createBrowserRouter } from "react-router-dom";
import {
  TASK_CREATE_URL,
  TASK_DETAIL_URL,
  MY_TASK_DETAIL_URL,
  TASK_EDIT_URL,
  TASK_FEEDBACK_URL,
} from "./constants/URLConstants";
import MyTaskDetailPage from "./pages/MyTaskDetailPage";
import OthersTaskDetailPage from "./pages/OthersTaskDetailPage";
import TaskCreatePage from "./pages/TaskCreatePage";
import TaskEditPage from "./pages/TaskEditPage";
import TaskFeedbackPage from "./pages/TaskFeedbackPage";

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
    element: <TaskFeedbackPage />,
  },
  {
    path: TASK_CREATE_URL,
    element: <TaskCreatePage />,
  },
  {
    path: TASK_EDIT_URL,
    element: <TaskEditPage />,
  },
]);

export default router;
