const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/shared/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins:  [
    require('@tailwindcss/line-clamp'),
    ],


};
