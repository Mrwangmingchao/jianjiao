<template>
  <div>
    <swipe>
       <mt-swipe-item v-for="data in datalist" :key="data.id" >
        <img :src="data.bannerImgSrc" @click="handleSwipe(data)"/>
      </mt-swipe-item>
    </swipe>
    <div class="module-all">
      <div class="module-2" v-for="(item) in itemlist" :key="item.moduleId">
        <h3>{{item.moduleName}}</h3>
        <p>{{item.moduleDescription}}</p>
        <img :src="img.bannerImgSrc" v-for="img in item.moduleContent.banners" :key="img.id" />
      </div>
      <p class="moudle-bottom">已经到底了</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import swipe from '@/components/Swipe'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    swipe
  },
  data () {
    return {
      datalist: [],
      itemlist: []
    }
  },
  mounted () {
    axios({
      url: '/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562396704509'
    }).then(res => {
      this.datalist = res.data.data.modules[0].moduleContent.banners
      this.itemlist = res.data.data.modules.slice(1)
      // console.log(res)
    })
  },
  methods: {
    handleSwipe (data) {
      this.$router.push({ path: `/pages/${data.id}`, params: { data: data } })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  font-size: 0.28rem;
  img {
    width: 100%;
  }
}
.module-all {
  padding-bottom: 1rem;
  background: #fff;
  .moudle-bottom {
    background: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
  }
}
.module-2 {
  margin-top: 15px;
  padding: 0 15px;
  background: #fff;
  h3 {
    font-weight: bold;
    font-size: 0.36rem;
    color: #333;
    padding: 0.5rem 0;
    text-align: center;
  }
  p {
    font-size: 0.24rem;
    color: #808080;
    margin-bottom: 0.4rem;
    text-align: center;
  }
}
</style>
