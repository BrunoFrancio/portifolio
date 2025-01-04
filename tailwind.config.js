/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        skills: {
          php: '#777bb4',
          laravel: '#ff2d20',
          csharp: '#68217a',
          mysql: '#4479a1',
          microsoftsqlserver: '#cc2927',
          git: '#f34f29',
          docker: '#2496ed',
          javascript: '#f7df1e',
          nextdotjs: '#000000',
          tailwindcss: '#06b6d4',
        },
      },
    },
  },
  plugins: [],
};
