<template>
  <div>
      <img :src="data.src" v-for="data in datalist" :key="data.id">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  beforeMount () {
    this.$store.commit('HideTabbar', false)
  },
  mounted () {
    axios.get('./data.json').then(res => {
      this.datalist = res.data.profile
    })
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%
    }
</style>
