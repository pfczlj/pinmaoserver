<template>
	<!--首页头部：热门-->
	<div class="content">
		<ul class ="content-ul">
			<li v-for="(menu,ss) in menus" :class="se==ss? 'se':''" @click="se=ss" v-bind:key="menu.id">
		<router-link :to="menu.to">
		<span>{{menu.title}}</span>
		</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"slidemenu",
		data:function(){
			return{
			se:0,
			menus:[
			{title:"热门",to:"/navg/one"},
			{title:"女装",to:"/navg/two"},
			{title:"百货",to:"three"},
			{title:"母婴",to:"one"},
			{title:"手机",to:"one"},
			{title:"鞋包",to:"one"},
			{title:"食品",to:"one"},
			{title:"电器",to:"one"},
			{title:"美妆",to:"one"},
			{title:"内衣",to:"one"},
			{title:"电脑",to:"one"},
			{title:"男装",to:"one"},
			{title:"运动",to:"one"},
			{title:"汽车",to:"one"},
			{title:"医药",to:"one"},
			{title:"水果",to:"one"},
			{title:"家纺",to:"one"},
			{title:"家装",to:"one"},
			{title:"家具",to:"one"},
			{title:"海淘",to:"one"},]
			
			
			
			}
		}
	}
</script>

<style>
	.content {
		height:4.3rem;
		line-height:4.3rem;
		width:100%;
		position:fixed;
		top:0;
		background:white;
		z-index:2;
		background:white;
		border-bottom: 1px solid gainsboro;
	}
	.content-ul {
		white-space:nowrap;
		width:100%;
		overflow-x: scroll;
	}
	.content-ul li{
		display: inline-block;
		margin-right:2.5rem;
		font-size:1.7rem;
		
	}
	.content-ul li.se{
	  border-bottom:2px solid red;
	
	}


</style>
