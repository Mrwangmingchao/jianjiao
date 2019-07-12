<template>
  <div>
    <headbar>
      <h3>登录</h3>
    </headbar>

    <div class="register">
      <div>
        <span>密码登录</span>
        <span>短息登录</span>
      </div>
      <input type="text" />
      <input type="text" />
    </div>
    <button>确认</button>
    <p>
      <span>一个月内记住登录</span>
      <span>快速注册</span>
    </p>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'

export default {
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

  > div {
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
    }
  }
  > input {
    height: 0.8rem;
    width: 90%;
    border: 0;
    border-bottom: 2px solid #eeeeee;
    outline: none;
  }
}
  > button {
    width: 90%;
    margin-top: 0.3rem;
  }
</style>
