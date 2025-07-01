import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          light: '#FF8585',
          dark: '#E65252'
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          light: '#65E6DE',
          dark: '#39B4AC'
        },
        accent: {
          DEFAULT: '#FFE66D',
          light: '#FFEB8A',
          dark: '#E6CD54'
        },
        dark: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
          darker: '#243342'
        },
        light: {
          DEFAULT: '#ECF0F1',
          dark: '#BDC3C7',
          lighter: '#F5F7F8'
        },
        // Additional UI colors
        success: '#2ECC71',
        error: '#E74C3C',
        warning: '#F1C40F',
        info: '#3498DB'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      spacing: {
        container: '2rem',
        section: '4rem'
      },
      borderRadius: {
        custom: '0.5rem'
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: []
} satisfies Config