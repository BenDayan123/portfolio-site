/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const plugin = require("tailwindcss/plugin");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        primary: "#1a9fff",
        "primary-content": "#000f1a",
        "primary-dark": "#0086e6",
        "primary-light": "#4db4ff",

        secondary: "#ff1a40",
        "secondary-content": "#ffffff",
        "secondary-dark": "#e60026",
        "secondary-light": "#ff4d6b",

        background: {
          light: "#eff0f1",
          dark: "#000212",
        },
        //0a0117
        //06051f
        //0A0A0A
        foreground: {
          light: "#fbfbfb",
          dark: "#232729",
        },
        border: {
          light: "#dde0e2",
          dark: "#3b4145",
        },
        copy: {
          light: "#0a2540",
          dark: "#fbfbfb",
        },
        "copy-light": {
          light: "#5e676e",
          dark: "#d6d9dc",
        },
        "copy-lighter": {
          light: "#848e95",
          dark: "#9fa7ac",
        },
        success: "#1aff1a",
        warning: "#ffff1a",
        error: "#ff1a1a",
        textify: {
          background: {
            light: "#fefefe",
            dark: "#232627",
          },
          surface: {
            light: "#f5f5f5",
            dark: "#141718",
          },
        },
        message: {
          in: {
            text: {
              light: "black",
              dark: "white",
            },
            bg: {
              light: "white",
              dark: "#1e1e26",
            },
          },
          out: {
            text: {
              light: "white",
              dark: "white",
            },
            bg: {
              light: "#51a2e5",
              dark: "#51a2e5",
            },
          },
        },
        "success-content": "#001a00",
        "warning-content": "#1a1a00",
        "error-content": "#ffffff",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      addUtilities({
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      });
    }),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
