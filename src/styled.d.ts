import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
      };
      main: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      sub: {
        100: string;
        300: string;
        500: string;
      };
      black: string;
      white: string;
      error: string;
    };
  }
}
