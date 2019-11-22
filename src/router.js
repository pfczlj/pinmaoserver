import Router from "vue-router"
import Vue from 'vue'
import App from './App.vue'
import admin from "./Admin"
import shop from "./Shop"
import navg from"./Navg"
//一级页面
import index from "./shop/Index"
import recommend from "./shop/Recommend"
import search from "./shop/Search"
import person from "./shop/Person"
import chart from "./shop/Chart"
//二级页面
import one from "./navg/One"
import two from "./navg/Two"
//拼猫后台系统界面
import category from "@/components/admin/Category"
import product from "@/components/admin/Product"
import news from "@/components/admin/News"
import myvideo from "@/components/admin/Video"
import adminlogin from "@/components/admin/Login"
//视频管理

Vue.use(Router);
var router = new Router({
	routes: [{
			path: "/",
			redirect: '/index',
			name: "shop",
			components: {
				default: shop
			},
			children: [{
					path: "index",
					component: index,
				},
				{
					path: "recommend",
					component: recommend,
				},
				{
					path: "chart",
					component: chart,
				},
				{
					path: "search",
					component: search,
				},
				{
					path: "person",
					component: person,
				},

			]
		},
		{
			path: "/admin",
			name: "admin",
			component: admin,
			children:[
				{
					path: "1-1",
					component: category,
				},
				{
					path: "2-1",
					component: product,
				},
				{
					path: "3-1",
					component: myvideo,
				},
               	{
					path: "3-3",
					component: news,
				}
			]
		},
		{
				path: "/adminlogin",
				name: "adminlogin",
				component:adminlogin
		},{
		  path:"/navg",
		  name:"navg",
		  component:navg,
		  children:[{
					path: "one",
					component:one,
				},
				{ path: "two",
					component: two,
				},			  
		  ]
		}
	]
});
export default router;
