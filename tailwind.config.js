module.exports = {
    content: [
      "./index.html",
      "./research/*.html",
      "./scripts/*.js"
    ],
    theme: {
      extend: {
        colors: {
          'navy': '#1A2B3C',
          'teal': '#20B2AA',
          'gray': '#4A5B6C'
        },
        fontFamily: {
          'serif': ['Roboto Slab', 'serif'],
          'sans': ['Open Sans', 'sans-serif']
        }
      },
    },
    plugins: [],
  }