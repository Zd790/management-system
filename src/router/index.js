import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect:'/index',
    component: () => import('../views/Layout.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue'),
      },
      {
        path: '/account/all',
        name: 'account_all',
        meta:{bread:["账户管理","所有人员"]},
        component: () => import('@/views/account/all.vue'),
      },
      {
        path: '/account/business',
        name: 'account_business',
        meta:{bread:["账户管理","业务人员"]},
        component: () => import('@/views/account/business.vue'),
      },
      {
        path: '/account/audit',
        name: 'account_audit',
        meta:{bread:["账户管理","审核人员人员"]},
        component: () => import('@/views/account/audit.vue'),
      },
      {
        path: '/account/risk',
        name: 'account_risk',
        meta:{bread:["账户管理","风控经理"]},
        component: () => import('@/views/account/risk.vue'),
      },
      {
        path: '/account/admin',
        name: 'account_admin',
        meta:{bread:["账户管理","管理员"]},
        component: () => import('@/views/account/admin.vue'),
      },
      {
        path: '/product/all',
        name: 'product_all',
        meta:{bread:["产品管理","全部产品"]},
        component: () => import('@/views/product/all.vue'),
      },
      {
        path: '/product/carConsumption',
        name: 'product_carConsumption',
        meta:{bread:["产品管理","汽车消费"]},
        component: () => import('@/views/product/carConsumption.vue'),
      },
      {
        path: '/product/estate',
        name: 'product_eatste',
        meta:{bread:["产品管理","房产消费"]},
        component: () => import('@/views/product/estate.vue'),
      },
      {
        path: '/product/mortgage',
        name: 'product_mortgage',
        meta:{bread:["产品管理","抵押贷款"]},
        component: () => import('@/views/product/mortgage.vue'),
      },
      {
        path: '/product/details',
        name: 'product_details',
        meta:{bread:["产品管理","全部产品","产品详情"]},
        component: () => import('@/views/product/details.vue'),
      },
      {
        path: '/orders/all',
        name: 'orders_all',
        meta:{bread:["订单管理","所有订单"]},
        component: () => import('@/views/orders/all.vue'),
      },
      {
        path: '/orders/create',
        name: 'orders_create',
        meta:{bread:["订单管理","新建订单"]},
        component: () => import('@/views/orders/create.vue'),
      },
      {
        path:'/customer/info',
        name:'customer_info',
        meta:{bread:["客户管理","基本信息"]},
        component: () => import('@/views/customer/info.vue'),
      },
      {
        path:'/customer/detail',
        name:'customer_detail',
        meta:{bread:["客户管理","基本信息","信息详情"]},
        component: () => import('@/views/customer/detail.vue'),
      },
      {
        path: '/todo',
        name: 'Todo',
        meta:{bread:["待办事项"]},
        component: () => import('@/views/todo/Todo.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/My.vue')
  },
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router
