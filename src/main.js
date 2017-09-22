/* eslint-disable */
import '../static/css/bootstrap/stylesheets/_bootstrap.scss';
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store';
// directive
import './directive/custom-directive.js';
// init
Vue.use(VueRouter)
Vue.use(Vuex)
// page
import Hello from './pages/Hello.vue'
import C2F from './pages/CtoF.vue'
import App from './App.vue'
import learnComponent from './pages/learnComponent.vue';
import count from './pages/count.vue';
import todo from './pages/todo';
import shop from './pages/shop';
import cart from './pages/cart.vue';
import open1999 from './pages/open1999.vue';
import login from './pages/login.vue';
const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: { requiresAuth: true }
    },
    {
      path: '/CtoF',
      name: 'C2F',
      component: C2F,
      meta: { requiresAuth: true }
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/count',
      name: 'count',
      component: count,
      meta: { requiresAuth: true }
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
      meta: { requiresAuth: true }
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: { requiresAuth: false },
      children: [  // 將會把對應到 path 的 component 放到 shop 的 <router-view />
        {
          path: '/cart',
          name: 'cart',
          component: cart,
          meta: { requiresAuth: false }
        },
        {
          path: '/todo',
          name: 'todo',
          component: todo,
          meta: { requiresAuth: false }
        },
        {
          path: '/hello',
          name: 'hello',
          component: Hello,
          meta: { requiresAuth: false }
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { requiresAuth: true }
    },
    {
      path: '/open1999',
      name: 'open1999',
      component: open1999,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requiresAuth: false },
    },
    {
      path: '/multiple',
      name: 'multiple',
      // 注意！多重顯示為設定：component`s`
      components: {
        viewLeft: shop,
        viewRight: cart,
      },
      meta: { requiresAuth: false },
    },
    { path: '/*', redirect: '/multiple' }
  ]
});
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath);
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    // 如果沒有 token 
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      // 轉跳到 login page
      next({ path: '/login' });
    } else {
      next(); // 往下繼續執行
    }
  } else {
    next(); // 往下繼續執行
  }
});

new Vue({
  el: '#app', //<<綁在index.html body的ID
  // router 掛載設定
  router,
  store,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h(App)
});

