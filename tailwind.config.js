/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'roboto': ['Roboto', 'sans'],
        'prompt': ['Prompt', 'sans'],
      },
    },
  },
  plugins: [require("daisyui")],
}

