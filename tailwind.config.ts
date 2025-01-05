import type { Config } from "tailwindcss";

const colors = {
  // Project Colors
  background: "#F7F6F4",
  primary: "#D84727",
  primaryAlt: "#DA5E42",
  secondary: "#F1DDC9",

  // Text Colors
  textDark: "#333333",
  textMuted: "#777777",
  textLight: "#999999",
  textMedium: "#555555",
  textWhite: "#FFFFFF",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
