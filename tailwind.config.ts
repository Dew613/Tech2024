import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#f7f4ed'
        }
      },
      backgroundImage:{
        'hero-pattern' : "url('/assests/Frame 1.svg')"
      },
      backgroundSize: {
        'small': '30px 30px', 
      },
    },
  },
  plugins: [],
};
export default config;
