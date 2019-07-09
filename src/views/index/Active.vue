<template>
    <div class="active">
        <img :src="ImgSrc" id="bannerImg"/>
        <div v-for="data in newactive" :key="data.moduleId" id="newactive">
            <h2>{{data.moduleName}}</h2>
            <h3>{{data.moduleDescription}}</h3>
            <div class="item-all">
                <div v-for="item in data.moduleContent.products" :key="item.productId" class="activeitem" @click="handleItem(item.productId)">
                    <img :src="item.productImg" class="itemimg"/>
                    <div class="sale-price">
                        <p>{{item.productName}}</p>
                        <span>￥{{item.sellPrice}}</span>
                        <s>￥{{item.originalPrice}}</s>
                    </div>
                </div>
            </div>
            <div class="see-all" @click="handlePage(data.moduleContent.id)">查看全部</div>
        </div>
        <img :src="ImgSrc2" id="bannerImg2"/>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      activeinfo: [],
      ImgSrc: '',
      ImgSrc2: '',
      newactive: []
    }
  },
  mounted () {
    axios({
      url: '/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=1562547416816'
    }).then(res => {
      this.activeinfo = res.data.data.modules
      this.ImgSrc = this.activeinfo[0].moduleContent.bannerImgSrc
      for (var i = 1; i < this.activeinfo.length - 1; i++) {
        this.newactive.push(this.activeinfo[i])
      }
      this.ImgSrc2 = this.activeinfo[5].moduleContent.bannerImgSrc
    })
  },
  methods: {
    handlePage (id) {
      this.$router.push(`/Pages/${id}`)
    },
    handleItem (id) {
      this.$router.push(`/Item/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
    .active{
        margin-bottom: .88rem;
    }
    #bannerImg{
        width:100%
    }
    #bannerImg2{
        width:100%;
        margin: 0.26rem 0 0.76rem;
    }
    #newactive{
        margin-top: 0.26rem;
        padding: 0.26rem 0 0;
        background: #ffffff;
        overflow: hidden;
        h2{
            font-size: 0.36rem;
            text-align: center;
            margin:0.3rem 0;
        }
        h3{
            font-size: 0.24rem;
            font-weight: 100;
            text-align: center;
            color: #808080;
            margin-bottom: 0.2rem;
        }
        .item-all{
            display: flex;
            flex-wrap: wrap;
            .activeitem{
                width:49.8%;
                height: 5.9rem;
                border-right:1px solid #F5F5F5;
                border-top:1px solid #F5F5F5;
                .itemimg{
                    width:3.73rem;
                }
                .sale-price{
                    padding: 0 0.32rem;
                    margin-top: 0.2rem;
                    p{
                        font-size: 0.28rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        color:#808080;
                    }
                    span{
                        font-size: 0.32rem;
                        margin-right: 0.1rem;
                    }
                    s{
                        font-size: 0.24rem;
                        color: #ccc;
                    }
                }
            }
            .activeitem:nth-of-type(even){
                border-right: none;
            }
        }
        .see-all{
            border-top: 1px solid #F5F5F5;
            height: 0.44rem;
            text-align: center;
            padding: 0.3rem 0.4rem;
            color: #4A4A4A;
        }
    }
</style>
