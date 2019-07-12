<template>
  <div>
    <headbar>
      <h3>登录</h3>
    </headbar>

    <div class="register">
      <div class="lint">
        <span @click="handlychage">
          <a :class="istrue?'black':''">密码登录</a>
        </span>
        <span @click="handlychage">
          <a :class="!istrue?'black':''">短息登录</a>
        </span>
      </div>

      <input type="text" />
      <div class="password">
        <input type="text" />
        <span>忘记密码？</span>
      </div>
    </div>
    <button>确认</button>
    <p>
      <label>
        <input type="checkbox" />一个月内记住登录
      </label>

      <span>快速注册</span>
    </p>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'

export default {
  data () {
    return {
      istrue: true
    }
  },
  methods: {
    handlychage () {
      this.istrue = !this.istrue
    }
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
.register {
  margin: 0.3rem 0.2rem;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  align-items: center;

  > .lint {
    height: 1rem;
    width: 100%;
    display: flex;
    background: #fcfcfc;
    > span {
      display: block;
      height: 100%;
      flex: 1;
      line-height: 1rem;
      text-align: center;
      > a {
        height: 100%;
        display: inline-block;
        box-sizing: border-box;
      }
    }
  }
  > input {
    height: 0.9rem;
    width: 90%;
    border: 0;
    border-bottom: 2px solid #eeeeee;
    outline: none;
  }
  .password {
    height: 100%;
    width: 100%;
    width: 90%;
    > input {
      width: 75%;
      height: 0.9rem;
      border: 0;
      outline: none;
    }
  }
}
button {
  height: 1rem;
  width: 90%;
  margin-left: 5%;
  background: yellow;
  border: 0;
  outline: 0;
}
.black {
  border-bottom: 4px solid black;
}
p {
  width: 90%;
  margin-left: 5%;
  border: 0;
  margin-top: 0.2rem;
  > label {
    float: left;
  }
  > span {
    float: right;
  }
}
</style>
