module.exports = {
  testEnvironment: 'jsdom', // Utilise jsdom comme environnement de test
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)', // Ignore tout sauf axios
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Utilise Babel pour transformer les fichiers JS/JSX
  },
}; 