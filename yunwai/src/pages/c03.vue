<template>
	<div class="main">
		<my-product :Data="Data"></my-product>
	</div>
</template>

<script>
import myProduct from "../components/product"
export default {
	components: {
		myProduct
	},
	data () {
		return {
			Data: {
                banners: [
                    require('../assets/c03/banner0.png'),
                    require('../assets/c03/banner1.png'),
                    require('../assets/c03/banner2.png'),
                ],
                titles: [
                    'Choose Your Color',
                    'Product Details',
                    'Configurator',
                ],
                colors: [
                    {
                        img: require('../assets/c03/color0.png'),
                        name: 'Polar<br>White'
                    },
                    {
                        img: require('../assets/c03/color1.png'),
                        name: 'Cosmic<br>Silver'
                    },
                    {
                        img: require('../assets/c03/color2.png'),
                        name: 'Flame<br>Red'
                    },
                    {
                        img: require('../assets/c03/color3.png'),
                        name: 'Dream<br>Blue'
                    },
                    {
                        img: require('../assets/c03/color4.png'),
                        name: 'Crescent<br>Yellow'
                    },
                    {
                        img: require('../assets/c03/color5.png'),
                        name: 'Midnight<br>Black'
                    },
                ],
                details: [
                    {
                        img: require('../assets/c03/details0.png'),
                        cont: 'Fashion<br>Design'
                    },
                    {
                        img: require('../assets/c03/details1.png'),
                        cont: 'Comfort<br>Zone'
                    },
                    {
                        img: require('../assets/c03/details2.png'),
                        cont: 'Integrated<br>LED Lamps'
                    },
                ],
            }
		};
	}
};
</script>
