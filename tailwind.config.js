/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Adding custom scrollbar styles
      scrollbar: {
        'thin': '1px', // thin scrollbar
        'thumb-rounded': 'rounded', // rounded scrollbar thumb
        'thumb-transparent': 'bg-transparent', // transparent thumb by default
        'hover:thumb-gray-500': 'hover:bg-gray-500', // visible thumb color on hover
      },
    },
  },
  variants: {
    scrollbar: ['rounded', 'hover'], // enable rounded scrollbar thumb and hover effect
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // to hide the scrollbar by default
    require('tailwind-scrollbar'), // to style the scrollbar when visible
  ],
}