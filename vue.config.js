module.exports = {
  publicPath: "/weather-app/",
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://10.85.133.243:8000',
        changeOrigin: true
      },
      '^/assets': {
        target: 'http://10.85.133.243:8000',
        changeOrigin: true
      }
    }
  }
};

