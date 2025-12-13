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
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },

      animation: {
        moveToCenter: "moveToCenter 5s ease-in-out forwards",
        typing:
          "typing 5s steps(20, end) 5s 1 normal both, blinkCaret 0.75s step-end infinite",
        slideDown: "slideDown 0.3s ease-out forwards",
      },

      // Integrate .whitespace-nowrap styles
      typography: {
        DEFAULT: {
          css: {
            ".whitespace-nowrap": {
              overflow: "hidden",
              borderRight: "2px solid white", // Adjust as needed
              animation: "blinkCaret 1s step-end infinite",
              animationFillMode: "forwards",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Ensure the typography plugin is included
  ],
};
