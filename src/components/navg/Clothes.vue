<template>
	<div class="cloth">
		<ul class="des">
			<li  v-for="(cloth,index) in clothes" :key="index">
			<img :src="cloth.path"/>
			<p>{{cloth.title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"cloth",
		data:function(){
		return{
		clothes:[
		{ path:require("@/assets/navg/1.jpg"),
		  title:"秋季新品"		
		},
		{ path:require("@/assets/navg/2.jpg"),
		  title:"秋季新品"		
		},
		{ path:require("@/assets/navg/3.jpg"),
		  title:"秋季新品"		
		},
		{ path:require("@/assets/navg/4.jpg"),
		  title:"秋季新品"		
		},
		{ path:require("@/assets/navg/5.jpg"),
		  title:"秋季新品"		
		},
		]	
		}
		}
	}
</script>

<style>
	.cloth{
	width:100%;
	margin:10px 10px;
	}
	.des{
	margin-top:4.3rem;
     width:100%;
	 display:flex;
	flex-wrap: wrap;
	}
	.des li{
	width:20%;
	height:6rem;
	display:flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;
	 margin:10px 0;
	}
</style>
