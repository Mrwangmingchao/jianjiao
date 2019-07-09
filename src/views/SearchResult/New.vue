<template>
    <div>
        <h2>aaaaaaa</h2>
    </div>
</template>
<script>

import axios from 'axios'

export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    console.log('aa')
    axios({ url: '/product/search?keyword=%E6%9D%AF%E5%AD%90&sort=onShelfTime&order=desc&currentPage=1&_=1562631762986' }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
