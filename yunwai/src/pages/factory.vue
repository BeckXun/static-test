<template>
  <div class="main">

	<my-nav></my-nav>

	<img class="banner" src="../assets/home/top-banner1.jpg" alt="">

	<div class="cont2">
	  <my-title text="Yunwai Micro Electric Vehicle<br>Manufacturing Base"></my-title>
	  <p>Yunwai Micro Electric Vehicle Manufacturing Base has 100,000 units capacity with industry leading manufacturing capability of stamping, welding, painting and assembly.High automation, high quality and environmental friendly.</p>
	  <img :src="url" alt="" class="banner" v-for="url in imgList">
	</div>

	<my-footer></my-footer>

  </div>
</template>

<script>
import myNav from "../components/nav";
import myFooter from "../components/footer";
import myTitle from "../components/title";
export default {
  components: {
	myNav,
	myFooter,
	myTitle
  },
  data() {
	return {
	imgList: [
	  require('../assets/factory/banner0.jpg'),
	  require('../assets/factory/banner1.jpg'),
	  require('../assets/factory/banner2.jpg'),
	  require('../assets/factory/banner3.jpg'),
	]
  };
  }
};
</script>

<style lang="scss" scoped>
.cont2 {
  padding-bottom: .1rem;
  h3 {
	margin: .24rem 0 .1rem;
	margin-left: .2rem;
  }
  p {
	padding-left: .2rem;
	font-size: .12rem;
	line-height: .16rem;
	margin-bottom: .24rem;
  }

}
</style>
