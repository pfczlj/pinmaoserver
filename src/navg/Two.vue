<template>
	<div>
	<div class="two">女装</div>
	<cloth></cloth>
	</div>
</template>

<script>
	import cloth from "@/components/navg/Clothes"
	export default{
		name:"two",
		components:{
			cloth
		}
	}
</script>

<style>
	.two{
	margin-top:4.3rem;
	position: fixed;
	font-size:20px;}
</style>
