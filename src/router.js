import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 路由规则的第一项与菜单有关联，修改时注意
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/BasicLayout'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('@/pages/home')
        },
        {
          path: '/user',
          name: 'user',
          meta: {
            title: '用户管理'
          },
          redirect: '/user/system',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/user/system',
              name: 'system',
              meta: {
                title: '系统用户'
              },
              component: () => import('@/pages/user'),
            },
            {
              path: '/user/role',
              name: 'role',
              meta: {
                title: '用户角色'
              },
              component: () => import('@/pages/user/role'),
            }
          ]
        },
        {
          path: '/company',
          name: 'company',
          meta: {
            title: '企业管理'
          },
          redirect: '/company/settled',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/company/settled',
              name: 'settled',
              meta: {
                title: '已入驻企业'
              },
              component: () => import('@/pages/company'),
            },
            {
              path: '/company/review',
              name: 'review',
              meta: {
                title: '审核入驻'
              },
              component: () => import('@/pages/company/review'),
            },
            {
              path: '/company/direct',
              name: 'direct',
              meta: {
                title: '直接入驻'
              },
              component: () => import('@/pages/company/direct'),
            }
          ]
        },
        {
          path: '/data',
          name: 'data',
          meta: {
            title: '数据中心'
          },
          redirect: '/data/situation',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/data/situation',
              name: 'situation',
              meta: {
                title: '企业入驻情况'
              },
              component: () => import('@/pages/data'),
            },
            {
              path: '/data/distribution',
              name: 'distribution',
              meta: {
                title: '入驻企业分布图'
              },
              component: () => import('@/pages/data/distribution'),
            }
          ]
        },
        {
          path: '/personal',
          name: 'personal',
          meta: {
            title: '个人中心'
          },
          redirect: '/personal/information',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/personal/information',
              name: 'information',
              meta: {
                title: '个人信息'
              },
              component: () => import('@/pages/personal'),
            },
            {
              path: '/personal/account',
              name: 'account',
              meta: {
                title: '修改密码'
              },
              component: () => import('@/pages/personal/account'),
            },
            {
              path: '/personal/log',
              name: 'log',
              meta: {
                title: '操作记录'
              },
              component: () => import('@/pages/personal/log'),
            }
          ]
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
    // }
  ]
})
