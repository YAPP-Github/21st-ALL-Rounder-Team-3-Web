import { createGlobalStyle } from "styled-components";
import NotoSans from "../assets/fonts/NotoSans-Medium.woff";
import NotoSansKR from "../assets/fonts/NotoSansKR-Medium.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NotoSans";
    font-weight: normal;
    src: url(${NotoSans}) ;
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: normal;
    /* unicode-range is korean and number */
    unicode-range: U+AC00-D7A3, U+0030-0039;
    src: url(${NotoSansKR}) format("woff2");
  }

  body {
    &::-webkit-scrollbar {
      display: none;
    }
    
    scrollbar-width: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  button,
  input,
  textarea {
    outline: none;
    background: none;
    border: none;
  }
  button {
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  img {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
