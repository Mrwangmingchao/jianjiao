<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
export default {
  components: {
    tabbar
  },
  computed: {
    ...mapState(['isTabbarShow'])
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
  width: 100%;
}
body{
  background: #f5f5f5;
}
li{
  list-style: none;
}

div{
    font-size: 0.28rem
}

</style>
