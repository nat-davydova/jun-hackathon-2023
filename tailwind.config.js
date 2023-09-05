/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./view/*.pug", "./view/*/*.pug"],
  theme: {
    extend: {
      colors: {
        "hbeige": "#FFF6E9",
        "hgreen": "#31C9A8",
        "horange": "#FECBBA",
        "hyellow": "#FCC953"
      }
    },
  },
  plugins: [],
}

