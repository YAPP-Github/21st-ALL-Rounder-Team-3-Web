import { RouterProvider } from "react-router-dom";
import colors from "./styles/colors";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import BottomSheet from "./components/common/BottomSheet";
import { globalBottomSheet } from "./core/atoms/atoms";
import httpService from "./core/services/httpService";
import router from "./routeConfig";

const App = () => {
  const [bottomSheet] = useRecoilState(globalBottomSheet);

  httpService.setAccessToken(
    "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNmU0NjY1Mi05ZjA3LTQ2OGEtOTFiZS02YmViYWNhMzg1ZWUiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY3NTY3MjQ2MH0.SpfSBRHRQn1zYmuJrNm2pCbr20YjPohlrVA0D9SB5KY",
  );
  httpService.get("/members");

  if (window.Android) {
    window.Android.showToast("테스트 입니다.");
  }

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
