/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'inf-loop': 'infloop 5s linear infinite',
      },
      keyframes: {
        'infloop': {
          '0%': { transform: "translateX(100%)" },
          '100%': { transform: "translateX(-100%)" },
        }
      }
    },
  },
  plugins: [],
}
