<template>
	<!--首英：第四部分 商品列表-->
	<ul class="productList">
		<li v-for="(product,index) in products" :key="index">
			<!--图片-->
			<div class="tp">
			<img :src="product.imgPath"/>
			</div>
			<!--描述-->
			<div class="des">
				<div class="tag">
				<img src="@/assets/shoplist/jw.jpg" />
				<span>{{product.name}}</span>
				</div>
				<span class="pds">{{product.des}}</span>
		
				<span class="rank">{{product.ranking}}
					<span>&nbsp{{product.postage}}</span>
				</span>
				
				<span class="price">
				¥{{product.price}}
				<span class="saled">已拼{{product.saled}}万+件</span>
				</span>
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
         {imgPath:require("@/assets/shoplist/cs.jpg"),
			name:"秋冬季新款男士加绒保暖衬衫长袖中老年格子衬衫",
			des:"奕辰服饰专营店",
			ranking:"本周男衬衫畅销前十",/* 排名 */
			postage:"退货包运费险",
			price:"29.9",
			saled:100000,
			},
			{imgPath:require("@/assets/shoplist/cs.jpg"),
						name:"秋冬季新款男士加绒保暖衬衫长袖中老年格子衬衫",
						des:"奕辰服饰专营店",
						ranking:"本周男衬衫畅销前十",/* 排名 */
						postage:"退货包运费险",
						price:"29.9",
						saled:100000,
						},
			{imgPath:require("@/assets/shoplist/cs.jpg"),
						name:"秋冬季新款男士加绒保暖衬衫长袖中老年格子衬衫",
						des:"奕辰服饰专营店",
						ranking:"本周男衬衫畅销前十",/* 排名 */
						postage:"退货包运费险",
						price:"29.9",
						saled:100000,
						}			]
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

<style>
	.productList {
     width:100%;
	 margin-top:10px;
	 background:white;
	 overflow-y:scroll;
	}
	.productList li{
	width:100%;
	height:176px;
	}
	.tp{
	width:47%;
	height:100%;
	}
	.tp img{
		display:inline-block;
		width:156px;
		height:156px;
		margin:10px 10px;
	}
	
	 li .des{
		 width:53%;
		 height:156px;
         margin:10px 0;
	}
	/* 放在同一行 */
	.tp,.des{
	float:left;
	}
    .des  .tag{
	width:100%;
	height:40px;
	}
	div.tag img{
		display:inline-block;
		width:50px;
		height:16px;
		float:left;

	}
	div.tag span{
	font-size:13px;
	overflow:hidden;	
	height:20px;
	line-height:20px;
	color:#151516;
	}
    .pds{
		width:100px;
		color:#9c9c9c;
		text-align:left;
	}
	.rank{
		margin-top:30px;
		width:190px;
		color:rgb(255, 87, 6);
		font-size:10px;
	}
	.price{
	width:190px;	
	font-size:14px;
	color: #e02e24;
	font-weight:600;
	}
	.saled{
		margin-left:10px;
		width:50px;
		font-size:13px;
		color:#9c9c9c;
	}
</style>
