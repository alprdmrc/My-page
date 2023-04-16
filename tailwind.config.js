/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      silver: "#F4F4F4",
      cherry: "#E92577",
      cherry2: "#AF0C48",
      black: "#0A0A14",
      grey: "#777777",
      pink: "#EA2678",
      shadow: "#525252",
      coal: "#000000",
      blue: "#DDEEFE",
      green: "#D9F6F1",
      darkblue: "#1769FF",
      ocean: "#0077B5",
      yellow: "#FFE86E",
      darkgrey: "#2A262B",
      lightgrey: "#484148",
      dirtywhite: "#D9D9D9",
      olive: "#495351",
      darkolive: "#2D3235",
      lightblue: "#82BBFF",
      linkedinblue: "#419CCB",
    },
    fontFamily: {
      inter: "Inter",
      playfairDisplay: "Playfair Display",
    },
    container: {
      center: true,
      padding: "6rem",
    },
  },
  plugins: [],
};
