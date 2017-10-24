<template>
	<div class="main">
		<my-nav></my-nav>
		<img class="logo" src="../assets/about/logo.png" alt="logo">
		<div class="title">Beijing Yunwai Automobile Technology Co., Ltd.</div>
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
				'Beijing Yunwai Automobile Technology Co., Ltd. is a specialized high-tech enterprise that develops, manufactures and sells micro-electric vehicle. The company also provides technical and after-sales service, and has a professional marketing team with strong resources in domestic and international markets.',
				'Yunwai is the National High Technology Enterprise in China with strong research capabilities and 70 patents of Micro-Electric Vehicle. The company has stamping workshop, welding workshop, painting workshop, assembly workshop, that the four workshops of car production. The company also has a vehicle trial test base and a production base with 100000 annual output of Micro-Electric Vehicle.',
				'The target markets of Yunwai are underdeveloped regions as Southeast Asia, Africa and Latin America. At this stage, our products have been exported to the United States, Vietnam, Thailand, Cambodia and other countries.',
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
		margin: .2rem auto 0;
	}
	.title {
		text-align: center;
		font-size: .14rem;
		font-weight: bold;
		margin-top: -0.1rem;
	}
	.article {
		margin-top: .24rem;
		padding: 0 0.2rem;
		font-size: .14rem;
		line-height: .18rem;
	}
	p:last-of-type {
		margin-bottom: .12rem;
	}
}
// <div class="main">
// 		<my-nav></my-nav>
// 		<img class="logo" src="../assets/about/logo.png" alt="logo">
// 		<div class="title">Beijing Yunwai Automobile Technology Co., Ltd.</div>
// 		<p class="article" v-for="text in list">{{text}}</p>
// 		<img src="../assets/about/map.png" alt="map">
// 	</div>
</style>