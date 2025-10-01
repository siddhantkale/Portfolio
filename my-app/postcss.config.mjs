import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [forms, typography],
};

export default config;