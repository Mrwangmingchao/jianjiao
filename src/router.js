import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/index/Recommend'
import Furniture from '@/views/index/Furniture'
import Jiaju from '@/views/index/Jiaju'
import Active from '@/views/index/Active'
import Index from '@/views/Index'
import Sort from '@/views/Sort'
import Cart from '@/views/Cart'
import Mine from '@/views/Mine'
import Message from '@/views/Message'
import Pages from '@/views/Pages'
import Topic from '@/views/Topic'
import SearchView from '@/views/SearchView'
import SearchResult from '@/views/SearchResult'
import Item from '@/views/Item'
import New from '@/views/SearchResult/New'
import Price from '@/views/SearchResult/Price'
import Num from '@/views/SearchResult/Num'
// import productGroup from '@/views/productGroup'
import List from '@/views/message/List'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/index',
    component: Index,
    children: [{
      path: 'recommend',
      component: Recommend
    },
    {
      path: 'furniture',
      component: Furniture
    },

    {

      path: 'jiaju',
      component: Jiaju

    },
    {
      path: 'active',
      component: Active
    },
    {
      path: '',
      redirect: 'recommend'
    }
    ]
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/pages/:pageid',
    component: Pages
  },
  {
    path: '/topic/:pageid',
    component: Topic
  },
  {
    path: '/searchview',
    component: SearchView
  },
  {
    path: '/Searchresult',
    component: SearchResult,
    children: [
      {
        path: 'price',
        component: Price
      },
      {
        path: 'num',
        component: Num
      },
      {
        path: 'new',
        component: New
      },
      {
        path: '',
        redirect: 'new'
      }

    ]
  },
  {
    path: '/item/:itemid?/:proid/:proimg/:protit/:sellp/:oripri',
    component: Item,
    name: 'jianjiaoitem'
    // props: true
  },
  {
    path: '*',
    redirect: '/index'
  },
  {
    path: '/list',
    component: List
  }
  ]
})

export default router
