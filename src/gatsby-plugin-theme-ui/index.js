import codeTheme from "@theme-ui/prism/presets/night-owl-light.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#222222",
    muted: "#666666",
    primary: "#FC4A1A",
    secondary: "#000",
    success: "#000",
    background: "#ffffff",
    surface: "#f3f3f3",
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit",
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
    },
  },
};
