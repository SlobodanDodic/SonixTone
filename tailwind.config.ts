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
      container: {
        center: true,
      },
    },
  },

  plugins: [],
} satisfies Config;