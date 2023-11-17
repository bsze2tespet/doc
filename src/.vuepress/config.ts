import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  
  base: "/doc",

  lang: "en-US",
  title: "School of Business",
  description: "Digitális tudás vezet a sikerhez.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
