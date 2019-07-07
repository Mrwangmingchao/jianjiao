<template>
  <div>
    <ul>
      <router-link to="/index" tag="li" activeClass="myactive">
        <i class="iconfont icon-tabhome"></i>首页
      </router-link>
      <router-link to="/sort" tag="li" activeClass="myactive">
        <i class="iconfont icon-classifi"></i>分类
      </router-link>
      <router-link to="/cart" tag="li" activeClass="myactive">
        <i class="iconfont icon-gouwuche"></i>购物车
      </router-link>
      <router-link to="/message" tag="li" activeClass="myactive">
        <i class="iconfont icon-xinfeng"></i>消息
      </router-link>
      <router-link to="/mine" tag="li" activeClass="myactive">
        <i class="iconfont icon-wo"></i>我
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 0.7rem;
  border-top: 1px solid #eee;
  padding: 5px 0;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    font-size: 0.2rem;
    i {
      display: block;
    }
  }
  .myactive {
    font-weight: 500;
  }
}
</style>
