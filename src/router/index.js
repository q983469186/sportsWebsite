import Vue from 'vue'
import Router from 'vue-router'
import index  from '@/components/index/'
Vue.use(Router)

export default new Router({
	routes: [
		{//首页
			path: '/',
			name: 'start',
			component: resolve=>(require(["@/components/start/"],resolve))
		},
		{
			path: '/home',
			name: 'index',
			component: resolve=>(require(["@/components/index/"],resolve)),
			children:[
				{//商品
					path: '/goods',
					name: 'goods',
					component: resolve=>(require(["@/components/goods/"],resolve))
				},
				{//动态广场
					path: '/square',
					name: 'square',
					component: resolve=>(require(["@/components/square/"],resolve))
				},
				{//实用工具
					path: '/tools',
					name: 'tools',
					component: resolve=>(require(["@/components/tools/"],resolve))
				},
				{//约会
					path: '/date',
					name: 'date',
					component: resolve=>(require(["@/components/date/"],resolve))
				}
			]
		}
	]
})
