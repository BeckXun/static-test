import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Technology from '@/pages/technology'
import c02 from '@/pages/c02'
import c03 from '@/pages/c03'
import solar from '@/pages/solar'
import factory from '@/pages/factory'

Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  name: 'Home',
	  component: Home
	},
	{
	  path: '/about',
	  name: 'About',
	  component: About
	},
	{
	  path: '/contact',
	  name: 'Contact',
	  component: Contact
	},
	{
	  path: '/technology',
	  name: 'Technology',
	  component: Technology
	},
	{
	  path: '/c02',
	  name: 'c02',
	  component: c02
	},
	{
	  path: '/c03',
	  name: 'c03',
	  component: c03
	},
	{
	  path: '/solar',
	  name: 'solar',
	  component: solar
	},
	{
	  path: '/factory',
	  name: 'factory',
	  component: factory
	},
  ]
})
