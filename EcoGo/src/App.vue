<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/* @font-face {
  font-family: HYQiHei45;
  src: url(./fonts/HYQiHei-45S.eot);
  src: url(./fonts/HYQiHei-45S.eot?#iefix) format("embedded-opentype"), url(./fonts/HYQiHei-45S.woff2) format("woff2"), url(./fonts/HYQiHei-45S.ttf.woff) format("woff"), url(./fonts/HYQiHei-45S.ttf) format("ttf"), url(./fonts/HYQiHei-45S.svg#HYQiHei) format("svg");
  font-weight: 400;
  font-style: normal
} */


body,
button,
dd,
dl,
dt,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0
}
html {  
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
body {
  font: 14px/1.5 HYQiHei45,
  Arial,
  "Microsoft YaHei",
  宋体,
  tahoma,
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333
}

button,
input,
select {
  vertical-align: middle;
  font-size: 100%
}

ol,
ul {
  list-style: none
}

fieldset,
img {
  border: 0
}

em {
  font-style: normal
}

.clearfix:after {
  content: ".";
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  font-size: 0
}

.clearfix {
  *zoom: 1
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.fullScreen {
  display: block;
  width: 100%;
}
</style>

