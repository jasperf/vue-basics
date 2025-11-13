/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#00695c', // teal darken-4
        'teal-secondary': '#00897b', // teal darken-2
        'teal-light': '#e0f2f1', // teal lighten-5
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        concrete: {
          "primary": "#00897b", // teal
          "secondary": "#00695c", // teal dark
          "accent": "#e0f2f1", // teal light
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5", // grey lighten-4
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
