<template>
  <div>
    <ul>
      <router-link to="/favorite/brand" tag="li" activeClass="myactive">
        <a>单品</a>
      </router-link>
      <router-link to="/favorite/designer" tag="li" activeClass="myactive">
        <a>品牌</a>
      </router-link>
      <router-link to="/favorite/single" tag="li" activeClass="myactive">
        <a>设计师</a>
      </router-link>
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
    flex: 1;
    text-align: center;
    font-size: 0.28rem;
    height: 0.8rem;
    padding: 0 0.2rem;
    > a {
      text-decoration: none;
      color: #000;
      height: 100%;
      display: inline-block;
      padding: 0 0.3rem;
      line-height: 0.8rem;
      box-sizing: border-box;
    }
  }
  .myactive {
    > a {
      border-bottom: 3px solid #000;
    }
  }
}
</style>
