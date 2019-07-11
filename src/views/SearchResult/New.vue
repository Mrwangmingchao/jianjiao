<template>
    <div>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        <li v-for="data in datalist" :key="data.productId" @click="handleClick(data.productId,data.parentProductId,
                 data.productImg,data.productTitle,data.sellPrice,data.originalPrice)">
            <img :src="data.productImg" alt="">
            <div class="block"></div>
            <p>{{data.productTitle}}</p>
            <span>￥{{data.originalPrice}}</span>
        </li>
        </ul>
            <div v-show="isShow">正在加载中.....</div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
export default {
  data () {
    return {
      datalist: [],
      current: 1,
      tatal: 0,
      loading: false,
      isShow: true
    }
  },
  methods: {
    handleClick (id, proid, proimg, protit, sellp, oripri) {
      console.log(id)
      console.log(this.value)
      this.$router.push({
        name: 'jianjiaoitem',
        params: { id: id, proid: proid, proimg: proimg, protit: protit, sellp: sellp, oripri: oripri }
      })
    },
    mounted () {
      this.isShow = false
    },
    loadMore () {
      console.log(window.encodeURI(this.$router.history.current.query.keyword))
      var word = window.encodeURI(this.$router.history.current.query.keyword)
      this.current++
      axios({
        url: `/product/search?keyword=${word}&sort=onShelfTime&order=desc&currentPage=${this.current}&_=1562634054333`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.products]
        if (res.data === []) {
          this.loading = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    ul{
        font-size: 0.3rem;
        display: flex;
        flex-flow: wrap;
        li{
        float: left;
        width: 49.8%;
        border-right: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        box-sizing: border-box;
        font-size: 0;
        position: relative;
        height: 5.6rem;
        img{
        height: 3.71rem;
        margin: 0 auto 0;
        display: block;
        }
        .block{
        position: absolute;
        margin-top: 0.03rem;
        left: 0.3rem;
        };
        p{
        height: .3rem;
        overflow: hidden;
        z-index: 2;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        margin-bottom: 0.05rem;
        margin-left: 0.3rem;
        width: 88%;
        margin-top: 0.5rem;
        display: inline-block;
        vertical-align: middle;
        color:#ccc;
        font-size: .16rem;
        }
        span{
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #000;
        margin-right: 0.1rem;
        margin-left: 0.3rem;
        }
        }
        }

</style>
