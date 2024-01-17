import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-1":
          "url('https://vogal-demo.myshopify.com/cdn/shop/files/banner1_2000x.jpg?v=1673604471')",
        "blue-cyan-169": "linear-gradient(169deg, #092143, #547db6 100%)",
      },
      colors: {
        "yankees-blue": "#142648",
        "carmine-pink": "#e95144",
        mint: "#40b884",
        jasper: "#da3f3f",
        crayola: "#f9a81a",
        "oxford-blue": "#092143",
        "cyan-azure": "#547db6",
      },
      fontSize: {
        s: "0.8125rem",
      },
      spacing: {
        "88": "22rem",
        "120": "30rem",
        "136": "34rem",
        "160": "40rem",
        "176": "44rem",
        "192": "48rem",
      },
    },
  },
  plugins: [],
};
export default config;
