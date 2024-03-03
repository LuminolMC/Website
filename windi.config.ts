import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "media",
  extract: {
    include: ["**/*.{tsx,css}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
  attributify: true,
  plugins: [
    require("windicss/plugin/aspect-ratio")
 ],
 
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "MiSans",
          "Roboto",
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        // luminol-color
        "luminol-color-100": "#FFF8FF",
        "luminol-color-500": "#C7BFE8",
        "luminol-color-600": "#B6ADE6",
        "luminol-color-700": "#938AC4",
        "luminol-color-800": "#8E85BE",
        "background-dark-90": "#111111",
        "background-dark-80": "#181a1b",
        "background-light-10": "#f8faff",
        "background-light-0": "#ffffff",
      },
      listStyleType: {
        alpha: "lower-alpha",
      },
    },
  },
  shortcuts: {},
  
});
