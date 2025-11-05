/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // BEYAZ TONLAR - Aydınlık Tema
        white: '#ffffff',
        
        // Koyu Antrasit - Kontrast için
        primary: {
          DEFAULT: '#1a1a1f',
          light: '#23232a',
          dark: '#0f0f14'
        },
        
        // Koyu Kırmızı - Alsancak Logo Rengi (Vurgular)
        accent: {
          DEFAULT: '#8b2525',
          light: '#a03333',
          dark: '#6b1d1d'
        },
        
        // Nötr Gri Tonlar - Text ve Background
        neutral: {
          DEFAULT: '#52525b',
          light: '#f4f4f5',
          dark: '#27272a'
        },
        
        // Text Renkleri
        light: {
          DEFAULT: '#fafafa',
          muted: '#d4d4d8',
          dim: '#a1a1aa'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundSize: {
        '300%': '300%'
      }
    },
  },
  plugins: [],
}

