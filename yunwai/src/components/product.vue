<template>
	<div class="main">

		<my-nav></my-nav>

        <img class="banner" :src="Data.banners[0]" alt="banner">

        <div class="container">

            <my-title :text="Data.titles[0]"></my-title>
            <img class="banner" :src="Data.banners[1]" alt="banner">
            <ul class="colors">
                <li v-for="data in Data.colors">
                    <img :src="data.img" alt="color">
                    <p v-html="data.name"></p>
                </li>
            </ul>

            <my-title :text="Data.titles[1]"></my-title>
            <ul class="details">
                <li v-for="data in Data.details">
                    <img :src="data.img" alt="color">
                    <p v-html="data.cont"></p>
                </li>
            </ul>

            <my-title :text="Data.titles[1]"></my-title>
            <img class="banner" :src="Data.banners[2]" alt="banner">
        </div>
	</div>
</template>

<script>
import myNav from "../components/nav"
import myTitle from "../components/title"
export default {
	components: {
		myNav,
		myTitle,
	},
    props: ['Data'],
	data () {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.container {
    padding: .48rem .2rem .2rem;
    .banner {
        margin: .3rem 0 .18rem;
    }
    .colors {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .48rem;
        li {
            flex: 0 0 33.3%;
            margin-top: .12rem;
            img {
                display: block;
                width: .4rem;
                margin: 0 auto .04rem;
            }
            p {
                font-size: .14rem;
                line-height: .17rem;
                text-align: center;
            }
        }
    }
    .details {
        margin: .3rem auto .36rem;
        li {
            background: #FFFFFF;
            box-shadow: 0 0 .06rem 0 rgba(0,0,0,0.30);
            border-radius: .04rem;
            position: relative;
            height: 1.4rem;
            margin-bottom: .12rem;
            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 2rem;
                border-top-left-radius: .04rem;
                border-bottom-left-radius: .04rem;
            }
            p {
                padding-top: .24rem;
                padding-left: 2.12rem;
                font-size: .16rem;
                line-height: .2rem;
            }
        }
    }
}
</style>
