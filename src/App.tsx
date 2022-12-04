import { RouterProvider } from "react-router-dom";
import router from "./routConfig";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
