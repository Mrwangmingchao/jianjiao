<template>
  <div id="box">
    <swipe v-if="itemlist.moduleContent">
      <mt-swipe-item v-for="data in itemlist.moduleContent.banners" :key="data.id">
        <img :src="data.bannerImgSrc" />
      </mt-swipe-item>
    </swipe>
    <div class="banner">
      <h3>{{datalist.moduleName}}</h3>
      <p>{{ datalist.moduleDescription}}</p>
      <!-- <div class="swiper-container">
      </div>-->
      <div class="swiper-container filmswiper">
        <div class="swiper-wrapper" v-if="datalist.moduleContent" :key="datalist.length">
          <div
            class="swiper-slide"
            v-for="data in datalist.moduleContent.products"
            :key="data.productId"
          >
            <img :src="data.productImg" class="photos" />
            <p>{{data.productTitle}}</p>
            <p>￥{{data.originalPrice}}</p>
          </div>
        </div>
        <p>查看全部 ▶</p>
        <div class="swiper-pagination film-swiper-pagination"></div>
      </div>
    </div>

    <div v-for="data in anotherlist" :key="data.moduleId" class="producttype">
      <h3>{{data.moduleName}}</h3>
      <p>{{ data.moduleDescription}}</p>
      <div
        v-for="item in  data.moduleContent.products.slice(0,6)"
        :key="item.productId"
        class="product"
      >
        <img :src="item.productImg" alt />
        <div class="message">
          <p>{{item.productTitle}}</p>
          <p>￥{{item.originalPrice}}</p>
        </div>
      </div>
      <p class="last"> 查看全部 ▶</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swipe from '@/components/Swipe'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      datalist: [],
      itemlist: [],
      anotherlist: []
    }
  },
  mounted () {
    axios
      .get(
        'v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1562549946530'
      )
      .then(res => {
        this.datalist = res.data.data.modules[1]
        this.itemlist = res.data.data.modules[0]
        this.anotherlist = res.data.data.modules.splice(2)
        console.log(this.anotherlist)

        this.$nextTick(() => {
          const k = new Swiper('.filmswiper', {
            slidesPerView: 3.5,
            spaceBetween: 10,
            freeMode: true
          })
          return k
        })
        // console.log(this.datalist);
      })
  },
  methods: {},
  components: {
    swipe
  }
}
</script>

<style lang="scss" scoped>
#box {
  font-size: 0.28rem;
  img {
    width: 100%;
  }
  //   >div {
  //   }
  .banner {
    background: white;
    margin-top: 0.3rem;
    padding-top: 0.3rem;
    > h3 {
      font-size: 0.36rem;
      text-align: center;
      margin: 0rem 0.3rem;
    }
    > p {
      font-size: 0.24rem;
      text-align: center;
      margin-top: 0.3rem;
      color: #333;
    }
    // >p:nth-of-type(2){
    //     height: .5rem;
    // }
    .filmswiper {
      .swiper-slide {
        margin-left: 0.1rem;
        > p:nth-of-type(1) {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      > p {
        text-align: center;
        font-size: 0.18rem;
        padding: 0.15rem 0.2rem;
        margin-top: 0.1rem;
      }
    }
  }
}

.swiper-slide {
  width: 3rem;
  margin-right: 0.1rem;
  .photos {
    width: 3rem;
  }
}
.producttype {
  width: 100%;
  background: white;
  margin-top:.4rem;
  > h3 {
    text-align: center;
    padding: .3rem 0;
    font-size:  0.36rem
  }
  > p {
    text-align: center;
  }
  > div {
    width: 50%;
    display: inline-block;
    background: white;
    .message {

      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .last{
      height: 1rem;
      line-height: 1rem;
  }
}
</style>

<style lang="scss" scoped>
</style>
