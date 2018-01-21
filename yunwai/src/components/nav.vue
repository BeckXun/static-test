<template>
  <div class="nav">
	<div class="container">
	  <figure @click="toggle">
		<img :src="icon ? require('../assets/cancle.png') : require('../assets/menu.png')" alt="menu">
	  </figure>
	  <div class="logo">
		Yunwai
		<img src="../assets/logo.png" alt="logo">
	  </div>
	</div>
	<ul :class="['list', icon ? '':'hide']" >
	  <li v-for="data in list" @click="jump(data.router)">{{data.text}}</li>
	</ul>
  </div>
</template>

<script>
export default {
  data() {
	return {
	  icon: false,
	  list: [
		{
		  text: 'Home',
		  router: '/'
		},
		{
		  text: 'About Yunwai',
		  router: '/about'
		},
		{
		  text: 'c02',
		  router: '/c02'
		},
		{
		  text: 'c03',
		  router: '/c03'
		},
		{
		  text: 'Solar Lights',
		  router: '/solar'
		},
		{
		  text: 'Factory',
		  router: '/factory'
		},
		{
		  text: 'Technology',
		  router: '/technology'
		},
		{
		  text: 'Contact Us',
		  router: '/contact'
		},
	  ]
	};
  },
  methods: {
	toggle () {
	  this.icon = !this.icon
	},
	jump (router) {
	  this.$router.push(router)
	}
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: .44rem;
  color: #fff;
  .container {
	z-index: 1;
	position: fixed;
	top: 0;
	width: 100%;
	height: 0.44rem;
	background: #333333;
	display: flex;
	justify-content: space-between;
	align-items: center;
	figure {
	  height: 100%;
	  padding: 0 0.2rem;
	  display: flex;
	  align-items: center;
	  img {
		width: 0.22rem;
	  }
	}
	.logo {
	  font-size: 0.16rem;
	  line-height: 0.44rem;
	  display: flex;
	  align-items: center;
	  img {
		width: 0.48rem;
		margin: 0 0.2rem 0 0.08rem;
	  }
	}
  }
  .list {
	z-index: 1;
	position: fixed;
	top: .44rem;
	width: 100%;
	background: #333333;
	transition: top .3s ease-out;
	li {
	  padding-left: .2rem;
	  height: .44rem;
	  line-height: .44rem;
	  font-size: .14rem;
	  border-top: 1px solid #909090;
	}
  }
  .hide {
	top: -3.6rem;
  }
}
</style>
