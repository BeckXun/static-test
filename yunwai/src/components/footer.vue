<template>
  <div class="footer">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <div class="desc">Beijing Yunwai Automobile Technology Co., Ltd.</div>

    <ul class="list">
      <li v-for="data in list">
        <img :src="data.icon" alt="icon">
        <div>{{data.title}}</div>
        <p>{{data.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          icon: require('../assets/phone.png'),
          title: 'Call Us',
          desc: '010-57196808',
        },
        {
          icon: require('../assets/web.png'),
          title: 'Know Us',
          desc: 'http://www.yunwai.tech',
        },
        {
          icon: require('../assets/email.png'),
          title: 'Email Us',
          desc: 'dxh@yunwai.tech',
        },
        {
          icon: require('../assets/address.png'),
          title: 'Visit Us',
          desc: '30117, Floor 1, Galaxy SOHO, Dongcheng District, Beijing, China',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: rgba(51,51,51,0.90);
  color: #FFFFFF;
  padding: .28rem 0 .08rem;
  .logo {
    display: block;
    width: .5rem;
    margin: 0 auto .08rem;
  }
  .desc {
    font-size: .14rem;
    line-height: .16rem;
    margin-bottom: .4rem;
    text-align: center;
  }
  .list {
    padding: 0 .2rem;
    li {
      display: flex;
      min-height: .14rem;
      margin-bottom: .08rem;
      img {
        width: .14rem;
        height: .14rem;
      }
      div {
        font-size: .12rem;
        margin: 0 .04rem 0 .08rem;
        color: #EFB336;
        min-width: .5rem;
      }
      p {
        font-size: .12rem;
      }
    }
  }
}

</style>
