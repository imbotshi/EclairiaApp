module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      fontFamily: {
        sofia: "'Sofia', sans-serif",
        paralucent: "'Paralucent ', sans-serif",
      },
      colors: {
        background: "#000A2E",
        primary: "#F10F47",
        input: "#131E47",
        player: "#F72559",
        selectBg: "#030925",
        negative: "#F5F5F5",
        iconSearch: "#4256A4",
        bgComment: "rgba(0, 54, 255, 0.08)",
        bgDropdown: "rgba(19, 30, 71, 0.18)",
        negativeColor: "rgba(255, 255, 255, 0.3)",
        actionBack: "rgba(0, 0, 0, 0.32)",
        deleteBack: "rgba(255, 26, 39, 0.17)",
        commentaireColor: "rgba(255, 255, 255, 0.5)",
        linkColor: "rgba(2, 7, 30, 0.32)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        xs: "-0.07em",
        xss: "-0.06em",
      },
      lineHeight: {
        input: "90%",
        lg: "125%",
        md: "120%",
        full: "100%",
        xs: "12px",
      },
      boxShadow: {
        custom: "0px 4px 12px rgba(0, 0, 0, 0.04)",
      },
      fontSize: {
        display: "48px",
        headline: "32px",
        title: "24px",
        body: "16px",
        small: "14px",
        sm: "18px",
        xs: "12px",
      },
      borderRadius: {
        none: "0",
        input: "16px",
        xs: "18px",
        sm: "14px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
