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
            <div class="brand">
                <div class="brand-logo">
                    <img src="image/dimension.jpg" class="brand-logo-img"/>
                </div>
                <div class="brand-font">
                    <h2 class="brand-h2">尖叫实验室</h2>
                    <p class="brand-p">尖叫实验室于2016年1月诞生于中国上海，
                        是一个由北欧原创家具集合品牌尖叫设计投资，国内知名设计师团队创立，
                        聚焦北欧文化与生活的家居设计品牌。尖叫实验室与众多国际知名设计师联合进行设计及研发,
                         致力于为都市年轻群体带来实用而又充满想象力的日常家具产品。</p>
                </div>
            </div>
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
            <div class="service-box">
                <div class="service" @click="handleService()">
                    <span class="service-span">服务承诺</span>
                </div>
                <div class="service-tips"  v-show="isService">
                    <img src="image/servicepromise_bg.png" class="service-tips-bg"/>
                    <img src="image/dashLine.png" class="service-tips-dash"/>
                    <ul class="service-tips-ul">
                        <li class="service-tips-li">
                            <img src="image/promise2.png"  class="service-tips-pro"/>
                            <p>价格保障/变动返差价</p>
                            <p>7日保价</p>
                        </li>
                        <li class="service-tips-li">
                            <img src="image/promise3.png"  class="service-tips-pro"/>
                            <p>三年内质保</p>
                            <p>7日退换</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pricesmean-box" ref="pric">
                <div class="pricesmean" @click="handlePricesmean()">
                    <span class="pricesmean-span">价格说明</span>
                </div>
                <div class="pricesmean-tips" v-show="isPricesmean">
                    <p>
                    划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考
                    </p>
                    <p>
                    未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。
                    </p>
                    <p>
                    * 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准
                    </p>
                </div>
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
      specificationlist: [],
      isService: true,
      isPricesmean: false
    }
  },
  beforeMount () {
    this.$store.state.isTabbarShow = false
  },
  mounted () {
    this.$ajax({
      url: `/recommend/item?skuId=${this.$route.params.itemid}&_=1562632237912`
    }).then(res => {
      this.likelist = res.data.data
    })
    this.$ajax({
      url: `/itemdetail/spuInfos/${this.$route.params.proid}?_=1562662432945`
    }).then(res => {
      this.itemdetail = res.data.data.itemDetailIntroVoList
    })
    this.$ajax({
      url: `/itemdetail/skuInfos/${this.$route.params.itemid}?_=1562670717309`
    }).then(res => {
      this.specificationlist = res.data.data.skuAttrPairs
    })
  },
  watch: {
    $route () {
      axios({
        url: `/recommend/item?skuId=${this.$route.params.itemid}&_=1562632237912`
      }).then(res => {
        this.likelist = res.data.data
      })
      axios({
        url: `/itemdetail/spuInfos/${this.$route.params.proid}?_=1562662432945`
      }).then(res => {
        this.itemdetail = res.data.data.itemDetailIntroVoList
      })
      axios({
        url: `/itemdetail/skuInfos/${this.$route.params.itemid}?_=1562670717309`
      }).then(res => {
        this.specificationlist = res.data.data.skuAttrPairs
      })
    }
  },
  beforeDestroy () {
    this.$store.state.isTabbarShow = true
  },
  methods: {
    handleClickItem (itemid, proid, proimg, protit, sellp, oripri) {
      document.documentElement.scrollTop = 0
      this.$router.push({
        name: 'jianjiaoitem',
        params: { itemid: itemid, proid: proid, proimg: proimg, protit: protit, sellp: sellp, oripri: oripri }
      })
    },
    handleService () {
      if (this.isService) {
        this.isService = false
      } else {
        this.isService = true
      }
    },
    handlePricesmean () {
      if (this.isPricesmean) {
        this.isPricesmean = false
      } else {
        this.isPricesmean = true
      }
    }
  },
  updated () {
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
// <div id="designerBrandDiv">
//             <div class="brand">
//                 <div class="brand-logo"></div>
//                 <div class="brand-font">
//                     <h2 class="brand-h2">尖叫实验室</h2>
//                     <p class="brand-p">尖叫实验室于2016年1月诞生于中国上海，
//                         是一个由北欧原创家具集合品牌尖叫设计投资，国内知名设计师团队创立，
//                         聚焦北欧文化与生活的家居设计品牌。尖叫实验室与众多国际知名设计师联合进行设计及研发,
//                          致力于为都市年轻群体带来实用而又充满想象力的日常家具产品。</p>
//                 </div>
//             </div>
//         </div>
#designerBrandDiv{
    margin-bottom: 0.3rem;
    .brand{
        width: 100%;
        background: url('/image/designerBackground.png') no-repeat left top;
        background-size: 100%;
        height: 1.92rem;
        position: relative;
        padding: 0.26rem 0;
        .brand-logo{
            width: 1.4rem;
            height: 1.4rem;
            border-radius: 100%;
            position: absolute;
            display: block;
            top: 50%;
            transform: translateY(-50%);
            left: 0.5rem;
            .brand-logo-img{
                width:100%;
                border-radius: 50%;
            }
        }
        .brand-font{
            position: absolute;
            top: 50%;
            transform: translateY(-35%);
            left: 2.2rem;
            right: 0.3rem;
            .brand-h2{
                font-family: PingFangSC-Medium;
                font-size: 0.32rem;
                color: #FFFFFF;
                letter-spacing: 0.01rem;
                text-align: left;
                margin-bottom: 0.1rem;
            }
            .brand-p{
                font-family: PingFangSC-Light;
                font-size: 0.24rem;
                color: #FFFFFF;
                line-height: 0.4rem;
                margin-bottom: 0.3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
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
    .service-box{
        border-bottom: 1px solid #F5F5F5;
        background-color: white;
        padding: 0 0.4rem;
        .service{
            .service-span{
                padding: 0.4rem 0;
                display: block;
                position: relative;
                font-size: 0.32rem;
                font-family: PingFangSC-Regular;
                color: #000000;
                text-align: left;
            }
        }
        .service-tips{
            width: 100%;
            height: 2.8rem;
            background: #808080;
            position: relative;
            padding: 0px;
            display: block;
            transform-origin: 0px 0px;
            opacity: 1;
            transform: scale(1, 1);
            .service-tips-bg{
                width: 100%;
                height: 100%;
            }
            .service-tips-dash{
                position: absolute;
                right: 50%;
                top: 50%;
                height: 50%;
                transform: translateY(-50%);
            }
            .service-tips-ul{
                display: flex;
                position: absolute;
                top:0;
                left: 0;
                width:100%;
                .service-tips-li{
                    flex:1;
                    align-content: center;
                    .service-tips-pro{
                        width: 0.84rem;
                        height: 0.84rem;
                        margin:0.5rem auto 0;

                        }
                    p{
                        margin-top: 0.15rem;
                        text-align: center;
                        font-family: PingFangSC-Medium;
                        font-size: 0.26rem;
                        color: #FFFFFF;
                    }
                    }
                }
            }
        }

    }
    .pricesmean-box{
        .pricesmean{
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
        .pricesmean-tips{
            display: block;
            transform-origin: 0px 0px;
            opacity: 1;
            transform: scale(1, 1);
            padding: 0rem 0.5rem 0.4rem;
            background: #fff;
            p{
                margin-bottom: 0.2rem;
                line-height: 0.48rem;
                color: #707070;
                font-size: 0.28rem;
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
