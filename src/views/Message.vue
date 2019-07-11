<template>
  <div id="box">
    <headbar>
      <h3>消息中心</h3>
    </headbar>

    <div>
      <div class="messageInfor">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2607934346,333009042&fm=26&gp=0.jpg"
          />
          <p>尖叫精选</p>
          <span>&gt;</span>
        </div>

        <div class="messageInforRihgt">
          <div>
            <p class="messageContent">实测 | 手冲咖啡没那么难！用这套简单到极致的咖啡壶，菜鸟也能5分钟搞定</p>
            <p class="messageFlag">•</p>
            <p class="messageTime">2天前</p>
          </div>
        </div>
      </div>

      <div class="messageInfor">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2607934346,333009042&fm=26&gp=0.jpg"
          />
          <p>系统通知</p>
          <span>&gt;</span>
        </div>

        <div class="messageInforRihgt">
          <div>
            <p class="messageContent">欢迎加入尖叫设计，我们已将9张优惠券送入您的账户中，请查收</p>
            <p class="messageFlag">•</p>
            <p class="messageTime">3小时前</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.messageInfor {
  margin-bottom: 0.4rem;
  > div:nth-of-type(1) {
    height: 1.2rem;
    background: white;
    display: flex;
    align-items: center;
    > img {
      height: 0.8rem;
      width: 0.8rem;
      margin-left: 0.3rem;
    }
    > p {
      margin-left: 0.2rem;
      position: relative;
    }
    > span {
      position: absolute;
      right: 0.5rem;
    }
  }

  > div:nth-of-type(2) {
    background: white;
    >div{
        margin-left:1.2rem ;
        margin-right: .6rem;
        position: relative;
        >p:nth-of-type(1){
            border-top: 1px solid #ccc;
            padding-top: .3rem;
            color: #999;
        }
        >p:nth-of-type(2){
            position: absolute;
            right: 0rem;
            top:0rem;
            font-size: .6rem;
            color: yellow;
        }
        >p:nth-of-type(3){
            padding-bottom: .4rem;
             color: #999;
        }
    }
  }
}
</style>

<script>
import headbar from '@/components/HeadBar'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {

  },
  components: {
    headbar
  }
}
</script>
