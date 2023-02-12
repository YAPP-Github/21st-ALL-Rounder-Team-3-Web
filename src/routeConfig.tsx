import { createBrowserRouter } from "react-router-dom";
import { TASK_CREATE_URL, TASK_DETAIL_URL, TASK_EDIT_URL, TASK_FEEDBACK_URL } from "./constants/URLConstants";
import TaskFeedbackPage from "./pages/TaskFeedbackPage";

const router = createBrowserRouter([
  {
    path: TASK_DETAIL_URL,
    element: <></>,
  },
  {
    path: TASK_FEEDBACK_URL,
    element: <TaskFeedbackPage />,
  },
  {
    path: TASK_CREATE_URL,
    element: <></>,
  },
  {
    path: TASK_EDIT_URL,
    element: <></>,
  },
]);

export default router;
