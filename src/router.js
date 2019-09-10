import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      //懒加载
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      //懒加载
      component: () => import('./views/Login.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      //懒加载
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      //懒加载
      component: () => import('./views/Manage.vue')
    },
    {
      path: '/about',
      name: 'about',
      //懒加载
      component: () => import('./views/About.vue')
    },

  ]
})

// //全局路由守卫
// route.beforeEach((to, from, next) => {

//   //执行 
//   // next();
//   const isLogin = localStorage.jwtToken ? true : false;

//   if (to.path == "/login" || to.path == "/register" || to.path == "/") {
//     next();
//   } else {
//     //判断用户是否处于登录状态   登录之后随便跳 ，否则跳回 /login
//     isLogin ? next() : next("/login")
//   }

// })

export default route;
