/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'subPara': '#4B5665',
        'subParaLight': '#727D87',
        'blue': '#1B88F4',
        'orange': '#FFF4ED',
        'darkBlue': "#074786",
        'gray': '#F2F4F7',
        'red': '#EF4C5D',
        "sidePara":"#2C384A",
        "grayHeader": "#D1D6DA",
        "grayBorder": "#E1E4E6",
        "yellow": "#FFB80F"
      },
      fontFamily: {
        inter: "Inter",
      }
    }
  },
  plugins: [],
}