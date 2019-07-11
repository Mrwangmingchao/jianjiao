<template>
  <div>
    <headbar>
      <h3>{{$route.params.name}}</h3>
    </headbar>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div :class="current===''? 'swiper-slide isselect':'swiper-slide'"  @click="changeState($route.params.sortItemId),back()">All</div>
        <div :class="current===20? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(20)">沙发</div>
        <div :class="current===21? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(21)">板凳</div>
        <div :class="current===24? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(24)">柜架</div>
        <div :class="current===2012? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(2012)">休闲椅</div>
        <div :class="current===2210? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(2210)">餐桌</div>
        <div :class="current===2211? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(2211)">茶几和边桌</div>
        <div :class="current===2212? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(2212)">书桌</div>
        <div :class="current===2310? 'swiper-slide isselect':'swiper-slide'"  @click="changeState(2310)">床</div>
        <div class="swiper-slide empty"></div>
        <div class="swiper-slide empty"></div>
      </div>
    </div>
    <div class="box">
      <ul>
        <li @click="who='news'" activeClass="myactive" :class="who==='news'?'myactive':''">上新</li>
        <li @click="who='num'" activeClass="myactive" :class="who==='num'?'myactive':''">销量</li>
        <li @click="who='price'" activeClass="myactive" :class="who==='price'?'myactive':''">价格</li>
      </ul>
      <component v-bind:is="who"></component>
    </div>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'
import Swiper from 'swiper'
import news from '@/views/Sortitem/News'
import num from '@/views/Sortitem/Num'
import price from '@/views/Sortitem/Price'
export default {
  components: {
    headbar,
    news,
    num,
    price
  },
  data () {
    return {
      who: 'news',
      current: ''
    }
  },

  beforeCreate () {
    this.$store.commit('changeId', this.$route.params.sortItemId)
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  methods: {
    changeState (id) {
      this.$store.commit('changeId', id)
      this.current = id
    },
    back () {
      this.current = ''
    }
  },
  mounted () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    return swiper
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim)
    no-repeat left center;
  background-size: 7.5rem;
  position: relative;
  height: 1.6rem;
  padding: 0.3rem 0rem;
  .swiper-wrapper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
    .swiper-slide {
      align-items: center;
      width: 1.3rem;
      height: 1.6rem;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      justify-content: center;
      font-size: 0.26rem;
      font-weight: 700;
      color: #fff;
      margin-left: 0.3rem;
      margin-right: 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .isselect{
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 1);
}
    .empty {
      border: none;
    }
  }
}
ul {
  display: block;
  list-style-type: disc;
  height: 1rem;
  overflow: hidden;
  li {
    float: left;
    color: #808080;
    margin: 0rem 0.65rem;
    position: relative;
    font-size: 0.26rem;
    width: 1rem;
    text-align: center;
    line-height: .8rem;
  }
}
.myactive {
  border-bottom: 3px solid #000;
}
.box{
    height: 667px;
    background: #fff;
}

</style>
