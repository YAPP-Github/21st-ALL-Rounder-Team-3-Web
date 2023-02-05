import { BottomSheetProps } from "@src/components/common/BottomSheet";
import { useRecoilState } from "recoil";
import { globalBottomSheet } from "../atoms/atoms";

const useBottomSheet = () => {
  const [_, setBottomSheet] = useRecoilState(globalBottomSheet);

  const openBottomSheet = ({ title, description, content, button, onClose }: BottomSheetProps) => {
    setBottomSheet({ title, description, content, button, onClose });
  };

  const closeBottomSheet = () => {
    setBottomSheet(null);
  };

  return { openBottomSheet, closeBottomSheet };
};

export default useBottomSheet;
