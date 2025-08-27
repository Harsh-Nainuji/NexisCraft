/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: {
          DEFAULT: '#000000',   // Pure black
          soft: '#0A0A0A',      // Slightly lighter black for sections
          card: '#111111',      // Dark gray-black for cards
        },
        text: {
          DEFAULT: '#EDEDED',   // Elegant off-white for readability
          muted: '#A3A3A3',     // Muted gray for secondary text
        },
        accent: {
          gold: '#FACC15',      // Luxury golden accent
          blue: '#3B82F6',      // Sleek royal blue option
          purple: '#A855F7',    // Futuristic purple option
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], 
        heading: ['"Space Grotesk"', 'sans-serif'], 
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-out',
        slideUp: 'slideUp 1s ease-out',
        scaleIn: 'scaleIn 0.8s ease-out',
        glowPulse: 'glowPulse 2.5s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 10px rgba(250,204,21,0.6)' }, // soft gold glow
          '50%': { textShadow: '0 0 20px rgba(250,204,21,0.9)' },
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.5)', // Rich shadow
        glow: '0 0 15px rgba(250,204,21,0.6)',  // Gold glowing shadow
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
