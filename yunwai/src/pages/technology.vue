<template>
	<div class="main">

		<my-nav></my-nav>

		<img src="../assets/technology/banner.jpg" alt="" class="banner">

		<ul>
			<li v-for="(data, index) in list">
				<my-title :text="data.title"></my-title>
				<figure>
					<img :src="require('../assets/technology/pic' + index + '.png')" alt="part">
				</figure>
				<p v-for="text in data.cont">{{text}}</p>
			</li>
		</ul>

		<img src="../assets/technology/group.png" alt="" class="banner">

		<my-footer></my-footer>
	</div>
</template>

<script>
import myNav from '../components/nav'
import myFooter from '../components/footer'
import myTitle from '../components/title'
export default {
	components: {
		myNav,
		myFooter,
		myTitle,
	},
	data () {
		return {
			list: [
				{
					title: 'Powertrain',
					cont: [
						'Motor efficiency is 96%',
						'Reduce weight by 50%',
						'Failure rate is lower than 60 PPM (Parts Per Million)'
					],
				},
				{
					title: 'Transmission',
					cont: [
						'Transmission efficiency is 98%',
						'Noise is lower than 72dB',
						'Designed to last 300000km'
					],
				},
				{
					title: 'Electrical Control',
					cont: [
						'100N·m max torque, strong power output.',
						'Effectively reduce electricity consumption',
					],
				},
				{
					title: 'Lightweight Autobody ',
					cont: [
						'Lost 15% of weight and increase strength',
						'30% main performance boost (range and climbing capacity)',
						'Pass the crash test'
					],
				},
				{
					title: 'Trailing Arm Independent Suspension',
					cont: [
						'Use new materials and new structures',
						'Greatly improve the comfort',
						'Lightweight design reduces weight by 12kg'
					],
				},
				{
					title: 'Five Link Suspension',
					cont: [
						'Optimized efficiency of power system',
						'Great carrying capacity',
					],
				},
			],
		}
	}
}
</script>

<style lang="scss" scoped>
	ul {
		padding: .48rem .2rem 0;
		li {
			padding-bottom: .4rem;
			h3 {
				margin-bottom: .2rem;
			}
			figure {
				width: 3.35rem;
				height: 2.4rem;
				box-shadow: 0 0 .06rem 0 rgba(0,0,0,0.30);
				border-radius: .04rem;
				position: relative;
				margin-bottom: .08rem;
				img {
					width: 3.12rem;
					height: 2.1rem;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%)
				}
			}
			p {
				position: relative;
				padding-left: .15rem;
				font-size: .14rem;
				line-height: .19rem;
				margin-top: .04rem;
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: .06rem;
					width: .07rem;
					height: .07rem;
					border-radius: 50%;
					background: #EFB336;
				}
			}
		}
	}
</style>
