/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // more files or globs
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors for JobsForHer branding
        "custom-grey": {
          200: "#F8F8F8", // Lightest Grey
          300: "#B2B2B2", // Lighter Grey
          800: "#404040", // Dark Grey
          900: "#484848", //Darkest Grey
        },
        "custom-blue": "#2680EB",
        "custom-green": "#99CA3B",
      },
    },
  },
  plugins: [],
};
