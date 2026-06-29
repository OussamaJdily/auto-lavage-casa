/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        arabic: ['"Tajawal"', '"Cairo"', 'system-ui', 'sans-serif']
      },
      colors: {
        carbon: {
          950: '#050507',
          900: '#0a0a0d',
          800: '#101015',
          700: '#16161d',
          600: '#1d1d26',
          500: '#26262f'
        },
        metallic: {
          100: '#f4f6f8',
          200: '#d8dde3',
          300: '#a8b0bb',
          400: '#7c8593',
          500: '#5a6371',
          600: '#3f4754'
        },
        electric: {
          DEFAULT: '#00d4ff',
          dark: '#0099cc',
          light: '#66e6ff',
          glow: '#00d4ff80'
        },
        ocean: {
          DEFAULT: '#0a6dc2',
          dark: '#054a86',
          light: '#3a8fd9'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metallic-silver': 'linear-gradient(135deg, #c0c5ce 0%, #e2e6eb 25%, #8b9099 50%, #d4d8de 75%, #5a6371 100%)',
        'metallic-dark': 'linear-gradient(135deg, #1a1a22 0%, #2a2a35 30%, #0f0f14 60%, #1f1f28 100%)',
        'water-flow': 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(10,109,194,0.05) 50%, rgba(0,212,255,0.12) 100%)'
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0, 212, 255, 0.35)',
        'glow-cyan-sm': '0 0 20px rgba(0, 212, 255, 0.25)',
        'glow-cyan-lg': '0 0 80px rgba(0, 212, 255, 0.45)',
        'inner-metallic': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 0 rgba(0, 0, 0, 0.4)',
        'card-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.04)',
        'card-light': '0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.04)'
      },
      keyframes: {
        'water-flow': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-25%) translateY(-10%)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'water-flow': 'water-flow 12s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite'
      }
    },
  },
  plugins: [],
}