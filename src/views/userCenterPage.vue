<template>
  <div id="box">
    <headbar>
      <h3>个人信息</h3><i class="iconfont icon-wo mine" @click="$router.push({path:'/mine'})"></i>
    </headbar>

    <ul>
      <li>
        <p>
          头像
          <img
            src="@/assets/WechatIMG25.jpeg"
          />
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          昵称
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          个性签名
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          性别
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          年龄段
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          星座
         <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          职业
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
      <li>
        <p>
          收货地址
          <i class="iconfont icon-arrow-right"></i>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'
import { Picker } from 'mint-ui'
import Vue from 'vue'
Vue.component(Picker.name, Picker)
export default {
  data () {
    return {}
  },
  beforeCreate () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  components: {
    headbar
  }
}
</script>

<style lang="scss" scoped>
#box {
    overflow: hidden;
  > ul {
    margin-top: 0.4rem;

    li {
      height: 1rem;
      line-height: 1rem;
      box-sizing: border-box;
      background: white;

      > p {
        border-bottom: 1px solid #eee;
        margin-left: 0.4rem;
        font-size: 0.34rem;
        position: relative;
        display: flex;
        height: 100%;
        align-items: center;
        > i {
          position: absolute;
          right: 0.4rem;
        }
      }
    }
    > li:nth-of-type(1) {
      height: 1.5rem;
      > p {
        > img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          margin-left: 4.4rem;
        }
      }
    }
  }
}
.mine{
  float: right;
  font-size: 16px;
}
</style>
