module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      '/itemdetail': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      }
    }
  }
}
