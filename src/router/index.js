import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const rootRouter=new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
        //判断如果滚动条的位置存在直接返回到当前位置，否者返回到起点
        if (savedPosition) {
            return savedPosition
        } else {
            if (to.hash) {
                return {selector: to.hash}
            }
        }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home')
    },
    {
      path: '/find',
      name: 'Find',
      component: () => import('@/components/Find')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/components/Order')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@/components/Mine')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/components/Detail')
    }
  ]
})
rootRouter.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next()
});
export default rootRouter
