<template>
  <div>
    <headbar>
      <h3>购物车</h3>
    </headbar>
    <div class="cart">
      <p class="cart-empty">您的购物车还是空的</p>
      <div class="cart-empty-button">看看收藏</div>
      <div class="cart-empty-button" @click="$router.push({ path: `/index` })">去逛逛</div>
    </div>
    <p class="product-title">- 为您推荐 -</p>
    <div
      class="box"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="li" v-for="data in datalist" :key="data.productId">
        <img :src="data.productImg" />
        <div class="product-title-box">
          <p class="product-subtitle">{{data.productTitle}}</p>
        </div>
        <span class="price">¥{{data.originalPrice}}</span>
        <p class="discription">{{data.prizeOrSlogan}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import headbar from '@/components/HeadBar'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
export default {
  components: {
    headbar
  },
  beforeMount () {
    this.$store.commit('HideTabbar', false)
  },
  data () {
    return {
      datalist: [],
      index: 1
    }
  },
  methods: {
    loadMore () {
      this.index++
      axios({
        url: `/recommend/cart?currentPage=${this.index}&_=1562659386221`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data]
        //   console.log(res)
      })
    }
  },
  mounted () {
    axios({
      url: '/recommend/cart?currentPage=1&_=1562649983191'
    }).then(res => {
      this.datalist = res.data.data
    //   console.log(res.data.data);
    })
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  }
}
</script>

<style lang="scss" scoped>
.cart {
  text-align: center;
  font-size: 0.28rem;
  margin-top: 0.2rem;
}
.cart-empty-button {
  display: inline-block;
  width: 1.5rem;
  height: 0.4rem;
  padding: 0.2rem 0.3rem;
  background: #fff;
  margin: 0.2rem auto;
  background-color: #ffd444;
  font-size: 0.28rem;
  margin-left: 0.3rem;
}
.product-title {
  font-size: 0.32rem;
  text-align: center;
  color: #000;
  padding: 0.4rem 0;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.box {
  background: #fff;
  overflow: hidden;
  .li {
    background: #fff;
    float: left;
    width: 49.7%;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0;
    position: relative;
    padding-bottom: 0.1rem;
    height: 5.6rem;
    img {
      width: 100%;
    }
    .product-subtitle {
      color: #808080;
      font-size: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin-left: 0.3rem;
    }
    .price {
      font-family: PingFangSC-Regular;
      font-size: 0.26rem;
      color: #000;
      margin-right: 0.1rem;
      margin-left: 0.3rem;
    }
    .discription {
      color: #808080;
      font-size: 0.22rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 80%;
      margin-left: 0.3rem;
    }
  }
}
</style>
