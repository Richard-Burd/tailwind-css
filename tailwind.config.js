module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /* This is a custom color we're adding: https://youtu.be/6UVQlB1eo5A?t=508 */
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        /* imported from here: https://fonts.google.com/specimen/Nunito?query=Nunito#standard-styles */
        /* wherever I use the 'font-body' in a class property in html, this font will appear*/
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
