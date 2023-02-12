/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.5s ease-out .7s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
    },
    colors: {
      darknavy: "#020c1a",
      navy: "#0a192e",
      lightnavy: "#112242",
      lightestnavy: "#233553",
      navyshadow: "rgba(2,12,27,0.6)",
      darkslate: "#495470",
      slate: "#8782b0",
      lightslate: "#a8b2d1",
      lightestslate: "#ccd6f6",
      white: "#e6f1ff",
      green: "#64efdb",
      greentint: "rgba(100,255,218,0.3)",
      pink: "#f57def",
      blue: "#57caef",
      cherry: '#CC3B50',
    },
  },
  plugins: [],
};
