<template>
  <div>
        <headbar>
            <h3> 退换货列表 </h3>
        </headbar>
  </div>

</template>

<script>
import headbar from '@/components/HeadBar'

export default {
  beforeMount () {
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
