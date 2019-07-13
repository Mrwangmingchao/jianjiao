<template>
  <div>
    <headbar>
      <h3>登录</h3>
      <span @click="$router.push({path:'/register'})" class="header-span">注册</span>
    </headbar>
    <div class="box">
      <div class="head swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <span>密码登录</span>
          </div>
          <div class="swiper-slide">
            <span>短信登录</span>
          </div>
        </div>
      </div>
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <div class="swiper-slide sub">
            <input type="text" placeholder="请输入手机号" ref="num" />
            <input type="password" placeholder="请输入密码" ref="password" />
          </div>
          <div class="swiper-slide">
            <input type="text" placeholder="请输入手机号" />
            <input type="text" placeholder="请输入验证码" />
          </div>
        </div>
      </div>
    </div>
    <button @click="handleClick">确认</button>
    <p @click="$router.push({path:'/register'})">快速注册</p>
    <h4 class="lala" v-show="isShow">账号或密码错误</h4>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'
import Swiper from 'swiper'

export default {
  components: {
    headbar
  },
  data () {
    return {
      isShow: false
    }
  },
  beforeCreate () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  methods: {
    handleClick () {
      if (
        this.$refs.num.value === localStorage.getItem('name') &&
        this.$refs.password.value === localStorage.getItem('password')
      ) {
        this.$router.push({ path: '/index' })
        localStorage.setItem('pass', true)
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  mounted () {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 0,
      slidesPerView: 2,
      freeMode: true,
      //   loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    })
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loopedSlides: 5, // looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      }
    })
    return [galleryThumbs, galleryTop]
  }
}
</script>

<style lang="scss" scoped>
.lala{
    position: absolute;
    color: red;
    top: 5.5rem;
    left: 1rem
}
.header-span {
  float: right;
  font-size: 15px;
}
.box {
  width: 6.9rem;
  margin: 0 20px;
  background-color: #fff;
  margin-top: 0.3rem;
  height: 2.9rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  input {
    border: none;
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #eaeaea;
    font-size: 0.28rem;
    color: #000;
    font-family: "PingFangSC-Regular";
    outline: none;
    box-sizing: border-box;
  }
  .head {
    height: 0.9rem;
    text-align: center;
    span {
      height: 0.9rem;
      line-height: 0.9rem;
      display: inline-block;
      width: 2.5rem;
    }
  }
}
button {
  margin: 0 auto;
  vertical-align: middle;
  width: 6.9rem;
  height: 0.88rem;
  background-color: #ffd444;
  font-size: 0.28rem;
  position: absolute;
  top: 4.38rem;
  left: 50%;
  transform: translateX(-50%);
}
p {
  position: absolute;
  right: 0.4rem;
  top: 5.5rem;
}
</style>
