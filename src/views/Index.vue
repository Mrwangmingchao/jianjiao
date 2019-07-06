<template>
    <div>
      <div class="search">
        <p>尖叫设计</p>
        <search v-model="value"></search>
      </div>
        <indextabbar></indextabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import search from '@/components/Search'
import indextabbar from '@/components/IndexTabbar'
export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    indextabbar,
    search
  }
}
</script>

<style lang="scss" scoped>
.search{
  height: .5rem;
  padding: 5px 10px;
}
p{
  float: left;
  font-weight: bold;
  font-size: .35rem;
  height: .5rem;
  line-height: .5rem;
}
</style>
