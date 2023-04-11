/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        charlestonGreen: "#2b2b2b",
        magnolia: "#F4EDFF",
        grayX11: "#bcbcbc",
        darkSilver: "#707070",
        deepViolet: "#300370",
        cultured: "#F5F5F5",
        cambridgeBlue: "#A3BEB0",
        chineseBlack: "#171717",
        chineseSilver: "#191919",
        eerieBlack: "#1d1d1d",
        raisinBlack: "#222222",
        arsenic: "#434343",
        jet: "#343434",
        quickSilver: "#A5A5A5",
        persianIndigo: "#2F0C71",
        manatee: "#858a99",
        scorpion: "#606060",
        carrara: "#f1f0ed",
      },
    },
  },
  plugins: [],
};
