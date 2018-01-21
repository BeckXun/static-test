<template>
  <div class="main">

	  <my-nav></my-nav>

	<img class="banner" src="../assets/home/top-banner1.jpg" alt="">
	<img class="banner" src="../assets/home/top-banner2.jpg" alt="">

	<div class="cont" v-for="(data,index) in list">
	  <img class="icon" :src="require('../assets/home/icon' + (index + 1) + '.png')" alt="">
	  <h3>{{data.title}}</h3>
	  <p v-html="data.content"></p>
	  <img class="banner" :src="require('../assets/home/banner' + (index + 1) + '.png')" alt="">
	</div>

	<div class="cont2">
	  <my-title text="Yunwai Research Center"></my-title>
	  <p>Yunwai is the National High Technology Enterprise in China with 6 core technologies and 70 patents of Micro-Electric Vehicle. Independent research and development through the entire process of modeling design, engineering design, engineering trial and engineering test.</p>
	  <img src="../assets/home/banner5.jpg" alt="" class="banner">
	</div>
	<div class="cont2">
	  <my-title text="Yunwai Micro Electric Vehicle<br>Manufacturing Base"></my-title>
	  <p>Yunwai Micro Electric Vehicle Manufacturing Base has 100,000 units capacity with industry leading manufacturing capability of stamping, welding, painting and assembly. High automation, high quality and environmental friendly.</p>
	  <img src="../assets/home/banner6.jpg" alt="" class="banner">
	</div>
  <div style="height: .1rem;"></div>
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
	myTitle
	},
  data () {
	return {
	  list: [
		{
		  title: 'Live green, drive green',
		  content: `All-electric, local emission-free, and with dynamic acceleration`
		},
		{
		  title: 'Low cost, save your money',
		  content: `Low purchase cost with extremely low driving cost per mile.
Only cost 5.54 kWh/100 km.`
		},
		{
		  title: 'The perfect city car',
		  content: `With the perfect drive for the city: easy to use, easy to park and with unique driving enjoyment and sufficient range for all your daily trips.`
		},
		{
		  title: 'Easy to charge',
		  content: `You can charge your vehicle almost everywhere. No special charging station required.
Fully charging the vehicle in 8 hours with a range of up to 150 km.`
		},
	  ],
	}
  }
}
</script>

<style lang="scss" scoped>
.cont {
  text-align: center;
  .icon {
	display: block;
	width: .28rem;
	margin: .24rem auto .04rem;
  }
  h3 {
	line-height: .22rem;
	font-size: .16rem;
  }
  p {
	margin: .12rem 0;
	font-size: .14rem;
	line-height: .2rem;
  padding: 0 .2rem;
  }
}
.cont2 {
  h3 {
	margin: .24rem 0 .1rem;
	margin-left: .2rem;
  }
  p {
	padding: 0 .2rem;
	font-size: .12rem;
	line-height: .16rem;
	margin-bottom: .16rem;
  }
}

</style>
