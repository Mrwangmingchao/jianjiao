<template>
  <div id="box">
    <img src="https://img.wowdsgn.com/product-group/images/3709cefe-baf5-486b-b3ab-f6dd9037ef7a_2dimension_750x620.jpg?imageslim" alt="">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in datalist" :key="item.productId" @click='handlychange(item.productId,item.parentProductId,
                 item.productImg,item.productTitle,item.sellPrice,item.originalPrice)' >
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
    axios
      .get(`/pages/productGroup/${this.$route.params.Groupid}/products?currentPage=1&_=1562649396851`)
      .then(res => {
        this.datalist = res.data.data
      })
  },
  methods: {
    handlychange (itemid, proid, proimg, protit, sellp, oripri) {
      document.documentElement.scrollTop = 0
      this.$router.push({
        name: 'jianjiaoitem',
        params: { itemid: itemid, proid: proid, proimg: proimg, protit: protit, sellp: sellp, oripri: oripri }
      })
    },

    loadMore () {
      if (this.loading === false) return
      this.loading = true
      this.num++

      axios
        .get(
          `/pages/productGroup/${this.$route.params.Groupid}/products?currentPage=${this.num}&_=1562649396851`
        )
        .then(res => {
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
  >img{
    width: 100%;
  }
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
