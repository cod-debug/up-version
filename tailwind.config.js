/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#10C843",
        'primary-2': "#3A8C3A",
        'primary-dark': "#034833",
        'primary-darker': "#408B00",
        'primary-light': "#7AF910",
        'primary-lighter': "#DDF7C7",
        'secondary': "#c7a341",
        'secondary-light': '#48D36D',
        'accent': "#BE9E44",
        'light-gray': "#F4F4F4",
        'gray': "#DADADA",
        'gray-2': "#727272",
        'gray-3': "#7D7D7D",
        'gray-4': "#6A6A6A",
        'gray-5': "#CACACA",
        'gray-6': "#505050",
        'dark-gray':"#595959",
        'dark-gray-2': "#202020",
        'default': "#1E1E1E",
        'black': "#121212"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}