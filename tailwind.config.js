module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-brown': '#fefbf6',
        'medium-brown': '#f4ede1',
        'dark-brown': '#d4c6ab',
        'off-black': '#5a5449',
        olive: '#aaaf8f'
      },
      fontFamily: {
        handwritten: 'Solitreo, sans-serif',
        printed: 'Raleway, sans-serif'
      }
    }
  },
  plugins: []
}
