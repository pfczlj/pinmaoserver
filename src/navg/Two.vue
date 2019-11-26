<template>
	<div class="two">
	 <cloth></cloth> 
	 <goodslist></goodslist>
	</div>
</template>

<script>
	import cloth from "@/components/navg/Clothes"
	import goodslist from "@/components/navg/Goods"
	export default{
		name:"two",
		components:{
			cloth,
			goodslist
		}
	}
</script>

<style>
.two{
width:100%;
height:100%;
background-color: rgb(244,244,244);
	}
</style>
