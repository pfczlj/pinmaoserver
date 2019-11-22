<template>
	<div>
<!-- 	<slideMenu></slideMenu> -->
	<router-view></router-view>
	<div class="bottomarea"></div>
	<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from "./components/shop/Tabbar"
	/* import slideMenu from "./components/shop/SlideMenu" */
	export default {
		name: 'shop',
		components:{tabbar,
/* 		slideMenu */
		},
		beforeCreate:function(){
			// this.$router.push('index');
		}
	}
</script>

<style scoped>
	.banner{
		margin-top: 4.3rem;
	}
	.bottomarea{
		height:5rem;
	}
</style>
