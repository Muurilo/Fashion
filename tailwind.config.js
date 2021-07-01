module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-primary": "#171717",
        "text-secondary": "#666666",
        "text-other": "#B1B1B1",
        "highlight": "#C9A96E",
        "custom-border": "#E5E5E5",
        "background-social": "#F8F9FA",
        "secondary-action": "#A2A2A2",
      },
      fontFamily: {
        "pt-serif": "PT Serif",
        "pt-sans": "PT Sans",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
