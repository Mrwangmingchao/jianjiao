<template>
  <div id="box">
    <headbar>
      <h3>个人信息</h3>
    </headbar>

    <ul>
      <li>
        <p>
          头像
          <img
            src="https://img.wowdsgn.com/product/images/38ac71d9-0886-427d-82d8-65e6b15c61f2_2dimension_800x800.jpg?imageslim"
          />
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          昵称
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          个性签名
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          性别
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          年龄段
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          星座
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          职业
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          收货地址
          <span>&gt;</span>
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
  methods: {},
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
        > span {
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
          border: 1px solid #000;
          margin-left: 4.4rem;
        }
      }
    }
     > li:nth-last-of-type(1) {
     margin-top: .5rem;
      > p {
        > img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 1px solid #000;
          margin-left: 4.4rem;
        }
      }
    }
  }

}
</style>
