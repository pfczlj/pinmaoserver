<template>
	<!--聊天主界面-->
<div class="root">
<ul class="chart">
	<li v-for="(chart,index)  in charts" :key="index">
		<img :src="chart.path"/>
		<div class="chartinfo">
			<span>{{chart.name}}<em>{{chart.logo}}</em></span>
			<span>{{chart.describe}}</span>
		</div>
		<div class="time">
			<span>{{chart.time}}</span>
			<span>{{chart.message}}</span>
		</div>
	</li>
</ul>	
	<div class="title">精品推荐</div>	
	<recommend></recommend>
	</div>
</template>

<script>
	import recommend from "@/shop/Recommend"
	export default{
		name:"chart",
		data:function(){
			return{
			charts:[{
				path:require("@/assets/chart/logo.jpg"),
				name:"拼多多官方客服 ",
				logo:"官方",
			    describe:"亲，欢迎来到拼多多，今后您在拼多多遇到任何问题....",
				time:"08:30",
				message:"1",
			},
           {
				path:require("@/assets/chart/logo.jpg"),
				name:"拼多多官方客服 ",
				logo:"官方",
			    describe:"亲，欢迎来到拼多多，今后您在拼多多遇到任何问题....",
				time:"09:48",
				message:"3",
			},
			{
				path:require("@/assets/chart/logo.jpg"),
				name:"拼多多官方客服 ",
				logo:"官方",
			    describe:"亲，欢迎来到拼多多，今后您在拼多多遇到任何问题....",
				time:"10:00",
				message:"5",
			}]
			}
		},components:{
			recommend,
		}
	}
</script>

<style>
.root{
	background:rgb(244,244,244);
	width:100%;
	hieght:100%;
	overflow-y:scroll;
}
.chart li{
	display: flex;
    height:7.2rem;
	align-items: center;
	padding:0 2rem;
	justify-content:space-between;
	width:calc(100% - 4rem);
	border-bottom:1px solid gainsboro;
	background: white;
}
.chart li img{
	width:5.3rem;
	height:5.3rem;
	border-radius:50px;
}
.chartinfo{
	margin-left: 2rem;
}
.chartinfo span,.time span, .time i{
	display:block;
}
.chartinfo span:nth-child(1){
	font-size:1.8rem;
}
.chartinfo em{
	border:1px solid red;
    border-radius:2px;
	font-size:1.2rem;
	padding:2px 2px;
	text-align: center;
}
.chartinfo span:nth-child(2){
	font-size:1.4rem;
	color:rgb(183,183,183);
	margin-top: 0.2rem;
}
.time span{
	display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   color:rgb(183,183,183);
}
.time span:nth-child(2){
	display: inline-block;
	width:20px;
	height:20px;
	border-radius: 10px;
	background: red;
	color:white;
	text-align:center;
	line-height:20px;
     margin-left:1rem;
	 margin-top:1rem;
	
}
.title{
	color:red;
	font-size:1.6rem;
	text-align: center;
	margin-top: 0.8rem;
	background: white;
	padding:1.4rem 0; 
	}
</style>
