<template>
  <div class="main">

	  <my-nav></my-nav>

    <img class="banner" src="../assets/home/top-banner1.png" alt="">
    <img class="banner" src="../assets/home/top-banner2.png" alt="">

    <div class="cont" v-for="(data,index) in list">
      <img class="icon" :src="require('../assets/home/icon' + (index + 1) + '.png')" alt="">
      <h3>{{data.title}}</h3>
      <p v-html="data.content"></p>
      <img class="banner" :src="require('../assets/home/banner' + (index + 1) + '.png')" alt="">
    </div>

    <div class="cont2">
      <my-title text="云外研发中心"></my-title>
      <p>第一基地与第二基地总占地面积100万平方米，设计产能30万辆。<br>
拥有领先的冲压、焊接、涂装和总装四大工艺，将实现高度自动化、高品质与节能环保的生产制造。</p>
      <img src="" alt="" class="banner">
    </div>
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
          title: '低排放，占地小',
          content: `和汽车相比<br>
生产和使⽤节能环保<br>
节约道路资源，低碳绿色出行<br>
从矿井到车轮的排放是k-car的1/3，<br>
是传统⻋的1/10，占地⾯面积是传统车的1/3。`
        },
        {
          title: '低能耗，低成本',
          content: `和电动车相比<br>
能耗、购⻋成本碳排放减少1/3。<br>
充电⽅便，无需电网升级。`
        },
        {
          title: '乘坐舒适，安全便利',
          content: `和摩托车相比<br>
舒适性、安全性、便利和效率大幅提升。 <br>
载客能力提升3-5倍。`
        },
        {
          title: '充电短，里程长',
          content: `和微电车相比<br>
充电更短（6小时），里程更长150km）<br>
性价比行业标杆20%以上<br>
价格3-5万，关键部件500ppm以下，98%以上良品率`
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
  }
}
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
}

</style>