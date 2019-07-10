<template>
    <div>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        <li v-for="data in datalist" :key="data.productId" @click="handleClick(data.productId)">
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
    handleClick (id) {
      console.log(id)
      this.$router.push(`/item/${id}`)
    },

    loadMore () {
      this.loading = true
      this.current++
      axios({
        url: `/product/search?keyword=%E6%9D%AF%E5%AD%90&sort=sales&order=desc&currentPage=${this.current}&_=1562658426690`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.products]
        this.loading = false
      })
    }
  },
  mounted () {
    axios({
      url: '/product/search?keyword=%E6%9D%AF%E5%AD%90&sort=sales&order=desc&currentPage=1&_=1562658426690'
    }).then(res => {
      this.datalist = res.data.data.products
    })
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
