/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          charcoal: '#0A0A0B',
          gray: '#1C1C1E',
        },
        steel: {
          border: '#2C2C2E',
        },
        safety: {
          orange: '#FF5F1F',
        },
        electric: {
          blue: '#007BFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
