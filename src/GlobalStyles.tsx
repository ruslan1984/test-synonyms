import React from "react";
import { Global, css } from "@emotion/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export const GlobalStyles = (): ReactJSXElement => (
  <Global
    styles={css`
      @font-face {
        font-family: "Circe";
        src: local("Circe"),
          url("src/assets/fonts/Circe-Regular.ttf") format("ttf"),
          url("src/assets/fonts/Circe-Regular.woff") format("woff"),
          url("src/assets/fonts/Circe-Regular.eot") format("eot");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Circe";
        src: local("Circe"),
          url("src/assets/fonts/Circe-Bold.ttf") format("ttf"),
          url("src/assets/fonts/Circe-Bold.woff") format("woff"),
          url("src/assets/fonts/Circe-Bold.eot") format("eot");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Circe";
        src: local("Circe"),
          url("src/assets/fonts/Circe-ExtraBold.ttf") format("ttf"),
          url("src/assets/fonts/Circe-ExtraBold.woff") format("woff"),
          url("src/assets/fonts/Circe-ExtraBold.eot") format("eot");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Circe";
        src: local("Circe"),
          url("src/assets/fonts/Circe-Light.ttf") format("ttf"),
          url("src/assets/fonts/Circe-Light.woff") format("woff"),
          url("src/assets/fonts/Circe-Light.eot") format("eot");
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: "Circe";
        src: local("Circe"),
          url("src/assets/fonts/Circe-ExtraLight.ttf") format("ttf"),
          url("src/assets/fonts/Circe-ExtraLight.woff") format("woff"),
          url("src/assets/fonts/Circe-ExtraLight.eot") format("eot");
        font-weight: 200;
        font-style: normal;
      }

      @font-face {
        font-family: "Circe";
        src: local("Circe"),
          url("src/assets/fonts/Circe-Thin.ttf") format("ttf"),
          url("src/assets/fonts/Circe-Thin.woff") format("woff"),
          url("src/assets/fonts/Circe-Thin.eot") format("eot");
        font-weight: 100;
        font-style: normal;
      }

      body {
        padding: 0;
        margin: 0;
        font-family: "Circe";
      }
    `}
  />
);

export default GlobalStyles;
