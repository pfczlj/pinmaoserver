<template>
	<!--首页界面-->
	<div>
		<banner></banner>
		<activity></activity>
		<productlist></productlist>
		
	</div>
</template>

<script>	
    import banner from "@/components/shop/Banner"
	import activity from "@/components/shop/Activity"
	import productlist from "@/components/shop/ShopList"
	export default{
		name:"one",
		components:{banner,activity,productlist}
	}
</script>

<style>
	.one{
	margin-top:4.3rem;
	position: fixed;
	font-size:20px;}
</style>
