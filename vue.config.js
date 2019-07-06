module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      }
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
