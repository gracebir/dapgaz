/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'bgBright':"var(--color-bright-red)",
        'bgDarkBlue': "var(--color-very-dark-blue)",
        'bgLightGray': "var(--color-light-gray)",
        'bgPalered': 'var(--color-very-pale-red)'
      },
      colors:{
        'clGrayish': 'var(--color-dark-grayish)',
        'clDarkBlue': 'var(--color-dark-blue)',
        'clVdarkBlue': 'var(--color-very-dark-blue)',
        'clLightGray': 'var(--color-light-gray)'
      },
      backgroundImage:{
        'bgHero':"url('https://res.cloudinary.com/dnzidlufh/image/upload/v1680855593/hero_k1ivox.png')"
      },
    },
  },
  plugins: [],
}

