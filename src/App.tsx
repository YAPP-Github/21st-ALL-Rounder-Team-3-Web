import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./routConfig";
import colors from "./styles/colors";

const App = () => {
  return (
    <>
      <ThemeProvider theme={colors}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
