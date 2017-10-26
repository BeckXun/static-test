<template>
  <div class="home">

    <img class="fullScreen" src="../assets/home/banner1.jpg" alt="">

    <div class="section1">
      <img class="fullScreen" src="../assets/home/banner2.jpg" alt="">
      <div class="center-container">{{text.section1}}</div>
    </div>

    <ul class="section2">
      <li :class="['img-text-layout clearfix', index % 2 ? 'img-right-layout' : '' ]" v-for="(item, index) in text.section2">
        <img :class="['img-text', index % 2 ? 'fr' : 'fl']" :src="item.banner" alt="">
        <div class="cont fr">
          <div class="title" :style="item.mt">
            <img :src="item.icon" alt="icon">
            <h4>{{item.title}}</h4>
          </div>
          <div class="text" v-html="item.cont"></div>
        </div>
      </li>
    </ul>

    <div class="section3" v-for="(item, index) in text.section3">
      <img :src="item.bg" alt="">
      <h3>{{item.title}}</h3>
      <p v-html="item.cont"></p>
    </div>

    <div class="footer">
        <img class="logo" src="../assets/home/logo-bottom.png" alt="logo">
        <div class="name">{{text.footer.companyName}}</div>
        <div class="cont">
          <ul class="list clearfix">
            <li :class="['fl', index % 2 ? 'lang' : '' ]"  v-for="(item, index) in text.footer.list">
              <img :src="item.icon" alt="">
              <h5>{{item.title}}</h5>
              <p>{{item.cont}}</p>
            </li>
          </ul>
          <!-- <div class="qrcode">
            <i class="role qrcode-left-top"></i>
            <i class="role qrcode-left-bottom"></i>
            <i class="role qrcode-right-top"></i>
            <i class="role qrcode-right-bottom"></i>
            <img src="../assets/home/qrcode.png" alt="">
            <p v-html="text.footer.qrcode"></p>
          </div> -->
        </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      text: {
        section1: '',
        section2: [],
        footer: {}
      },
      ch: {
        section1: '50km生活半径，出行最优选择。',
        section2: [
          {
            banner: require('../assets/home/pic1.jpg'),
            icon: require('../assets/home/icon1.png'),
            title: '低排放，占地小',
            cont: '和汽车相比<br/>生产和使⽤节能环保<br/>节约道路资源，低碳绿色出⾏。<br/>从矿井到车轮的排放是k-car的1/3，<br/>是传统⻋的1/10，占地⾯面积是传统车的1/3。'
          },
          {
            banner: require('../assets/home/pic2.jpg'),
            icon: require('../assets/home/icon2.png'),
            title: '低能耗，低成本',
            cont: '和电动车相比<br/>能耗、购⻋成本碳排放减少1/3<br/>充电⽅便，无需电网升级',
            mt: 'margin-top: 1.6rem;'
          },
          {
            banner: require('../assets/home/pic3.jpg'),
            icon: require('../assets/home/icon3.png'),
            title: '乘坐舒适，安全便利',
            cont: '和摩托车相比<br/>舒适性、安全性、便利和效率⼤幅提升。<br/>载客能力提升3-5倍。',
            mt: 'margin-top: 1.6rem;'
          },
          {
            banner: require('../assets/home/pic4.jpg'),
            icon: require('../assets/home/icon4.png'),
            title: '充电短，里程长',
            cont: '和微电车相比<br/>充电更短（6⼩小时），里程更⻓（150km）<br/>性价比行业标杆20%以上<br/>价格3-5万，关键部件500ppm以下，98%以上良品率',
            mt: 'margin-top: 1.52rem;'
          },
        ],
        section3: [
          {
            title: '云外研发中心',
            cont: '第一基地与第二基地总占地面积100万平方米，设计产能30万辆。<br/>拥有领先的冲压、焊接、涂装和总装四大工艺，将实现高度自动化、高品质与节能环保的生产制造。'
          },
          {
            title: '云动力智能汽车制造基地',
            cont: '第一基地与第二基地总占地面积100万平方米，设计产能30万辆。<br/>拥有领先的冲压、焊接、涂装和总装四大工艺，将实现高度自动化、高品质与节能环保的生产制造。'
          },
        ],
        footer: {
          companyName: 'Beijing Yunwai Automobile Technology Co., Ltd.',
          list: [
            {
              icon: require('../assets/home/call-us.png'),
              title: 'Call Us',
              cont: '010-57196808',
            },
            {
              icon: require('../assets/home/know-us.png'),
              title: 'Know Us',
              cont: 'http://www.yunwai.tech',
            },
            {
              icon: require('../assets/home/email-us.png'),
              title: 'Email Us',
              cont: 'dxh@yunwai.tech',
            },
            {
              icon: require('../assets/home/visit-us.png'),
              title: 'Visit Us',
              cont: '30117, Floor 1, Galaxy SOHO, Dongcheng District, Beijing, China',
            },
          ],
          qrcode: 'Wechat<br/>QR code'
        }
      },
      en: {
        section1: '',

      },
    };
  },
  methods: {

  },
  created () {
    this.setLang(this.getLang())
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section1 {
  position: relative;
}

.section1 .center-container {
  position: absolute;
  width: 600px;
  text-align: right;
  font-size: .36rem;
  color: #FFFFFF;
  right: 50%;
  top: 82%;
  margin-right: .3rem;
  letter-spacing: 2px;
}
.section2 .img-text-layout {
  width: 100%;
}
.img-text {
  width: 50%;
  display: block;
}
.img-text-layout .cont {
  width: 50%;
  padding-left: .8rem;
  box-sizing: border-box;
}
.img-right-layout .cont {
  width: 50%;
  padding-right: .8rem;
  box-sizing: border-box;
}

.img-text-layout .cont .title {
  margin-top: 1.29rem;
  height: .6rem;
  font-size: 0;
  letter-spacing: 0;
}
.img-text-layout .cont .title img {
  width: .6rem;
  height: 100%;
  margin-right: .2rem;
  vertical-align: middle
}
.img-right-layout .cont .title img {
  margin: 0 0 0 .2rem;
}
.img-text-layout .cont .title h4 {
  display: inline-block;
  font-size: .34rem;
  line-height: .6rem;
  color: #333333;
  vertical-align: middle
}
.img-text-layout .cont .text {
  margin-top: .16rem;
  font-size: .2rem;
  line-height: .3rem;
}
.img-right-layout .cont .title,.img-right-layout .cont .text {
  text-align: right;
}
.section3 {
  text-align: center;
}
.section3 img {
  display: block;
  width: 100%;
}
.section3 h3 {
  width: 11rem;
  margin: .95rem auto .18rem;
  font-size: .4rem;
  line-height: .56rem;
}
.section3 p {
  width: 11rem;
  font-size: .2rem;
  line-height: .28rem;
  margin: 0 auto;
}

.footer {
  background: rgba(51,51,51,0.90);
  padding: 1rem 0 1.53rem
}
.footer .logo {
  width: 1.19rem;
  display: block;
  margin:  0 auto;
}
.footer .name {
  font-size: .3rem;
  line-height: .36rem;
  color: #FFFFFF;
  text-align: center;
  margin-top: .16rem;
}
.footer .cont {
  width: 6.33rem;
  margin: 1.08rem auto 0;
  box-sizing: border-box;
  position: relative;
}
.footer .cont .list li {
  width: 3rem;
  padding-left: .52rem;
  box-sizing: border-box;
  position: relative;
  color: #fff;
}
.footer .cont .list li img {
  position: absolute;
  left: 0;
  top: 0;
  width: .4rem;
  height: .4rem;
  object-fit: contain;
}
.footer .cont .list .lang {
  width: 3.26rem;
}
.footer .cont .list li h5 {
  font-size: .16rem;
  color: #EFB336;
  line-height: .19rem;
}
.footer .cont .list li P {
  font-size: .16rem;
  line-height: .19rem;
  margin-top: .02rem;
}
.footer .cont .list li {
  margin-bottom: .4rem;
}
/* 二维码 */
/* .footer .cont .qrcode {
  position: absolute;
  right: 0;
  top: 0;
  width: 2.05rem;
  height: 1.4rem;
}
.footer .cont .qrcode .role {
  position: absolute;
  width: .2rem;
  height: .2rem;
}
.footer .cont .qrcode .qrcode-left-top {
  left: 0;
  top: 0;
  border-left: 1px solid #EFB336;
  border-top: 1px solid #EFB336;
}
.footer .cont .qrcode .qrcode-left-bottom {
  left: 0;
  bottom: 0;
  border-left: 1px solid #EFB336;
  border-bottom: 1px solid #EFB336;
}
.footer .cont .qrcode .qrcode-right-top {
  right: 0;
  top: 0;
  border-right: 1px solid #EFB336;
  border-top: 1px solid #EFB336;
}
.footer .cont .qrcode .qrcode-right-bottom {
  right: 0;
  bottom: 0;
  border-right: 1px solid #EFB336;
  border-bottom: 1px solid #EFB336;
}
.footer .cont .qrcode img {
  position: absolute;
  width: 1.1rem;
  left: .07rem;
  top: .12rem;
}
.footer .cont .qrcode p {
  position: absolute;
  top: .47rem;
  right: .07rem;
  line-height: .17rem;
  font-size: .16rem;
  color: #FFFFFF;
  text-align: center;
} */





</style>
