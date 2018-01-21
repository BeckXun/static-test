<template>
	<div class="main">
		<my-nav></my-nav>
		<img class="logo" src="../assets/about/logo.png" alt="logo">
		<!-- <div class="title">Beijing Yunwai Automobile Technology Co., Ltd.</div> -->
		<p class="article" v-for="text in list">{{text}}</p>
		<img class="banner" src="../assets/about/map.png" alt="map">
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
			list: [
		'Beijing Yunwai Automobile Technology is an energy company of "step utilization of energy recycling and energy products", featured with a vertical integration in R&D, manufacture and sales of micro electric vehicles, electric tricycles, solar lights, recycling of Class A batteries and distributed accumulation equipment, and new energy products. The company provides technical and after-sales services, and has a professional marketing group and powerful domestic and foreign market resources.',
		`Yunwai has outstanding capacities in forward research and development of micro electric vehicles, electric tricycles, solar lights and the core components, with more than 70 patents. The company has industry leading manufacturing capability of stamping, welding, painting and assembly, which enables independent manufacturing and production in relation to most of the company's products and an annual production capacity of 100,000 micro electric vehicles.`,
		`Yunwai's target markets include China, South-East Asia, South America, and other less development overseas regions. The company's products have been exported to the US, South Africa, Vietnam, Thailand, Cambodia, etc., and certain products have won 30% market share in South-East Asia and Africa.`,
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.main {
	.logo {
		display: block;
		width: .8rem;
		margin: .32rem auto .07rem;
	}
	.title {
		text-align: center;
		font-size: .14rem;
		font-weight: bold;
		margin-top: -0.1rem;
	}
	.article {
		margin-bottom: .24rem;
		padding: 0 0.2rem;
		font-size: .14rem;
		line-height: .21rem;
	}
	p:last-of-type {
		margin-bottom: .2rem;
	}
}
.banner {
  width: 3.35rem;
  margin: 0 auto;
}
</style>
