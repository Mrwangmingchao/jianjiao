<template>
    <div>
       <header>
           <ul class="nav">
               <router-link to='/index' tag='li'>主页</router-link>
               <router-link to='/index' tag='li'>商品详情</router-link>
               <router-link to='/index' tag='li'>搜索</router-link>
           </ul>
       </header>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$route.params.itemid)
    axios({
      url: 'itemdetail/skuInfos/17363?_=1562590977015'
    }).then(res => {
      console.log(res)
    })
  },
  methods: {

  }
}
</script>
