const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */

const rgb = hexToRgb(colors.black)

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 1px 2px 0 rgb(" + rgb + " / 0.7)",
        DEFAULT: "0 1px 4px 0 rgb(" + rgb + " / 0.5)",
        md: "0 1px 6px rgb(" + rgb + " / 0.3)",
        lg: "0 1px 8px  rgb(" + rgb + " / 0.2)",
        xl: "0 1px 12px  rgb(" + rgb + " / 0.1)",
        "2xl": "0 1px 10px rgb(" + rgb + "/ 0.25)",
        inner: "inset 0 2px 4px rgb(" + rgb + " / 0.05)",
        none: "0 0 #0000",
      },
    },
  },
  plugins: [],
}

function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${result[1]} ${result[2]} ${result[3]}` : null
}
