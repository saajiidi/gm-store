module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      keyframes: {
        moveToCenter: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
      },
      animation: {
        moveToCenter: "moveToCenter 2s ease-in-out forwards",
        typing:
          "typing 3s steps(20, end) 2s 1 normal both, blinkCaret 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};
