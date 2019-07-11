<template>
  <div>
    <div class="all">
      <div class="head">
        <search class="search"></search>
        <i class="iconfont icon-tabhome" @click="$router.push({path:'/index'})"></i>
      </div>
      <div class="searchCon">
        <div class="hot">
          <p class="hotTitle">热门搜索</p>
          <div class="keyword"><span class="searchHotkeyword">尖叫实验室</span></div>
          <div class="keyword"><span class="searchHotkeyword">暖手宝</span></div>
          <div class="keyword"><span class="searchHotkeyword">沙发</span></div>
          <div class="keyword"><span class="searchHotkeyword">杯子</span></div>
          <div class="keyword"><span class="searchHotkeyword">餐具</span></div>
          <div class="keyword"><span class="searchHotkeyword">茶具</span></div>
          <div class="keyword"><span class="searchHotkeyword">吊灯</span></div>
          <div class="keyword"><span class="searchHotkeyword">厨房</span></div>
          <div class="keyword"><span class="searchHotkeyword">儿童</span></div>
          <div class="keyword"><span class="searchHotkeyword">HAY</span></div>
          <div class="keyword"><span class="searchHotkeyword">Arabia</span></div>
          <div class="keyword"><span class="searchHotkeyword">家饰</span></div>
          <div class="keyword"><span class="searchHotkeyword">收纳 </span></div>
          <div class="keyword"><span class="searchHotkeyword">床上用品</span></div>
          <div class="keyword"><span class="searchHotkeyword">旅行</span></div>
        </div>
        <div class="history">
          <div class="historyTop">
            <p class="historyTitle">历史搜索</p>
            <div class="cleanSearchDiv">
              <p class="cleanSearchIcon">删除</p>
            </div>
          </div>
          <div class="searchHistory">
            <div class="keyword">
              <span class="searchHotkeyword"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/components/Search'

export default {
  beforeCreate () {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar', true)
  },
  components: {
    search
  }
}
</script>

<style lang="scss" scoped>
.all {
  height: 6.67rem;
  background: #fff;
  .head {
    background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    box-sizing: border-box;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    .search{
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }
    i{
        float: right;
        font-size: .4rem;
        font-weight: bold;
        margin-right: 10px;
    }
  }
  .searchCon{
    margin-top: 0.1rem;
    font-size: 0.24rem;
    .hot{
      padding: 0.36rem 0.32rem 0rem;
      .hotTitle{
      color: #808080;
      margin-bottom: 0.3rem;
      }
      .keyword{
      display: inline-block;
      margin-bottom: 0.6rem;
        .searchHotkeyword{
        font-size: 0.24rem;
        color: #000;
        text-align: center;
        padding: 0.2rem 0.3rem;
        background-color: #F5F5F5;
        margin-right: 0.2rem;
        }
      }
    }
    .history{
        padding: 0.36rem 0.32rem 0rem;
        .historyTop{
          .historyTitle{
          width: 85%;
          display: inline-block;
          }
          .cleanSearchDiv{
          width: 13.5%;
          display: inline-block;
          .cleanSearchIcon{
          margin-left: 0.6rem;
          width: 0.28rem;
          height: 0.28rem;
          }
          }
        }
        .searchHistory{
          .keyword{
          display: inline-block;
          margin-bottom: 0.6rem;
            >span{
            font-size: 0.24rem;
            color: #000;
            text-align: center;
            padding: 0.2rem 0.3rem;
            background-color: #F5F5F5;
            margin-right: 0.2rem;
          }
          }
        }
    }
  }
}
</style>
