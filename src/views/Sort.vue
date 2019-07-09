<template>
  <div>
    <div class="box">
      <search></search>
      <ul>
          <li><img src="https://m.wowdsgn.com/static/img/furniture.png" alt=""></li>
      </ul>

    </div>
  </div>
</template>

<script>
import search from '@/components/Search'
export default {
  components: {
    search
  }
}
</script>

<style lang="scss" scoped>
    .box{
        background: #fff;
        padding: 10px 10px;
        ul{
            padding: 10px 5px;
        }
        img{
            width: 100%;
        }
    }
</style>
