/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Fox grid
        'fox': 'repeat(auto-fit, minmax(320px, 1fr))',
      }
    },
  },
  plugins: [],
}

