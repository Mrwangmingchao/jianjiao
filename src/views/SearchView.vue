<template>
  <div>
    <keep-alive>
      <search v-model="value"></search>
    </keep-alive>
    <div class="all">
      <div class="head">
        <search class="search" v-model="value"></search>
        <i class="iconfont icon-tabhome" @click="$router.push({path:'/index'})"></i>
      </div>
      <div class="searchCon">
        <div class="hot">
          <p class="hotTitle">热门搜索</p>
          <div
            class="keyword"
            v-for="data in searchlist"
            :key="data.hortsearch"
            @click="handleClick(data.hortsearch)"
          >
            <span class="searchHotkeyword">{{data.hortsearch}}</span>
          </div>
        </div>
        <div class="history">
          <div class="historyTop">
            <p class="historyTitle">历史搜索</p>
            <div class="cleanSearchDiv">
              <p class="cleanSearchIcon" @click="handleClickDel()">×</p>
            </div>
          </div>
          <div class="searchHistory">
            <div class="keyword">
              <span
                class="searchHotkeyword"
                v-for=" (his,index) in this.$store.state.valuelist"
                :key="index"
              >{{his}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/components/Search'
import axios from 'axios'

export default {
  data () {
    return {
      searchlist: '',
      value: ''
    }
  },
  methods: {
    handleClickDel () {
      this.$store.state.valuelist = []
    },
    handleClick (id) {
      this.$store.state.valuelist.push(id)
      this.value = id
      this.$router.push(`/searchresult?keyword=${id}`)
    }
  },
  mounted () {
    axios('./data.json').then(res => {
      this.searchlist = res.data.search
    })
  },
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
html,
body {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
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
    .search {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    i {
      float: right;
      font-size: 0.4rem;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .searchCon {
    margin-top: 0.1rem;
    font-size: 0.24rem;
    .hot {
      padding: 0.36rem 0.32rem 0rem;
      .hotTitle {
        color: #808080;
        margin-bottom: 0.3rem;
      }
      .keyword {
        display: inline-block;
        margin-bottom: 0.6rem;
        .searchHotkeyword {
          font-size: 0.24rem;
          color: #000;
          text-align: center;
          padding: 0.2rem 0.3rem;
          background-color: #f5f5f5;
          margin-right: 0.2rem;
        }
      }
    }
    .history {
      background: #f5f5f5;
      padding: 0.36rem 0.32rem 0rem;
      .historyTop {
        .historyTitle {
          color: #808080;
          width: 85%;
          display: inline-block;
        }
        .cleanSearchDiv {
          width: 13.5%;
          display: inline-block;
          .cleanSearchIcon {
            margin-left: 0.6rem;
            width: 0.28rem;
            height: 0.28rem;
          }
        }
      }
      .searchHistory {
        background: #f5f5f5;
        .keyword {
          display: inline-block;
          margin-bottom: 0.6rem;
          > span {
            margin-top: 0.3rem;
            float: left;
            display: block;
            font-size: 0.24rem;
            color: #000;
            text-align: center;
            padding: 0.2rem 0.3rem;
            background-color: #fff;
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
