module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F63E7B",
          secondary: "#111430",
          accent: "#474747",
          neutral: "#666666",
          "base-100": "#FFFFFF",
          info: "#E5E5E5",
          success: "#36D399",
          warning: "#FFAC0C",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
