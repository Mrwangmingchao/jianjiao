<template>
  <div id="box">
    <header>我</header>

    <div class="userinfo">
      <img
        src="https://img.wowdsgn.com/product/images/38ac71d9-0886-427d-82d8-65e6b15c61f2_2dimension_800x800.jpg?imageslim"
      />
      <p>name</p>
      <span>&gt;</span>
    </div>

    <ul class="order-all">
      <li>
        <a>全部订单</a>
      </li>
      <li>
        <span>图标</span>
        <p>
          待付款
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <span>图标</span>
        <p>
          待发货
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <span>图标</span>
        <p>
          待收货
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <span>图标</span>
        <p>
          带评论
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <span>图标</span>
        <p>
          退换货
          <span>&gt;</span>
        </p>
      </li>
    </ul>

    <ul class="another">
      <li>
        <p>
          我的收藏
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          我的礼券
          <span>&gt;</span>
        </p>
      </li>
      <li>
        <p>
          客服电话
          <em>周一至周五9:00-16:30</em>
          <span>&gt;</span>
        </p>
      </li>
    </ul>

    <button> 退出登录 </button>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#box {
    margin-bottom: 1rem;
  header {
    height: 0.88rem;
    background: white;
    font-size: 0.34rem;
    text-align: center;
    line-height: 0.88rem;
    font-weight: 600;
  }

  .userinfo {
    height: 1.4rem;
    background: white;
    margin: 0.3rem 0;
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid #000;
      margin-left: 0.4rem;
    }
    > p {
      margin-left: 0.3rem;
    }
    > span {
      right: 0.5rem;
      position: absolute;
      right: 0.5rem;
    }
  }

  .order-all {
    background: white;
    li:nth-of-type(1) {
      border-bottom: 1px solid #ccc;
      a {
        margin-left: 0.4rem;
      }
    }
    li {
      height: 1rem;
      line-height: 1rem;
      position: relative;
      > p {
        display: inline-block;
        width: 80%;
        margin-left: 1.4rem;
        color: #666;
        font-size: .12rem;

        border-bottom: 1px solid #ccc;
        > span:nth-of-type(1) {
          position: absolute;
          right: 0.5rem;
        }
      }
      > span:nth-of-type(1) {
        position: absolute;
        left: 0.5rem;
      }
    }
  }

  .another {
    margin-top: 0.5rem;
    background: white;
    li {
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #ccc;
      > p {
        margin-left: 0.3rem;
        position: relative;
        > em {
          font-style: normal;
          font-size: 0.14rem;
          color: #999;
          position: absolute;
          right: 1rem;
        }
        > span {
          position: absolute;
          right: 0.5rem;
        }
      }
    }
  }
  button{
      height: 1rem;
      margin-top: .6rem;
      width: 100%;
      background: white;
      border: 0;
      color: red;
  }
}
</style>
