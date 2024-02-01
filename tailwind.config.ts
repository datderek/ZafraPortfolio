import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {   
      keyframes: {
        dropIn: {
          '0%': { transform: 'translateY(-100%)'},
          '100%': { transform: 'translateY(0)'}
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'}
        },
        slideUp: {
          '0%': { transform: 'translateY(25%)'},
          '100%': { transform: 'translateY(0)'}
        }
      },
      animation: {
        dropAndFadeIn: 'dropIn 250ms, fadeIn 250ms linear',
        slideUpAndFadeIn: 'slideUp 750ms, fadeIn 750ms linear'
      }
    },
  },
  plugins: [],
};
export default config;
