/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      darkMode: 'media', // Globally enable Dark Mode
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      screens: {
        mdd: "991px",
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    backdropFilter: true,
  },
};
