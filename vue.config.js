module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      '/product': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
        //   target: '<other_url>'
      // }
      }
      // '/foo': {
    }
  }
}
