<template>
  <div>
    <div class="search-box">
      <i class="iconfont icon-fangdajing"></i>
      <input type="text" :placeholder="message" @click="handleClick"  v-model="value" @keyup.enter="handleClickenter(value)" />

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: '',
      message: '搜索我的尖叫好物'
    }
  },
  methods: {
    handleClick () {
      this.$router.push({ path: '/searchview' })
    },
    handleClickenter (value) {
    //   console.log('aaaa')
      // console.log(value)
      // this.valuelist.push(value)
      //   console.log(this.valuelist)
      //   window.localStorage.setItem('search', JSON.stringify(value))
      //   var password=window.encodeURI(value)
      // axios({
      //   url:`/product/search?keyword=${password}&sort=onShelfTime&order=desc&currentPage=1&_=1562634054333`
      // }).then(res=>{
      // })
      this.$store.state.valuelist.push(value)
      console.log(this.$store.state.valuelist)
      this.$router.push({ path: `/Searchresult/new?keyword=${value}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  background: #f5f5f5;
  float: left;
  width: 5.4rem;
  height: 0.6rem;
  line-height: 0.56rem;
  vertical-align: middle;
  background-color: #f5f5f5;
  border-radius: 0.3rem;
  margin-left: 0.2rem;
  margin-bottom: 0.05rem;
  border-radius: .28rem;
  text-indent: 5px;
  input{
      border: none;
      height: .56rem;
      background: #f5f5f5;
      outline: none;
      text-indent: 10px;
  }
}
</style>
