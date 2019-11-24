import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Collection from '@/views/Collection.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Article from '@/views/Article.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import User from '@/views/User.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Sign from '@/views/Sign.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
	component: Nav,
	children:[
		{
		path:'/',
		redirect:'index',
		
	},
	{
		path:'index',
		component:Index,
	},
	{
		path:'a',
		component:Article
	},
	{
		path:'c',
		component:Collection
	},
	{
		path:'u',
		component:User
	},
	{
	path:'articleDetail',
	component:ArticleDetail	
	},
  ]
  },
  {
   path : '/sign',
   component:Sign,
   children:[{
	   path:"/",
	   router:Nav
   }]
  }
]

const router = new VueRouter({
  routes
})

export default router