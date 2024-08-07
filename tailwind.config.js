/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          text: '#e0e0e0',
          
        },
      },
    },
  },
  plugins: [],
}
