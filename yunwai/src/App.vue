<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.banner {
  width: 100%;
  display: block;
}
/* reset */
html, body, h1, h2, h3, h4, h5, p,nav,menu, figure, figcaption, ul, ol, li{margin:0;padding:0; font-size: 16px; font-weight: 400}
body,select,textarea,input{ font:16px/1.5 "Microsoft YaHei",Arial; }
body,a{color: #333;}
ol, ul{list-style: none}
var, em, i{ font-style:normal;}
a img{ border:0 none;}
a:link,a:visited{text-decoration: none}
img { max-width: 100%; vertical-align: top; }
select,textarea,input[type="submit"],input[type="button"]{-webkit-appearance: none;-webkit-border-image: none; border-image: none; -webkit-border-radius: 0; border-radius: 0; border:0 none;}
</style>
