<template>
	<div class="cloth">
		<!--衣服列表-->
		<ul class="des">
			<li  v-for="(cloth,index) in clothes" :key="index">
			<img :src="cloth.path"/>
			<p>{{cloth.title}}</p>
			</li>
		</ul>
	
		<!--排行榜-->
			<img class="phb" src="@/assets/navg/women.jpg" />
		<!--冬装大牌-->
			<img class="dp" src="@/assets/navg/go.jpg" />
		<!--商品列表-->
	    <!--goods-->
	</div>
</template>

<script>
	export default{
		name:"cloth",
		data:function(){
		return{
		clothes:[
		{ path:require("@/assets/navg/1.jpg"),
		  title:"风衣"		
		},
		{ path:require("@/assets/navg/2.jpg"),
		  title:"连衣裙"		
		},
		{ path:require("@/assets/navg/3.jpg"),
		  title:"牛仔裤"		
		},
		{ path:require("@/assets/navg/4.jpg"),
		  title:"牛仔外套"		
		},
		{ path:require("@/assets/navg/5.jpg"),
		  title:"打底衫"		
		},
		{ path:require("@/assets/navg/1.jpg"),
		  title:"风衣"		
		},
		{ path:require("@/assets/navg/2.jpg"),
		  title:"连衣裙"		
		},
		{ path:require("@/assets/navg/3.jpg"),
		  title:"牛仔裤"		
		},
		{ path:require("@/assets/navg/4.jpg"),
		  title:"牛仔外套"		
		},
		{ path:require("@/assets/navg/more.png"),
		  title:"更多"		
		},
		]
		}
		}
	}
</script>

<style>
	.cloth{
	width:100%;
	height:392px;
	margin-top:50px;
 /* 	background-color: gainsboro; */ 
	}
	.des{
	background-color: white;
     width:100%;
	 height:230px;
	 display:flex;
	flex-wrap: wrap;
	margin-bottom:7px;
	}
	.des li{
	width:20%;
	height:95px;
	display:flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;
	 margin:10px 0;
	}
	.des img{
		width:80px;
		height:80px;
		display:inline-block;
	}
	.des li:last-child img{
		width:30px;
		height:30px;
		display:inline-block;
	}
	.des p{
		margin-top:5px;
		font-size:10px;
		width:50px;
		heght:20px;
		text-align:center;
	}
	
/* 	div.zs{
		width:100%;
		height:154px;
	} */
       img.phb {
		margin-top:7px;
		width:100%;
		height:58px;
		display:block;
	}
	img.dp{
		margin-top:7px;
		display:block;
		width:100%;
		height:82px;
		margin-bottom:8px;
	}
	
	</style>
