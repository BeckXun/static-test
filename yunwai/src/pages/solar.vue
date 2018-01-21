<template>
  <div class="main">

	  <my-nav></my-nav>
  <ul>
	<li v-for="(item, index) in list">
	  <img :src="item.img" alt="">
		<table cellspacing="0" cellpadding="0">
		<thead>
		  <tr>
			<td>{{item.thead}}</td>
		  </tr>
		</thead>
	  <tbody>
		<tr v-for="item in item.tbody">
		  <td>{{item}}</td>
		</tr>
	  </tbody>
	  </table>
	</li>
  </ul>


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
	  list: [
		{
		  img: require("../assets/solar/icon0.jpg"),
		  thead: "Apple light 1.0",
		  tbody: [
			"Solar panel",
			"5V/15W",
			"Lamp",
			"NICHIA SMD LED 7W, 900LM",
			"Battery",
			"3.2V/20AH LiFePO4 battery",
			"Lighting time",
			"Whole night lighting, rainy day pre four hours full power lighting.",
			"Suggest installation height",
			"2-3M, pole distance 8-12M, width of street 5-8M."
		  ]
		},
		{
		  img: require("../assets/solar/icon1.jpg"),
		  thead: "Peach light 1.0",
		  tbody: [
			"Solar panel",
			"5V/30W",
			"Lamp",
			"NICHIA SMD12W, 2100LM",
			"Battery",
			"3.2V/25AH LiFePO4 battery",
			"Lighting time",
			"Whole night lighting, rainy day pre four hours full power lighting.",
			"Suggest installation height",
			"3-5M, pole distance 15-20M, width of street 12-14M."
		  ]
		},
		{
		  img: require("../assets/solar/icon2.jpg"),
		  thead: "Lotus light 1.0",
		  tbody: [
			"Solar panel",
			"5V/15W",
			"Lamp",
			"NICHIA SMD LED 7W, 900LM",
			"Battery",
			"3.2V/20AH LiFePO4 battery",
			"Lighting time",
			"Whole night lighting, rainy day pre four hours full power lighting.",
			"Suggest installation height",
			"2-3M, pole distance 8-12M, width of street 5-8M."
		  ]
		},
		{
		  img: require("../assets/solar/icon3.jpg"),
		  thead: "Solar Street  light ",
		  tbody: [
			"Solar panel",
			"5V/50W-175W",
			"Lamp",
			"25W-80W LED, 5250LM-16800LM",
			"Battery",
			"3.2V/80AH LiFePO4 battery",
			"Lighting time",
			"6+X; Pre 6 hrs full lighting, the rest night lighting half power the rest night power controlled by battery capacity",
			"Suggest installation height",
			"6-8M"
		  ]
		}
	  ]
	};
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: .16rem 0 .1rem;
}
li {
  width: 3.35rem;
  margin: 0.24rem auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
	width: 0.6rem;
	height: 0.6rem;
  }
  table {
	width: 2.56rem;
  }
  thead tr td {
	border: 1px solid#EFB336;
	background: #efb336;
	font-size: 0.14rem;
  font-weight: bold;
  padding-left: .12rem;
  line-height: 0.3rem;
  }
  tbody tr td {
	border: 1px solid #e1e1e1;
	border-top: 0;
	padding-left: 0.12rem;
	font-size: 0.12rem;
	font-weight: bold;
	line-height: 0.26rem;
  }
  tbody tr:nth-child(2n) td {
	padding-left: 0.2rem;
	background: #eee;
	font-weight: normal;
	line-height: 0.2rem;
  }
}
</style>
