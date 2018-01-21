<template>
	<div class="main" @touchmove.stop.prevent>
		<my-nav></my-nav>
		<div class="header" :style="background">
			<img src="../assets/logo.png" alt="logo">
			<p>Beijing Yunwai Automobile Technology Co., Ltd.</p>
		</div>
		<ul class="cont">
			<li v-for="data in list">
				<img :src="data.icon" alt="icon">
				<h4>{{data.title}}</h4>
				<p>{{data.cont}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import myNav from "../components/nav"
export default {
	components: {
		myNav
	},
	data () {
		return {
			background: {
				backgroundImage: `url(${require('../assets/contact/bg.png')})`
			},
			list: [
				{
					icon: require('../assets/contact/phone.png'),
					title: 'Tel',
					cont: '010-57196808',
				},
				{
					icon: require('../assets/contact/web.png'),
					title: 'Web',
					cont: 'http://www.yunwai.tech',
				},
				{
					icon: require('../assets/contact/email.png'),
					title: 'Email',
					cont: 'dxh@yunwai.tech',
				},
				{
					icon: require('../assets/contact/address.png'),
					title: 'Add',
					cont: '30117, Floor 1, Galaxy SOHO, Dongcheng District, Beijing, China',
				},
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.main {
	height: 100%;
	overflow: hidden;
	.header {
		background-size: 100% 100%;
		padding: .89rem 0 .6rem;
		img {
			display: block;
			width: .79rem;
			margin: 0 auto .12rem;
		}
		p {
			text-align: center;
			font-size: .14rem;
			color: #fff;
			line-height: .18rem;
		}
	}
	.cont {
		padding: .42rem .2rem .34rem;
		li {
			position: relative;
			padding-left: .54rem;
			margin-bottom: .2rem;
			img {
				position: absolute;
				left: 0;
				top: 0;
				width: .44rem;
			}
			h4,p {
				font-size: 14px;
				color: #000000;
				line-height: 20px;
			}
			h4 {
				font-weight: bold;
			}
		}
	}
}
</style>