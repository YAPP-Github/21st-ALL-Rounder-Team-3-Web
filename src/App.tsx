import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import colors from "./styles/colors";
import { useRecoilState } from "recoil";
import BottomSheet from "./components/common/BottomSheet";
import { globalBottomSheet } from "./core/atoms/atoms";
import router from "./routeConfig";
import { useEffect } from "react";
import httpService from "./core/services/httpService";

const App = () => {
  const [bottomSheet] = useRecoilState(globalBottomSheet);

  useEffect(() => {
    // TODO: bridge 코드로 access token 가져오기
    // httpService.setAccessToken();
  }, []);

  return (
    <>
      <ThemeProvider theme={colors}>
        <RouterProvider router={router} />
        {bottomSheet && <BottomSheet {...bottomSheet} />}
      </ThemeProvider>
    </>
  );
};

export default App;
