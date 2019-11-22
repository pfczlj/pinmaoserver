<template>
	<!--首页：底部按钮 -->
	<ul class="tabbar">
		<li v-for="(bar,index) in tabbars" :class="selected==index?'selected':''" @click="selected=index"  v-bind:key="bar.id">
			<router-link :to="bar.to">
			<img class="photo" :src="bar.path"/>
			<span>{{bar.title}}</span>
			</router-link>
		</li>
	</ul>

</template>

<script>
		var imgs;
	export default{
		name:"tabbar",
		data:function(){
			return{
			selected:-1,
				tabbars:[
					{
					path:require("@/assets/tabbar/fang1.svg"),
					pathed:require("@/assets/tabbar/fang2.svg"),
					title:"首页",
					to:"/index"
					},
						{
					path:require("@/assets/tabbar/tui1.svg"),
					pathed:require("@/assets/tabbar/tui2.svg"),
					title:"推荐",
					to:"/recommend"
					},
						{
					path:require("@/assets/tabbar/sou1.svg"),
					pathed:require("@/assets/tabbar/sou2.svg"),
					title:"搜索",
					to:"search"
					},
						{
					path:require("@/assets/tabbar/liao1.svg"),
					pathed:require("@/assets/tabbar/liao2.svg"),
					title:"聊天",
					to:"chart"
					},
						{
					path:require("@/assets/tabbar/ge1.svg"),
					pathed:require("@/assets/tabbar/ge2.svg"),
					title:"个人中心",
					to:"/person"
					}
				]
			}
		},
		watch:{
			selected:function(newIndex,oldIndex){
				var img =imgs[newIndex];
				var oldImg =imgs[oldIndex];
				switch(newIndex){
					case 0:
					img.src=require("@/assets/tabbar/fang2.svg");
					break;
					case 1:
					img.src=require("@/assets/tabbar/tui2.svg");
					break;
					case 2:
					img.src=require("@/assets/tabbar/sou2.svg");
					break;
					case 3:
					img.src=require("@/assets/tabbar/liao2.svg");
					break;
					case 4:
					img.src=require("@/assets/tabbar/ge2.svg");
					break;																				
				}
				switch(oldIndex){
					case 0:
					oldImg.src=require("@/assets/tabbar/fang1.svg");
					break;
					case 1:
					oldImg.src=require("@/assets/tabbar/tui1.svg");
					break;
					case 2:
					oldImg.src=require("@/assets/tabbar/sou1.svg");
					break;
					case 3:
					oldImg.src=require("@/assets/tabbar/liao1.svg");
					break;
					case 4:
					oldImg.src=require("@/assets/tabbar/ge1.svg");
					break;																				
				}				
			}
		},
		created:function(){
			this.selected=0;
		},
		mounted:function(){
		imgs =document.getElementsByClassName('photo');
			
		}
		
	}
</script>

<style>
	.tabbar{
		width:100%;
		position: fixed;
		bottom:0;
		z-index:2;
		background:white;/*防止盖不住底部*/
		display:flex;
		flex-direction:row;/*按行排列*/
		justify-content: space-between;
		width:100%;
		border-top:1px solid gainsboro;
	     height:5rem;
	}
	.tabbar li{
		width:20%;
		height:100%;
	}
	.tabbar li a{
		color:rgb(79,79,79);
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		width:100%;
		height:100%;		  
	}
	.tabbar li  img{
      width:2rem;
	  height:2rem;
	}
	.tabbar li span{
		display:block;
			height:1.5rem;
			line-height:1.5rem;
			margin-top:3px;
			text-align: center;
	        font-size:1.3rem;

	}
	.tabbar li.selected a{
		color:rgb(224,46,36);
	}
</style>
