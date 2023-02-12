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
  let start = cookieData.indexOf(`${cookieName}=`);
  let value = "";

  if (start !== -1) {
    start += cookieName.length + 1;
    let end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    value = cookieData.substring(start, end);
  }

  return value;
};

const App = () => {
  const [bottomSheet] = useRecoilState(globalBottomSheet);
  const accessToken = getCookie("access_token");

  useEffect(() => {
    // TODO: bridge 코드로 access token 가져오기
    const accessToken = getCookie("access_token");
    console.log("!", accessToken);

    httpService.setAccessToken(accessToken);
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
