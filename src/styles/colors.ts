export type ThemeColors = {
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  };
  primaryPurple: {
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

const colors: ThemeColors = {
  gray: {
    100: "#FAFAFA",
    200: "#F4F4F4",
    300: "#EDEDED",
    400: "#CCCCCC",
    500: "#999999",
    600: "#555555",
    700: "#333333",
  },
  primaryPurple: {
    100: "#F1EBFF",
    200: "#D4CFFC",
    300: "#B8B1F9",
    400: "#9C95F7",
    500: "#8075F9",
  },
  sub: {
    100: "#F1FAF7",
    300: "#C6EBE1",
    500: "#1AC694",
  },
  black: "#000000",
  white: "#FFFFFF",
  error: "#F4693D",
};

export default colors;
