<template>
  <div>
    productGroup
    <ul>
      <li v-for="item in datalist" :key='item.productId'>
        <img v-lazy="item" :src="item.productImg"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)

export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios
      .get('/pages/productGroup/11902/products?currentPage=1&_=1562649396851')
      .then(res => {
        this.datalist = res.data.data
        console.log(this.datalist)
      })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
