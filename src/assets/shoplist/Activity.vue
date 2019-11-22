<template>
	<ul class="activity">
		<li v-for="(activity,index) in activities" :key="activity.id">
			<img :src="activity.path"/>
			<span>{{activity.title}}</span></li>
	</ul>
</template>

<script>
	export default{
		name:"activity",
		data:function(){
			return{
				index:0,
			activities:[
			{path:require("@/assets/activity/闹钟.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/货车.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/徽章.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/树.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/便签.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/充值.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/钱袋.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/签到.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/小猪.gif")
			,
			title:"限时秒杀"},
			{path:require("@/assets/activity/电器.gif")
			,
			title:"限时秒杀"},
			]
		}
		}
	}
</script>

<style>
	.activity{
	width:100%;
	 display:flex;
     flex-wrap: wrap;
     background:white;
	}
	.activity li{
		width:20%;
		height:6rem;
		display:flex;
		flex-direction:column;
		align-items: center;
		justify-content: center;
         margin:10px 0;
	}
	.activity li img{
		width:4rem;
		height:4rem;

	}
		.activity li span{
			display:block;
			height:2rem;
			line-height:2rem;
			margin-top:3px;
			text-align: center;
	        font-size:1.3rem;
			color:grey;
		}
</style>
