/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563', 
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0f172a',
          900: '#030712',
        },
        neon: {
          purple: '#b624ff',
          pink: '#ff00ff',
          blue: '#0099ff',
          violet: '#7928ca'
        },
        cyber: {
          dark: '#0a0010',
          black: '#000000',
          purple: '#6b21a8',
          violet: '#7e22ce',
          highlight: '#d8b4fe'
        },
        accent: {
          light: '#c084fc', // Violet clair
          DEFAULT: '#9333ea', // Violet
          dark: '#6b21a8',   // Violet foncé
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cyber: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 5px #b624ff, 0 0 20px rgba(182, 36, 255, 0.3)',
        'neon-glow': '0 0 10px rgba(145, 36, 255, 0.5), 0 0 20px rgba(145, 36, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}