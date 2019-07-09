<template>
  <div>
      <div class="search">
    <search v-model="value"></search>

      <router-link to="/searchview" tag="p" class="cancel" >取消</router-link>
      <router-link to="/index" tag="p" class="backindex">返回</router-link>
        <tabbar class="isHidden"></tabbar>
      </div>
      <ul>
          <router-link to="/Searchresult/new" tag="li" activeClass="myactive">上新</router-link>
          <router-link to="/Searchresult/num" tag="li" activeClass="myactive">销量</router-link>
          <router-link to="/Searchresult/price" tag="li" activeClass="myactive">价格</router-link>
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
      value: ''

    }
  },
  methods: {
    hadleclick () {

    }
  },
  components: {
    search,
    tabbar
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
  padding: 5px 10px;
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
    padding-left: 0.1rem
}
.backindex{
        font-size: .15rem;
    text-decoration: none;
    color: black;
    padding-left: 0.3rem;

}
.myactive{
    border-bottom: 3px solid #000;
    color: black;
}
ul{
      background: #fff;
    width: 100%;
    border-top:.01rem solid #ccc;
    border-bottom:.01rem solid #ccc;
    display: flex;
    justify-content: space-around;
    color: #ccc;
    height: .6rem;
    li{
        text-align:center;
        padding:.05rem .2rem
    }
}
.isHidden{
    display: none
}
</style>
