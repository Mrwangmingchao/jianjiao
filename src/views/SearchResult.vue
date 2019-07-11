<template>
  <div>
      <div class="search">
    <search v-model="value"></search>
        <router-link to="/searchview" tag="p" class="cancel" >取消</router-link>
        <router-link to="/index" tag="p" class="backindex">返回</router-link>
        <tabbar class="isHidden"></tabbar>
      </div>
      <ul>
        <router-link :to="'/Searchresult/new?keyword='+this.word" tag="li" activeClass="myactive">上新</router-link>
        <router-link :to="'/Searchresult/num?keyword='+this.word" tag="li" activeClass="myactive">销量</router-link>
        <router-link :to="'/Searchresult/price?keyword='+this.word" tag="li" activeClass="myactive">价格</router-link>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import search from '@/components/Search'
import tabbar from '@/components/Tabbar'
export default {
  data () {
    return {
      value: '',
      word: ''
    }
  },
  mounted () {
    this.word = this.$router.history.current.query.keyword
  },
  components: {
    search,
    tabbar
  },
  beforeCreate () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  }
}
</script>

<style lang="scss" scoped>
html,body{
    background:white !important;
}
div{
    background:white

}
.search{
    height: .5rem;
    padding: .25rem .1rem;
    background: #fff;
}
p{
    float: left;
    font-weight: bold;
    font-size: .35rem;
    height: .5rem;
    line-height: .5rem;
}
.cancel {
    font-size: .15rem;
    text-decoration: none;
    color: black;
    padding-left: 0.2rem
}
.backindex{
    font-size: .15rem;
    text-decoration: none;
    color: black;
    padding-left: 0.35rem;

}
.myactive{
    border-bottom: 3px solid #000;
    color: black;
}
ul{
    background: #fff;
    width: 100%;
    border-top:.01rem solid #F5F5F5;;
    border-bottom:.01rem solid #F5F5F5;;
    display: flex;
    justify-content: space-around;
    color: #808080;
    height: .7rem;
    line-height: .6rem;
    li{
    text-align:center;
    padding:.05rem .2rem
    }
}
.isHidden{
    display: none
}
</style>
