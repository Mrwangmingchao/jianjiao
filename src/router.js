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
import productGroup from '@/views/productGroup'
import List from '@/views/message/List'
import userCenterPage from '@/views/userCenterPage'
import New from '@/views/SearchResult/New'
import Price from '@/views/SearchResult/Price'
import Num from '@/views/SearchResult/Num'
import SortItem from '@/views/SortItem'
import mirrorofhalve from '@/views/mirrorofhalve'
import Mycart from '@/views/Mycart'
import All from '@/views/Mycart/All'
import Obligation from '@/views/Mycart/Obligation'
import Shipped from '@/views/Mycart/Shipped'
import Received from '@/views/Mycart/Received'
import Commented from '@/views/Mycart/Commented'
import Exchange from '@/views/Exchange'
import Favorite from '@/views/Favorite'
import Single from '@/views/Favorite/Single'
import Designer from '@/views/Favorite/Designer'
import Brand from '@/views/Favorite/Brand'
import Register from '@/views/Register'
import Login from '@/views/Login'

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
    component: Message,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mycart',
    component: Mycart,
    children: [{
      path: 'all',
      component: All
    },
    {
      path: 'obligation',
      component: Obligation
    },
    {
      path: 'shipped',
      component: Shipped
    },
    {
      path: 'received',
      component: Received
    },
    {
      path: 'commented',
      component: Commented
    },
    {
      path: '',
      redirect: 'obligation'
    }
    ]
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/favorite',
    component: Favorite,
    children: [{
      path: 'single',
      component: Single
    },
    {
      path: 'designer',
      component: Designer
    },
    {
      path: 'brand',
      component: Brand
    },
    {
      path: '',
      redirect: 'brand'
    }
    ] },
  {
    path: '/mine',
    component: Mine,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/exchange',
    component: Exchange
  },
  {
    path: '/productGroup/:Groupid',
    component: productGroup
  },
  {
    path: '/mirrorofhalve',
    component: mirrorofhalve
  },
  {
    path: '/sort',
    component: Sort,
    props: true
  },
  {
    path: '/sortitem/:sortItemId/:name',
    name: 'sortitem',
    component: SortItem
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
    children: [{
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
      redirect: 'all'
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
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/index'
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/userCenterPage',
    component: userCenterPage
  }
  ]
})

export default router
