<template>
    <div>
        <ul>
        <router-link to="/index" tag="li" activeClass="myactive">首页</router-link>
        <router-link to="/sort" tag="li" activeClass="myactive">分类</router-link>
        <router-link to="/cart" tag="li" activeClass="myactive">购物车</router-link>
        <router-link to="/message" tag="li" activeClass="myactive">消息</router-link>
        <router-link to="/mine" tag="li" activeClass="myactive">我</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul{
display: flex;
position: fixed;
width: 100%;
left: 0;
bottom: 0;
li{
    flex: 1;
    text-align: center;
    font-size: 0.28rem
}
}
</style>
