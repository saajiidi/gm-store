

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
        disappear: {
          "0%": { width: "100%", opacity: 1 },
          "100%": { width: "0%", opacity: 0 },
        },
        reappear: {
          "0%": { width: "0%", opacity: 0 },
          "100%": { width: "100%", opacity: 1 },
        },
      },
      animation: {
        typing:
          "typing 5s steps(12, end) 1s forwards, blinkCaret 0.75s step-end infinite 1s",
        disappear: "disappear 1s forwards",
        reappear: "reappear 5s steps(12, end) infinite 15s",
      },
    },
  },
  plugins: [],
};
