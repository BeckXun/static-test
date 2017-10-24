<template>
  <div class="main">

	<my-nav></my-nav>

    <img class="banner" src="../assets/home/top-banner1.png" alt="">

    <div class="cont2">
      <my-title text="云动力智能汽车制造基地"></my-title>
      <p>第一基地与第二基地总占地面积100万平方米，设计产能30万辆。<br>
	  拥有领先的冲压、焊接、涂装和总装四大工艺，将实现高度自动化、高品质与节能环保的生产制造。</p>
      <img src="" alt="" class="banner">
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
.cont2 {
  h3 {
    margin: .24rem 0 .1rem;
    margin-left: .2rem;
  }
  p {
    padding-left: .2rem;
    font-size: .12rem;
    line-height: .16rem;
    margin-bottom: .16rem;
  }
  .banner {
	  margin-bottom: .1rem;
  }
}
</style>