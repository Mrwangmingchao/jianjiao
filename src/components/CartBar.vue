<template>
  <div>
    <ul>
      <router-link to="/mycart/all" tag="li" activeClass="myactive">全部</router-link>
      <router-link to="/mycart/obligation" tag="li" activeClass="myactive">待付款</router-link>
      <router-link to="/mycart/shipped" tag="li" activeClass="myactive">代发货</router-link>
      <router-link to="/mycart/received" tag="li" activeClass="myactive">待收货</router-link>
      <router-link to="/mycart/commented" tag="li" activeClass="myactive">带评论</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  background: #fff;
}
ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  li {
      flex:1;
    text-align: center;
    font-size: 0.28rem;
    padding: 0.2rem 0.2rem;
  }
  .myactive {
    border-bottom: 3px solid #000;
  }
}
</style>
