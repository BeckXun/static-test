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
                    require('../assets/c02/banner0.png'),
                    require('../assets/c02/banner1.png'),
                    require('../assets/c02/banner2.png'),
                ],
                titles: [
                    'Choose Your Color',
                    'Product Details',
                    'Configurator',
                ],
                colors: [
                    {
                        img: require('../assets/c02/color0.png'),
                        name: 'Polar<br>White'
                    },
                    {
                        img: require('../assets/c02/color1.png'),
                        name: 'Cosmic<br>Silver'
                    },
                    {
                        img: require('../assets/c02/color2.png'),
                        name: 'Flame<br>Red'
                    },
                    {
                        img: require('../assets/c02/color3.png'),
                        name: 'Dream<br>Blue'
                    },
                    {
                        img: require('../assets/c02/color4.png'),
                        name: 'Crescent<br>Yellow'
                    },
                    {
                        img: require('../assets/c02/color5.png'),
                        name: 'Midnight<br>Black'
                    },
                    {
                        img: require('../assets/c02/color6.png'),
                        name: 'Champagne<br>Gold'
                    },
                ],
                details: [
                    {
                        img: require('../assets/c02/details0.png'),
                        cont: 'Exceptional<br>Climbing Ability'
                    },
                    {
                        img: require('../assets/c02/details1.png'),
                        cont: 'Luxuary<br>Interior'
                    },
                    {
                        img: require('../assets/c02/details2.png'),
                        cont: 'Quick<br>Charge'
                    },
                ],
            }
		};
	}
};
</script>
