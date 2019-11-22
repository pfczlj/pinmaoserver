<template>
	<div class="root">
		  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
		<ul class="banners" id="banner">
			<li v-for="(banner,index) in banners" :key="index">
				<img :src="banner.path"/>
			</li>
		</ul>
		</v-touch>
		<!--小圆点-->
		<ul class="circles">
			<li :class="index==selected?'red':''" v-for="(banner,index) in banners" :key="index" @click="change(index)"></li>
		</ul>
	</div>
</template>

<script>
	var banner;
	var size;
	export default{
		name:"banner",
		data:function(){
			return {
				selected:0,
				banners:[
				{path:require("@/assets/banner/2.jpg") },
				{path:require("@/assets/banner/1.jpg") },
				{path:require("@/assets/banner/3.jpg") },
				{path:require("@/assets/banner/4.jpg") },
				{path:require("@/assets/banner/5.jpg") },
				{path:require("@/assets/banner/6.jpg") },
				{path:require("@/assets/banner/7.jpg") }
			]}
		},mounted:function(){
			banner = document.querySelector("#banner");
			var children =banner.childNodes;
			size =children.length;
			for(var i =0;i<size;i++){
				children[i].style.left= i*100+"%";
		}
		},methods:{
			change:function(index){
				this.selected=index;
			},swiperleft:function(){
				if(this.selected==size-1){
					this.selected=0;
					return;
				}
				this.selected++;
			},swiperright:function(){
				if(this.selected==0){
					this.selected=size-1;
					return;
				}
				this.selected--;
			}
		},watch:{
			selected:function(newIndex,oldIndex){
				//banner移动
				banner.style.left= -newIndex*100+"%";
			}
		}
	}
</script>

<style>
.root{
	width:100%;
	position:relative;
	overflow:hidden;
}
	.banners{
		width:100%;
		height:15.4rem;
		margin-top:4.3rem;/*与上一个组件的距离*/
		position:relative;
	}
.banners li{
	width:100%;
	height:100%;
	position:absolute;
	top:0;
}
	.banners li,.banners li img{
		width:100%;
		height:100%;
	}
	.circles{
		position:absolute;
		bottom:20px;
		right:20px;
	}
	.circles li{
		width:10px;
		height:10px;
		border-radius:5px;
		background:white;
		float:left;
		margin-right:5px;
	}
	.circles li.red{
		background: red;
	}
</style>
