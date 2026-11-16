/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#0A0A0A',
          card: '#0c0c10',
          glass: 'rgba(12, 12, 16, 0.75)',
        },
        crimson: {
          DEFAULT: '#E50914',
          glow: '#FF1A24',
          deep: '#790008',
          dark: '#3A0004',
          blood: '#8B0000',
        },
        surface: {
          dark: '#0f0f13',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-red': 'rgba(229, 9, 20, 0.35)',
        },
        stefano: {
          text: '#F5F5F5',
          muted: '#929292',
          subtle: '#555555',
        }
      },
      fontFamily: {
        sans: ['Cinzel Decorative', 'Cinzel', 'Trajan Pro', 'Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        heading: ['Cinzel Decorative', 'Cinzel', 'serif'],
        brush: ['Brush Script MT', 'Impact', 'Cinzel Decorative', 'cursive', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'crimson-sm': '0 0 15px rgba(229, 9, 20, 0.3)',
        'crimson-md': '0 0 25px rgba(229, 9, 20, 0.45)',
        'crimson-lg': '0 0 45px rgba(255, 26, 36, 0.6)',
        'crimson-inner': 'inset 0 0 20px rgba(229, 9, 20, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'card-glow': '0 0 20px rgba(229, 9, 20, 0.15), 0 8px 30px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(255, 26, 36, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 22px rgba(255, 26, 36, 0.9))' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.85' },
          '25%': { transform: 'scale(1.04, 0.98) rotate(-1deg)', opacity: '0.95' },
          '50%': { transform: 'scale(0.97, 1.03) rotate(1deg)', opacity: '0.75' },
          '75%': { transform: 'scale(1.02, 1.01) rotate(-0.5deg)', opacity: '1' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(229, 9, 20, 0.3)' },
          '50%': { borderColor: 'rgba(255, 26, 36, 0.8)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'flame': 'flameFlicker 2s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        'spin-reverse': 'spinSlow 25s linear infinite reverse',
        'float': 'floatSlow 4s ease-in-out infinite',
        'border-pulse': 'borderGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
