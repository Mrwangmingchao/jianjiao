<template>
    <div>
        Recommend
    </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    axios({
      url: '/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562396704509'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
div{
    font-size: 0.28rem
}
</style>
