import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import colors from "./styles/colors";
import { useRecoilState } from "recoil";
import BottomSheet from "./components/common/BottomSheet";
import { globalBottomSheet } from "./core/atoms/atoms";
import router from "./routeConfig";
import { useEffect } from "react";
import httpService from "./core/services/httpService";

const getCookie = (cookieName: string) => {
  const cookieData = document.cookie;
  const findCookie = cookieData.indexOf(`${cookieName}=`) !== -1;

  if (findCookie) {
    const startIndex = cookieData.indexOf(`${cookieName}=`) + cookieName.length + 1;
    const endIndex =
      cookieData.indexOf(";", startIndex) !== -1 ? cookieData.indexOf(";", startIndex) : cookieData.length;

    return cookieData.substring(startIndex, endIndex);
  }

  return;
};

const App = () => {
  const [bottomSheet] = useRecoilState(globalBottomSheet);
  const accessToken = getCookie("access_token");

  useEffect(() => {
    if (accessToken) {
      httpService.setAccessToken(accessToken);
    } else {
      console.error("cookie does not contain access_token");
    }
  }, [document.cookie, accessToken]);

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
