import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          0: '#bc002d',
        },
      },
      backgroundImage: {
        star: "url('/star.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;


// bg-opacity-75 bg-home bg-contain bg-right bg-no-repeat 