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
  mounted () {
    axios.get('http://localhost:3000/profile').then(res => {
      this.datalist = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%
    }
</style>
