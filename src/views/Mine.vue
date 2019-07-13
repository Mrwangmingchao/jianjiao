<template>
  <div id="box">
    <header>我</header>

    <div class="userinfo" @click="handlychange">
      <img src="@/assets/WechatIMG25.jpeg" />
      <p>GGK</p>
      <i class="iconfont icon-arrow-right"></i>
    </div>

    <ul class="order-all">
      <li @click="$router.push('/mycart/all')">
        <a>全部订单</a>
      </li>
      <li @click="$router.push('/mycart/obligation')">
        <i class="iconfont icon-daifukuan"></i>
        <p>
          待付款
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li @click="$router.push('mycart/shipped')">
        <i class="iconfont icon-daifahuo"></i>
        <p>
          待发货
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li @click="$router.push('/mycart/received')">
        <i class="iconfont icon-daishouhuo"></i>
        <p>
          待收货
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li @click="$router.push('/mycart/commented')">
        <i class="iconfont icon-daipinglun-xianxing"></i>
        <p>
          待评论
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li @click="$router.push('/exchange')">
        <i class="iconfont icon-tuihuanhuo1"></i>
        <p>
          退换货
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
    </ul>

    <ul class="another">
      <li  @click="$router.push('/favorite')">
        <p>
          我的收藏
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          我的礼券
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          客服电话
          <em>周一至周五9:00-16:30</em>
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
    </ul>

    <button>退出登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handlychange () {
      this.$router.push('/userCenterPage')
    },
    handlymycart () {
      this.$router.push('/mycart')
    }
  }
}
</script>

<style lang="scss" scoped>
#box {
  margin-bottom: 1rem;
  header {
    height: 0.88rem;
    background: white;
    font-size: 0.34rem;
    text-align: center;
    line-height: 0.88rem;
    font-weight: 600;
  }

  .userinfo {
    height: 1.4rem;
    background: white;
    margin: 0.3rem 0;
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-left: 0.4rem;
    }
    p {
      margin-left: 0.3rem;
    }
    i {
      right: 0.5rem;
      position: absolute;
      right: 0.5rem;
    }
  }

  .order-all {
    background: white;
    padding-left: 0.3rem;
    li:nth-of-type(1) {
      border-bottom: 1px solid #ccc;
      a {
        margin-left: 0.4rem;
      }
    }
    li {
      height: 1rem;
      line-height: 1rem;
      position: relative;
      > p {
        display: inline-block;
        width: 80%;
        margin-left: 1rem;
        color: #666;
        font-size: 0.12rem;

        border-bottom: 1px solid #ccc;
        > i:nth-of-type(1) {
          position: absolute;
          right: 0.5rem;
        }
      }
      > i:nth-of-type(1) {
        position: absolute;
        left: 0.2rem;
      }
    }
  }

  .another {
    margin-top: 0.5rem;
    background: white;
    li {
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #ccc;
      > p {
        margin-left: 0.3rem;
        position: relative;
        > em {
          font-style: normal;
          font-size: 0.14rem;
          color: #999;
          position: absolute;
          right: 1rem;
        }
        > i {
          position: absolute;
          right: 0.5rem;
        }
      }
    }
  }
  button {
    height: 1rem;
    margin-top: 0.6rem;
    width: 100%;
    background: white;
    border: 0;
    color: red;
  }
}
i {
  font-size: 22px;
}
</style>
