module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      '/recommend': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      '/itemdetail': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
      },
      '/pages': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      },
      '/product': {
        target: 'https://m.wowdsgn.com',
        // ws: true,
        changeOrigin: true
        //   target: '<other_url>'
      },
      '/message': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      }
      // '/foo': {
    }
  }
}
