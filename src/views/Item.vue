<template>
    <div>
        <nav>
            <span></span>
            <h3>商品详情</h3>
            <span></span>
        </nav>
        <img :src="this.$route.params.proimg" style="width:100%"/>
        <div id="titlecon">
            <h2 class="titlecon-h2">{{this.$route.params.protit}}</h2>
            <p class="titlecon-p">
                <span class="titlecon-p-span1">
                    ￥{{this.$route.params.sellp}}
                </span>
                <span class="titlecon-p-span2">
                    ￥{{this.$route.params.oripri}}
                </span>
            </p>
            <span class="titlecon-span">清仓特惠</span>
        </div>
        <div id="designerBrandDiv">
            <img src="image/designer.jpg" class="designerImg">
        </div>
        <div id="itemdetail-box">
            <div v-for="data in itemdetail" :key="data['index']" class="itemdetail">
                <div v-if="data.type === 0 " class="itemdetail1">{{data.content}}</div>
                <div v-else-if="data.type === 1 " class="itemdetail2">{{data.content}}</div>
                <div v-else><img :src="data.content" class="itemdetailImg"/></div>
            </div>
        </div>
        <div id="specification">
            <h2 class="specification-h2">详细规格参数</h2>
            <p v-for="data in specificationlist" :key="data.attributeName" class="specification-p">
                <span class="attrname">{{data.attributeName}}</span>
                <span class="attrvalue">{{data.attributeValueText}}</span>
            </p>
        </div>
        <div id="like-goods-title">
            <p>—</p>
            <div class="like">
                <span>其他信息</span>
                <br>
                <span>OTHER</span>
            </div>
            <p>—</p>
        </div>
        <div id="others">
            <div class="service">
                <span class="service-span">服务承诺</span>
            </div>
            <div class="pricesmean">
                <span class="pricesmean-span">价格说明</span>
            </div>
        </div>
        <div id="like-goods-title">
            <p>—</p>
            <div class="like">
                <span>猜你喜欢</span>
                <br>
                <span>WHAT’S HOT</span>
            </div>
            <p>—</p>
        </div>
        <ul id="likegoods_ul">
            <li v-for="data in likelist" :key="data.productId" class="likegoods_li"
             @click="handleClickItem(data.productId,data.parentProductId,
                data.productImg,data.productTitle,data.sellPrice,data.originalPrice)">
                <img :src="data.productImg"  class="likegoods_img"/>
                <p class="likegoods_p1">{{data.productTitle}}</p>
                <p class="likegoods_p2">￥{{data.originalPrice}}</p>
            </li>
        </ul>
        <div id="needHelp">
            <span>需要帮助</span>
            <span>周一至周五 9:00~18:30</span>
        </div>
        <footer>
            <ul class="footer_ul">
                <li><i></i><i></i></li>
                <li>加入购物车</li>
                <li>立即购买</li>
            </ul>
        </footer>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
// import { constants } from 'crypto'
Vue.prototype.$ajax = axios

export default {
  data () {
    return {
      likelist: [],
      itemdetail: [],
      specificationlist: []

    }
  },
  // props: ['itemid','proid'],
  beforeMount () {
    this.$store.state.isTabbarShow = false
  },
  mounted () {
    this.$ajax({
      url: `/recommend/item?skuId=${this.$route.params.itemid}&_=1562632237912`
    }).then(res => {
    //   console.log(res.data)
      this.likelist = res.data.data
    })
    this.$ajax({
      url: `/itemdetail/spuInfos/${this.$route.params.proid}?_=1562662432945`
    }).then(res => {
    //   console.log(res.data.data)
      this.itemdetail = res.data.data.itemDetailIntroVoList
    })
    this.$ajax({
      url: `/itemdetail/skuInfos/${this.$route.params.itemid}?_=1562670717309`
    }).then(res => {
    //   console.log(res.data.data.skuAttrPairs)
      this.specificationlist = res.data.data.skuAttrPairs
    })
  },
  watch: {
    $route () {
    //   console.log(this.$route.params.itemid, this.$route.params.proid, this.$route.params.protit, this.$route.params.sellp
      // , this.$route.params.oripri)
      axios({
        url: `/recommend/item?skuId=${this.$route.params.itemid}&_=1562632237912`
      }).then(res => {
        // console.log(res.data)
        this.likelist = res.data.data
      })
      axios({
        url: `/itemdetail/spuInfos/${this.$route.params.proid}?_=1562662432945`
      }).then(res => {
        // console.log(res.data.data)
        this.itemdetail = res.data.data.itemDetailIntroVoList
      })
      axios({
        url: `/itemdetail/skuInfos/${this.$route.params.itemid}?_=1562670717309`
      }).then(res => {
        // console.log(res.data.data.skuAttrPairs)
        this.specificationlist = res.data.data.skuAttrPairs
      })
    }
  },
  beforeDestroy () {
    this.$store.state.isTabbarShow = true
  },
  methods: {
    handleClickItem (itemid, proid, proimg, protit, sellp, oripri) {
      console.log(itemid, proid, proimg, protit, sellp, oripri)
      document.documentElement.scrollTop = 0
      this.$router.push({
        name: 'jianjiaoitem',
        params: { itemid: itemid, proid: proid, proimg: proimg, protit: protit, sellp: sellp, oripri: oripri }
      })
      // this.$router.go(-1)
      // this.$router.push({ path: `/selectedlist/${JSON.stringify({ itemid, proid,proimg, protit, sellp,oripri })}` });
    }
  },
  updated () {
    console.log(this.$route.params.itemid, this.$route.params.proid, this.$route.params.protit, this.$route.params.sellp
      , this.$route.params.oripri)
  }
}
</script>

<style lang="scss" scoped>
nav{
    background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    box-sizing: border-box;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    h3{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 0.34rem;
    margin: 0;
    padding: 0;
    border: 0;
    }
}
.swiper-container {
      width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    }

}
img{
    display: block;
}
#titlecon{
    padding: 0.3rem 0.5rem 0rem;
    background: #fff;
    margin-bottom: 0.1rem;
    padding-bottom: 0.28rem;
    .titlecon-h2{
        font-size: 0.36rem;
        font-weight: 100;
        text-align: initial;
        margin-bottom: 0.2rem;
    }
    .titlecon-p{

        .titlecon-p-span1{
            font-size: 0.36rem;
            font-weight: bold;
            color: #000;
            font-family: PingFangSC-Semibold;
            margin-right: 0.1rem;
            vertical-align: sub;
        }
        .titlecon-p-span2{
            font-size: 0.22rem;
            font-weight: 100;
            color: #C1C0C6;
            vertical-align: sub;
            text-decoration: line-through;
        }
    }
    .titlecon-span{
        padding: 0rem 0.1rem;
        text-align: center;
        font-size: 0.22rem;
        color: #ffffff;
        background-color: #ff7070;
        vertical-align: text-bottom;
    }
}
#designerBrandDiv{
    margin-bottom: 0.3rem;
    .designerImg{
        width:100%;
    }
}
#itemdetail-box{
    margin: 0.3rem 0;
    .itemdetail{
        margin: 0;
        .itemdetail1{
            font-family: PingFangSC-Regular;
            font-size: 0.32rem;
            color: #000;
            letter-spacing: 0.01rem;
            text-align: center;
            margin:0 0 0.1rem 0;
            padding: 0 0.5rem;
        }
        .itemdetail2{
            font-family: PingFangSC-Regular;
            font-size: 0.26rem;
            color: #707070;
            margin:0 0 0.3rem 0;
            padding: 0 0.5rem;
        }
        .itemdetailImg{
            width: 100%;
            margin: 0.1rem auto;
        }
    }
}
#specification{
    padding: 0rem 0.5rem 0.4rem;
    background: #fff;
    .specification-h2{
        height: 1rem;
        line-height: 1rem;
        font-family: PingFangSC-Regular;
        font-weight: 100;
        font-size: 16px;
        color: #000000;
        letter-spacing: 1px;
    }
    .specification-p{
        line-height: 0.64rem;
        color: #707070;
        font-size: 0.26rem;
        border-top: 1px solid #EAEAEA;
        display: flex;
        .attrname{
            width:30%;
        }
        .attrvalue{
            width: 70%;
        }
    }
}
#others{

    .service{
        border-bottom: 1px solid #F5F5F5;
        .service-span{
            display: block;
            padding: 0.4rem  0.4rem;
            position: relative;
            font-size: 0.32rem;
            background: #fff;
            font-family: PingFangSC-Regular;
            color: #000000;
            text-align: left;
        }
    }
    .pricesmean{
        border-bottom: 1px solid #F5F5F5;
        .pricesmean-span{
            display: block;
            padding: 0.4rem  0.4rem;
            position: relative;
            font-size: 0.32rem;
            background: #fff;
            font-family: PingFangSC-Regular;
            color: #000000;
            text-align: left;
        }
    }
}
#like-goods-title{
    width:100%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin:0.3rem 0;
    p:nth-of-type(1){
        padding-top: 0.2rem;
        padding-right: 0.1rem;
    }
    p:nth-of-type(2){
        padding-top: 0.2rem;
        padding-left: 0.1rem;
    }
    .like{
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0;
        span:nth-of-type(1){
            font-size: 16px;
        }
    }
}
#likegoods_ul{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background: #fff;
    .likegoods_li{
        width:49.6%;
        padding-bottom: 0.1rem;
        height: 5.6rem;
        border-top: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        .likegoods_img{
            width: 100%;
        }
        .likegoods_p1{
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            margin-bottom: 0.05rem;
            margin-left: 0.3rem;
            width: 88%;
            margin-top: 0.5rem;
            color: #808080;
            font-size: 0.25rem;
        }
        .likegoods_p2{
            font-family: PingFangSC-Regular;
            font-size: 0.26rem;
            color: #000;
            /* margin-bottom: 0.05rem; */
            margin-right: 0.1rem;
            margin-left: 0.3rem;
        }
    }
    .likegoods_li:nth-of-type(even){
        border-right: none;
    }
}
#needHelp{
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    margin: 0.3rem 0 1.18rem;
    font-size: 0.2rem;
    >span:nth-of-type(1){
        color: #000;
        margin-right: 0.2rem;
        margin-left: 0.5rem;
    }
    >span:nth-of-type(2){
        color: #FF7070;
    }
}

footer{
    position: fixed;
    width: 100%;
    height: 0.88rem;
    background: #fff;
    border-top: 1px solid #eaeaea;
    bottom:0;
    .footer_ul{
        display: flex;
        justify-content: center;
        text-align: center;
        >li{
            flex: 1;
            line-height: 0.88rem;
            font-size: 0.3rem;
        }
        >li:nth-of-type(2){
            background-color: #f5f5f5;
        }
        >li:nth-of-type(3){
            background-color: #FFD444;
        }
    }
}
</style>
