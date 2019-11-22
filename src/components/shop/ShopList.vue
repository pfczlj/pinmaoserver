<template>
	<!--首英：第四部分 商品列表-->
	<ul class="productList">
		<li v-for="(product,index) in products" :key="index">
			<img :src="product.imgPath"/>
			<div class="des">
				<span class="name">{{product.name}}</span>
				<span class="productPrice">
					<em class="price">¥{{product.price}}</em>已拼{{product.saled}}万+件</span>
			</div>
		</li>
		<hr/>
	</ul>
</template>

<script>
	export default{
		name:"productlist",
		data:function(){
			return{
		products:[
         {imgPath:require("@/assets/shoplist/1.gif"),
			name:"正宗螺蛳粉",
			price:9.9,
			salced:100000,
			},
		{
			imgPath:require("@/assets/shoplist/2.gif"),
			name:"南极人正品",
			price:9.9,
			salced:100000,
			},
			{
			imgPath:require("@/assets/shoplist/3.gif"),
			name:"9600防尘口罩",
			price:9.9,
			salced:100000,
			},
			{
			imgPath:require("@/assets/shoplist/4.gif"),
			name:"儿童凹槽练字",
			price:9.9,
			salced:100000,
			},	]
			}
		},
		mounted:function(){
		// 	获取远程数据
		// this.$axios
		// .get(this.$urls.products)
		// .then( response => {
		// 	console.log(response);
		// 	this.products = response.data
		// 	})
		}
	}
</script>

<style scoped>
	.productList {
     width:100%;
	 margin-top:10px;
	 background:white;
	}
	.productList li{
		 width:100%;
		 height:18.5rem;
		 display:flex;/* 水平放着 */
	     margin-top:10px;
	    border-bottom:1px solid gainsboro;
	}
	
	.productList li img{
		width:17.2rem;
		height:17.2rem;
		padding:5px 8px 8px 10px;
	}
	 .des {
		display: flex;
		flex-direction:column;
		justify-content: space-between;
		font-size:1.7rem;
		padding:8px;
	}
   .des .name{
	  height:4rem;
	  display:flex;
	  flex-wrap: wrap;
      font-size:1.7rem;
	  font-weight: bold;
	  line-height:3rem;
	  margin:8px 0 0 10px;
	  color:#151516;
	   width:210px;
	 }
	  .productPrice{
		  width:200px;
		  height:2rem;
		  line-height:2rem;
		  color:#9c9c9c;
		  font-size:1.6rem;
	  }
	
	 .price{
		font-size:1.9rem;
		color:#e02e24;
		font-weight:800;
		margin-right:10px;
	}
	
</style>
