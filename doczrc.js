import { css } from "docz-plugin-css";

export default {
  plugins: [
    css({
      preprocessor: "postcss"
    })
  ],
  themeConfig: {
    colors: {},
    styles: {},
    logo: {
      src:
        "https://raw.githubusercontent.com/mundizzle/ds/master/assets/logo.svg",
      width: 200
    }
  }
};
