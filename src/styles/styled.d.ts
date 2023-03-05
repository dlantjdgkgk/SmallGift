import { ColorsTypes } from "./constants/colors";
import { FontsTypes } from "./constants/fonts";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}
