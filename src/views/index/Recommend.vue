<template>
  <div>
    <mt-swipe :auto="4000" style="height:5rem">
      <mt-swipe-item v-for="data in datalist" :key="data.id">
        <img :src="data.bannerImgSrc" />
      </mt-swipe-item>
    </mt-swipe>
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
    axios({
      url: '/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562396704509'
    }).then(res => {
      this.datalist = res.data.data.modules[0].moduleContent.banners
      console.log(res.data.data.modules[0].moduleContent.banners)
    })
  }
}
</script>

<style lang="scss" scoped>
div {
  font-size: 0.28rem;
  img{
      width: 100%
  }
}
</style>
