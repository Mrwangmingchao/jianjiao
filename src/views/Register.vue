<template>
  <div>
    <headbar>
      <h3>注册</h3>
      <span @click="$router.push({path:'/login'})" class="header-span">登录</span>
    </headbar>
    <div class="box">
      <input type="text" placeholder="请输入手机号" ref="num"/>
      <input type="password" placeholder="请输入密码" ref="password"/>
    </div>
    <button @click="handleClick">注册</button>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'
export default {
  components: {
    headbar
  },
  methods: {
    handleClick () {
      localStorage.setItem('name', this.$refs.num.value)
      localStorage.setItem('password', this.$refs.password.value)
      if (localStorage.getItem('name')) {
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-span {
  float: right;
  font-size: 15px;
}
.box {
  width: 6.9rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 5;
  color: #000;
  margin: 0.3rem auto;
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
}
button{
    margin: 0 auto;
    vertical-align: middle;
    width: 6.9rem;
    height: 0.88rem;
    background-color: #FFD444;
    font-size: 0.28rem;
    position: absolute;
    top: 4.38rem;
    left: 50%;
    transform: translateX(-50%);
    outline: none;
}
</style>
