<template>
	<!--推荐主界面-->
<ul class="recommend">
	<li v-for="(product,index) in products" :key="index">
		<img :src="product.path" />
		<span class="name">{{product.name}}</span>
		<span class="saleinfo">
			<em class="price">¥{{product.price}}</em>
			<em class="salced">已拼{{product.salced}}</em>
		</span>
	</li>
</ul>
</template>

<script>
	export default{
		name:"recommend",
		data:function(){
			return{
			products:[
			{
			path:require("@/assets/recommend/1.gif"),
			name:"正宗螺蛳粉",
			price:9.9,
			salced:100000,
			},
		{
			path:require("@/assets/recommend/2.gif"),
			name:"南极人正品",
			price:9.9,
			salced:100000,
			},
			{
			path:require("@/assets/recommend/3.gif"),
			name:"9600防尘口罩",
			price:9.9,
			salced:100000,
			},
			{
			path:require("@/assets/recommend/4.gif"),
			name:"儿童凹槽练字",
			price:9.9,
			salced:100000,
			},
			{
			path:require("@/assets/recommend/1.gif"),
			name:"正宗螺蛳粉",
			price:9.9,
			salced:100000,
			},
		{
			path:require("@/assets/recommend/2.gif"),
			name:"南极人正品",
			price:9.9,
			salced:100000,
			},
			{
			path:require("@/assets/recommend/3.gif"),
			name:"9600防尘口罩",
			price:9.9,
			salced:100000,
			},
			{
			path:require("@/assets/recommend/4.gif"),
			name:"儿童凹槽练字",
			price:9.9,
			salced:100000,
			}		
			]
			}
		}
	}
</script>

<style>
.recommend{
	overflow:hidden;
	background:rgb(244,244,244);
}
.recommend li{
	width:49%;
	height:28rem;
	float:left;
	background:white;
}
.recommend li img{
	width:100%;
	height:20rem;
}
.recommend li .name{
	height:2.2rem;
	line-height:2.2rem;
	font-size:1.5rem;
    margin-top:5px;
	font-weight:bold;
	padding: 0 1rem;

}
.recommend li .saleinfo{
	margin-top:2rem;
	padding: 0 1rem;
	height:3rem;
	line-height:3rem;
}
.recommend li:nth-child(even){
	margin-left:1%;
}
 .saleinfo .price{
	 color:rgb(217,0,0);
	 font-size:1.7rem;
	 font-weight: bold;
 }
  .saleinfo .salced{
	  font-size:1.3rem;
	  color:#58595B;
	  margin-left:1rem;
  }
  .recommend li span{
	  display: block;
  }
</style>
