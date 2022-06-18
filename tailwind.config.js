/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      'black': '#111213',
      'slate': '#212224',
      'grey': '#a1a1a1',
      'light-grey': '#E4E4E4',
      'white': '#ffffff',
      'offWhite': '#E0E1E4',
      'cyan': '#29b9f0',
      'orange': '#FF4822'
    },
    extend: {},
  },
  plugins: [],
}
