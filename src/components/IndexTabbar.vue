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
div {
  background: #fff;
}
ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  li {
    text-align: center;
    font-size: 0.28rem;
    margin: 10px 0.2rem;
    padding: 0.2rem 0.2rem;
  }
  .myactive {
    border-bottom: 3px solid #000;
  }
}
</style>
