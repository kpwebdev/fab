/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  prefix: "t-",
  theme: {
    extend: {
      colors: {
        "f-success": {
          10: "#0F241A",
          20: "#1F4734",
          30: "#2E6B4F",
          40: "#3D8F69",
          50: "#4DB283",
          60: "#70C29C",
          70: "#94D1B5",
          80: "#B8E0CD",
          90: "#DBF0E6",
          95: "#EDF7F3",
          98: "#F8FCFA",
          99: "#FBFDFD",
        },
        "f-warning": {
          10: "#241F0F",
          20: "#473D1F",
          30: "#6B5C2E",
          40: "#8F7A3D",
          50: "#B2994D",
          60: "#C2AD70",
          70: "#D1C294",
          80: "#E0D6B8",
          90: "#F0EBDB",
          95: "#F7F5ED",
          98: "#FCFBF8",
          99: "#FDFDFB",
        },
        "f-danger": {
          10: "#240F0F",
          20: "#471F1F",
          30: "#6B2E2E",
          40: "#8F3D3D",
          50: "#B24D4D",
          60: "#C27070",
          70: "#D19494",
          80: "#E0B8B8",
          90: "#F0DBDB",
          95: "#F7EDED",
          98: "#FCF8F8",
          99: "#FDFBFB",
        },
        "f-primary": {
          10: "#06162D",
          20: "#0D2D59",
          30: "#134386",
          40: "#1A59B2",
          50: "#206FDF",
          60: "#4D8CE5",
          70: "#79A9EC",
          80: "#A6C6F2",
          90: "#D2E2F9",
          95: "#E9F1FC",
          98: "#F6F9FE",
          99: "#FBFCFE",
        },
        "f-secondary": {
          10: "#332800",
          20: "#665000",
          30: "#997800",
          40: "#CCA000",
          50: "#FFC800",
          60: "#FFD333",
          70: "#FFDE66",
          80: "#FFE999",
          90: "#FFF4CC",
          95: "#FFF9E5",
          98: "#FFFDF5",
          99: "#FFFEFA",
        },
        "f-accent": {
          10: "#092A0E",
          20: "#12541D",
          30: "#1B7E2B",
          40: "#24A83A",
          50: "#2DD248",
          60: "#57DB6D",
          70: "#81E491",
          80: "#ABEDB6",
          90: "#D5F6DA",
          95: "#EAFBED",
          98: "#F7FDF8",
          99: "#FBFEFB",
        },
        "f-gray": {
          10: "#17191C",
          20: "#2E3238",
          30: "#454B54",
          40: "#5C6470",
          50: "#737D8C",
          60: "#8F97A3",
          70: "#ABB1BA",
          80: "#C7CBD1",
          90: "#E3E5E8",
          95: "#F1F2F4",
          98: "#F9FAFA",
          99: "#FCFCFD",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "f-xs": ["12px", "1.5em"],
        "f-sm": ["14px", "1.5em"],
        "f-base": ["18px", "1.5em"],
        "f-md": ["22px", "1.1em"],
        "f-l": ["28px", "1.1em"],
        "f-xl": ["34px", "1.1em"],
        "f-2xl": ["44px", "1.1em"],
        "f-3xl": ["54px", "1.1em"],
        "f-4xl": ["68px", "1.1em"],
      },
    },
  },
  plugins: [],
};
