<template>
  <div>
    <headbar>
      <h3>我的订单</h3>
    </headbar>
    <cartbar></cartbar>
    <router-view></router-view>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'
import cartbar from '@/components/CartBar'
export default {
  beforeMount () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  components: {
    headbar,
    cartbar
  }
}
</script>
