module.exports = {
  purge: [
    './docs/**/*.vue',
    './docs/.vitepress/**/*.vue'
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  fontFamily: {
    display: ['Roboto', 'sans-serif'],
    body: ['Roboto', 'sans-serif'],
    sans: ['Roboto']
  },
  borderWidth: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
  },
  extend: {
    colors: {
      cyan: '#9cdbff',
    },
    spacing: {
      '96': '24rem',
      '128': '32rem',
    }
  }
}
