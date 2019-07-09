<template>
  <div>
    <div class="all">
      <div class="head">
        <search class="search"></search>
        <i class="iconfont icon-tabhome" @click="$router.push({path:'/index'})"></i>
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/components/Search'

export default {
  beforeCreate () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  components: {
    search
  }
}
</script>

<style lang="scss" scoped>
.all {
  height: 667px;
  background: #fff;
  .head {
    background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    box-sizing: border-box;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    .search{
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }
    i{
        float: right;
        font-size: .4rem;
        font-weight: bold;
        margin-right: 10px;
    }
  }
}
</style>
