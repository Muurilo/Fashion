module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "featured-image": "url('./src/images/featured.jpg')",
      }),
      colors: {
        "text-primary": "#171717",
        "text-secondary": "#666666",
        "highlight": "#C9A96E"
      },
      fontFamily: {
        "pt-serif": "PT Serif",
        "pt-sans": "PT Sans"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
