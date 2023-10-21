/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./view/*.pug", "./templates/*/*.pug"],
  theme: {
    extend: {
      colors: {
        "hbeige-1": "#FFF6E9",
        "hbeige-2": "#FFF6E9",
        "hgreen": "#31C9A8",
        "horange-1": "#FD5C37",
        "horange-2": "#FECBBA",
        "horange-hover": "#FF9C37",
        "hyellow": "#FCC953",
        "hblue": "#341C77",
        "hgrey-1": "#474446",
        "hgrey-2": "#312F30",
        "hgrey-3": "#E1DFE8",
        "hgrey-4": "#8C8989",
        "hgreen": "#31C9A8",
        "hyellow": "#FCC953",
        "hcyan": "#B2EAEE"
      }
    },
  },
  plugins: [],
}

