<template>
    <div>
        <ul>
            <li v-for ='data in datalist' :key="data.productId"  @click='handlychange(data.productId,data.parentProductId,
                 data.productImg,data.productTitle,data.sellPrice,data.originalPrice)' >
                <img :src="data.productImg" alt="">
                <p>{{data.productTitle}} </p>
                 <p> ￥{{data.originalPrice}} </p>
            </li>
        </ul>
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
    axios.get(`/topic/${this.$route.params.pageid}/products?_=1562729721363`).then(res => {
      this.datalist = res.data.lists
      console.log(this.$route.params.pageid)
    })
  },
  methods: {
    handlychange (itemid, proid, proimg, protit, sellp, oripri) {
      document.documentElement.scrollTop = 0
      this.$router.push({
        name: 'jianjiaoitem',
        params: { itemid: itemid, proid: proid, proimg: proimg, protit: protit, sellp: sellp, oripri: oripri }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        ul{
            display: flex;
             flex-wrap: wrap;
            width: 100%;
            li{
                width: 50%;
                background: white;
                box-sizing: border-box;
                border: 1px solid rgb(245, 245, 245);
                img{
                    width: 100%;
                }
                p{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    box-sizing: border-box;
                    margin: 0 .2rem;
                    background: white;
                }
            }
        }
    }
</style>
