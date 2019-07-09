<template>
  <div id="box">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in datalist" :key="item.productId">
        <img :src="item.productImg" />
        <p>{{item.productTitle}}</p>
        <p>￥{{item.sellPrice}}</p>
        <p>{{item.prizeOrSlogan}}</p>
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
      datalist: [],
      num: 1
    }
  },
  beforeCreate () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  mounted () {
    //   console.log(this.$route.params.Groupid)
    // axios
    //   .get(`/pages/productGroup/${this.$route.params.Groupid}/products?currentPage=1&_=1562649396851`)
    //   .then(res => {
    //     this.datalist = res.data.data;
    //     console.log(this.datalist);
    //   });
  },
  methods: {
    loadMore () {
      if (this.loading === false) return
      this.loading = true
      this.num++

      axios
        .get(
          `/pages/productGroup/${this.$route.params.Groupid}/products?currentPage=${this.num}&_=1562649396851`
        )
        .then(res => {
          console.log(res.data.data)
          if (res.data.data.length === 0) {
            this.loading = false
            return
          }
          this.datalist = [...this.datalist, ...res.data.data]
        })
    }
  }
}
</script>
<style lang="scss" scoped>
#box {
  margin-bottom: 1rem;
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 50%;
      background: white;
      border: 1px solid rgb(245, 245, 245);
      box-sizing: border-box;
      img {
        width: 100%;
      }
      > p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0rem 0.2rem;
        box-sizing: border-box;
      }
    }
  }
}
</style>
