import { BottomSheetProps } from "@src/components/common/BottomSheet";
import { atom } from "recoil";

export const globalBottomSheet = atom<BottomSheetProps | null>({
  key: "globalBottomSheet",
  default: null,
});
