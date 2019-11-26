<template>
	<div class="three">
	<store></store>	
	<storegoods></storegoods>
	</div>
</template>

<script>
	import store from "@/components/navg/Store"
	import storegoods from "@/components/navg/StoreGoods"
	export default{
		name:"three",
        components:{
			store,
			storegoods
		
		}
	}
</script>

<style>
	.three{
		width:100%;
		height:100%;
		background-color: rgb(244,244,244);
	}
</style>
