/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "rgb(var(--color-brown) / <alpha-value>)",
      lightBrown: "rgb(var(--color-lightBrown) / <alpha-value>)",
      darkBrown: "rgb(var(--color-darkBrown) / <alpha-value>)",
      black: "rgb(var(--color-black) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      cyan: "rgb(var(--color-cyan) / <alpha-value>)",
      lightCyan: "rgb(var(--color-lightCyan) / <alpha-value>)",
      darkCyan: "rgb(var(--color-darkCyan) / <alpha-value>)",
      orange: "rgb(var(--color-orange) / <alpha-value>)",
      lightOrange: "rgb(var(--color-lightOrange) / <alpha-value>)",
      darkOrange: "rgb(var(--color-darkOrange) / <alpha-value>)",
      grey: "rgb(var(--color-grey) / <alpha-value>)",
      lightGrey: "rgb(var(--color-lightGrey) / <alpha-value>)",
      darkGrey: "rgb(var(--color-darkGrey) / <alpha-value>)",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgb(var(--color-cyan) / 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgb(var(--color-cyan) / 0.3)",
        cyanMediumShadow:
          "10px 10px 200px 150px rgb(var(--color-cyan) / 0.5)",
        orangeBigShadow:
          "10px 10px 10000px 500px rgb(var(--color-orange) / 0.3)",
        orangeMediumShadow:
          "10px 10px 2000px 150px rgb(var(--color-orange) / 0.5)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-slow": "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
