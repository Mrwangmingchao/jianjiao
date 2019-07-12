<template>
  <div>
    <div
      class="box"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div
        class="li"
        v-for="data in datalist"
        :key="data.productId"
        @click="handlychange(data.productId,data.parentProductId,
                 data.productImg,data.productTitle,data.sellPrice,data.originalPrice)"
      >
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
export default {
  data () {
    return {
      datalist: [],
      index: 1
    }
  },
  computed: {
    id () {
      return this.$store.state.id
    }
  },
  mounted () {
    axios({
      url: `/pages/category/${this.$store.state.id}?currentPage=1&sort=price&order=asc&_=1562829776445`
    }).then(res => {
      this.datalist = res.data.data
    })
  },
  methods: {
    handlychange (itemid, proid, proimg, protit, sellp, oripri) {
      document.documentElement.scrollTop = 0
      this.$router.push({
        name: 'jianjiaoitem',
        params: {
          itemid: itemid,
          proid: proid,
          proimg: proimg,
          protit: protit,
          sellp: sellp,
          oripri: oripri
        }
      })
    },
    loadMore () {
      this.loading = true
      this.index++
      axios({
        url: `/pages/category/${this.$store.state.id}?currentPage=${this.index}&sort=price&order=asc&_=1562829776445`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data]
        this.loading = false
      })
    }
  },
  watch: {
    id (old, nw) {
      axios({
        url: `/pages/category/${old}?currentPage=1&sort=price&order=asc&_=1562829776445`
      }).then(res => {
        this.datalist = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background: #fff;
  overflow: hidden;
  .li {
    background: #fff;
    float: left;
    width: 49.5%;
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
