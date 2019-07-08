<template>
  <div>
    <ul>
      <router-link to="/index/recommend" tag="li" activeClass="myactive">推荐</router-link>
      <router-link to="/index/furniture" tag="li" activeClass="myactive">家具</router-link>
      <router-link to="/index/jiaju" tag="li" activeClass="myactive">家居</router-link>
      <router-link to="/index/active" tag="li" activeClass="myactive">活动</router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    font-size: 0.28rem;
  }
}
</style>
