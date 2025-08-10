/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          typing: 'typing 3s steps(15, end) forwards',
          blink: 'blink .75s step-end infinite',
        },
        keyframes: {
          typing: {
            'from': { width: '0' },
            'to': { width: '12.5ch' }, // matches AKStack.dev
          },
          blink: {
            '50%': { borderColor: 'transparent' },
          },
        },
      },
    },
    plugins: [],
  };
  