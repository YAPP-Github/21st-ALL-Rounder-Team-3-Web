import "styled-components";
import { ThemeColors } from "./styles/colors";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}
