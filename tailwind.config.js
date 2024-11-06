/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import themes from "./src/themes";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: themes,
    darkTheme: 'dark'
  },
  
};
