<template>
  <div>
      <headbar>
          <h3> 我的收藏 </h3>
      </headbar>
      <favoritebar></favoritebar>
       <router-view></router-view>
  </div>
</template>

<script>
import headbar from '@/components/HeadBar'
import favoritebar from '@/components/Favoritebar'
export default {
  beforeMount () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  components: {
    headbar,
    favoritebar
  }
}
</script>
<style lang="scss" scoped>
</style>
