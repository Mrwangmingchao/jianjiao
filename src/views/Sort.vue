<template>
  <div>
    <div class="box">
      <search></search>
      <ul>
        <li>
          <img src="https://m.wowdsgn.com/static/img/furniture.png" alt />
        </li>
        <li v-for="data in datalist" :key="data.id" class="sort" @click="handleclick(data.id,data.sort)">{{data.sort}} <i class="iconfont icon-arrow-right"></i></li>
        <li><img src="https://m.wowdsgn.com/static/img/household.png" alt=""></li>
        <li v-for="item in itemlist" :key="item.id" class="sort" @click="handleclick(item.id,item.sort)">{{item.sort}}<i class="iconfont icon-arrow-right"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import search from '@/components/Search'
import axios from 'axios'
export default {
  components: {
    search
  },
  data () {
    return {
      datalist: [],
      itemlist: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/sort').then(res => {
      this.datalist = res.data.slice(0, 7)
      this.itemlist = res.data.slice(7)
    })
  },
  methods: {
    handleclick (id, name) {
      this.$router.push({ name: `sortitem`, params: { sortItemId: id, name: name } })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background: #fff;
  padding: 10px 10px;
  ul {
    padding: 10px 5px;
  }
  img {
    width: 100%;
    margin-top: 10px;
  }
  ul {
    padding-bottom: 80px;
    .sort {
      line-height: 0.98rem;
      font-size: 0.3rem;
      color: #000;
      border-bottom: 1px solid #eaeaea;
      text-indent: 0.3rem;
      font-weight: bold;
    }
  }
}
i{
  float: right;
  font-size: 20px;
  font-weight: 100;
  color: #999;
  margin-right: .1rem
}
</style>
