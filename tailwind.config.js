/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue"],
      serif: ["Times", "serif"],
    },
    container: {
      center: true,
      padding: "12px",
    },
    fontSize: {
      base: [
        "16px",
        {
          lineHeight: "20px",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "20px",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "40px",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "54px",
        },
      ],
      "6xxl": [
        "64px",
        {
          lineHeight: "96px",
        },
      ],
    },
    spacing: {
      0.192: "-89px",
      0.4: "-20px",
      0.12: "-12px",
      0.1: "-1px",
      0: "0px",
      1: "5px",
      1.75: "8px",
      2: "10px",
      2.15: "12px",
      2.25: "12.5px",
      3: "15px",
      3.5: "16px",
      3.75: "18px",
      4: "20px",
      4.75: "24px",
      5: "25px",
      6: "30px",
      7: "35px",
      8: "40px",
      9: "45px",
      10: "50px",
      11: "55px",
      12: "60px",
      13: "65px",
      14: "70px",
      16: "80px",
      18: "90px",
      19: "95px",
      21: "105px",
      24.5: "124px",
    },
    extend: {
      colors: {
        dessert: {
          first: "#EAF0ED",
          DEFAULT: "#3F5D45",
          second: "#8DA291",
          third: "#FFE180",
        },
      },
      fontFamily: {
        TC: ['"Noto Sans TC"', "sans-serif"],
        EN: ['"Roboto"', "sans-serif"],
      },
      spacing: {
        74: "296px",
      },
      boxShadow: {
        "2xl": "0px 0px 0px 1px #fff",
        "3xl": "0px 0px 0px 1px #3F5D45;",
      },
    },
    screens: {
      md: "768px",
      lg: "992px",
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "940px",
          },
        },
      });
    },
  ],
};
