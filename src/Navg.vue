<template>
	<div>
	<slideMenu></slideMenu>
	<router-view></router-view>
	<tabbar></tabbar>
	</div>
</template>

<script>
import tabbar from "./components/shop/Tabbar"
import slideMenu from "./components/shop/SlideMenu"
export default{
	name:"navg",
	components:{
		slideMenu,
		tabbar
	}
}
</script>

<style>
</style>
