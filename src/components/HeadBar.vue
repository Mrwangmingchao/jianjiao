<template>
  <div>
    <div class="head">
      <i class="iconfont icon-tabhome" @click="backIndex"></i>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backIndex () {
      this.$router.push({ path: `/index` })
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  box-sizing: border-box;
  position: relative;
  padding: 0rem 0.2rem 0rem 0.2rem;
  border-bottom: 1px solid #f5f5f5;
  i {
    display: inline-block;
    width: 0.52rem;
    margin-top: 0.06rem;
    margin-bottom: 0.06rem;
    vertical-align: middle;
    font-size: .4rem;
    font-weight: bold;
  }
  h3{
      position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 0.34rem;
    margin: 0;
    padding: 0;
    border: 0;
  }
}
</style>
