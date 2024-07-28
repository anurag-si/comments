/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "modal-background": "#27292D",
        'button-background': "#4A96FF",
        'comment-background': "#35373B"
      },
      width: {
        '463': "463px",
      },
      height: {
        '420': "420px",
      },
      colors: {
        'light-gray': "#6B6C70",
        'white-font' : "#C5C7CA",
        'grey-font' : "#7F8084"
      },
      borderColor: {
        'input-border': "#35373B"
      },
      placeholderColor: {
        'text-placeholder': "#7F8084"
      },
      screens: {
        'smm': '360px',
        'lg': '1024px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradientss": {
          // 'background': "linear-gradient(0deg, #969696 0%, #343434 100%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
