/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '641px',
      // => @media (min-width: 641px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1025px) { ... }
      // 'xlg': '1281px',
      // // => @media (min-width: 1281px) { ... }
    },
    


    extend: {

      colors: {
        'svelte': '#FF3E00'
      }
    }
  },
  plugins: []
};