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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Cores do site de exemplo
        background: {
          DEFAULT: 'hsl(222 47% 6%)',
          dark: 'hsl(222 47% 6%)',
        },
        foreground: {
          DEFAULT: 'hsl(210 40% 98%)',
          dark: 'hsl(210 40% 98%)',
        },
        primary: {
          DEFAULT: 'hsl(199 89% 48%)',
          dark: 'hsl(199 89% 48%)',
          hover: 'hsl(199 89% 45%)',
        },
        secondary: {
          DEFAULT: 'hsl(217 33% 17%)',
          dark: 'hsl(217 33% 17%)',
        },
        muted: {
          DEFAULT: 'hsl(217 33% 17%)',
          foreground: 'hsl(215 20% 65%)',
        },
        card: {
          DEFAULT: 'hsl(222 47% 9%)',
          dark: 'hsl(222 47% 9%)',
        },
        border: {
          DEFAULT: 'hsl(217 33% 17%)',
          dark: 'hsl(217 33% 17%)',
        },
        // Manter cores de skills existentes
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
