/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EB5757",

          secondary: "#fc7176",

          accent: "#cece00",

          neutral: "#2A2C37",

          "base-100": "#F1EEF1",

          info: "#5A84D3",

          success: "#2AAC6D",

          warning: "#FAD947",

          error: "#F2546F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
