<template>
	<!--个人主界面-->
	<div class="person">
		<div class="persontop">
		<ul class="headercenter">
		 <li>
			 <img :src="path"/>
			 </li>
		<li>
			<p>{{name}}</p>
		   <span>{{message}}</span>
		</li>
		<li>
			<p>{{back}}</p>
		</li>	
		</ul>
		<div class="month">
			<span class="card">{{card}}|<span class="help">{{help}}</span></span>
			<span class="take">{{take}}</span>
			<span class="key">></span>
		</div>
		<!--我的订单 -->
		<div class="mineorder">
			<p class="mine">我的订单<span class="all">查看全部</span><span class="key2">></span></p>
			<ul class="order">
				<li v-for="(order,index) in orders" :key="index">
					<img :src="order.img" />
					<p>{{order.title}}</p>
				</li>
			</ul>
		</div>
		</div>
		<!-- 优惠券-->
	<ul class="history">
			<li v-for="(history,index) in historys" :key="index">
				<img :src="history.hpath" />
				<p>{{history.htitle}}</p>
			</li>
		</ul>
		
			<!-- 新人红包-->
	<ul class="friend">
			<li v-for="(friend,index) in friends" :key="index">
				<img :src="friend.fpath" />
				<p>{{friend.ftitle}}</p>
			</li>
		</ul>
		
	<!--精品推荐-->
	<div class="title">精品推荐</div>	
	<recommend></recommend>
	</div>
</template>

<script>
	import recommend from "@/shop/Recommend"
	export default{
		name:"person",
		data:function(){
			return{
				path:require("@/assets/person/login.jpg"),
				name:"天空之城",
				message:"勋功章 >",
				back:"拼单返现",
				card:"省钱月卡",
				help:"帮你省194元",
				take:"领4张5元无门槛",
				orders:[{
					img:require("@/assets/person/1.gif"),
					title:"待付款"
				},{
					img:require("@/assets/person/2.gif"),
					title:"待分享"
				},{
					img:require("@/assets/person/3.gif"),
					title:"待发货"
				},{
					img:require("@/assets/person/4.gif"),
					title:"待收货"
				},{
					img:require("@/assets/person/5.gif"),
					title:"待评价"
				}
				],
				historys:[
					{
					hpath:require("@/assets/person/6.gif"),
					htitle:"优惠券",
					},
										{
					hpath:require("@/assets/person/7.gif"),
					htitle:"商品收藏",
					},
										{
					hpath:require("@/assets/person/8.gif"),
					htitle:"店铺收藏",
					},
										{
					hpath:require("@/assets/person/9.gif"),
					htitle:"历史浏览",
					},
										{
					hpath:require("@/assets/person/10.gif"),
					htitle:"退款售后",
					}
				],
				friends:[
					{
				fpath:require("@/assets/person/11.gif"),
				ftitle:"多多果园"
					},
					{
				fpath:require("@/assets/person/12.gif"),
				ftitle:"砍价免费"
					},
					{
				fpath:require("@/assets/person/13.gif"),
				ftitle:"一分抽奖"
					},
					{
				fpath:require("@/assets/person/14.gif"),
				ftitle:"天领现金"
					},
					{
				fpath:require("@/assets/person/15.gif"),
				ftitle:"多多消除"
					},
					{
				fpath:require("@/assets/person/16.gif"),
				ftitle:"收货地址"
					},
			{
				fpath:require("@/assets/person/17.gif"),
				ftitle:"我的评价"
					},
					{
				fpath:require("@/assets/person/18.gif"),
				ftitle:"官方客服"
					},
					{
				fpath:require("@/assets/person/19.gif"),
				ftitle:"设置"
					}					
				]
			
			}
		},components:{
			recommend,
		}
	}
</script>

<style>
	.person{
		width:100%;
		background:rgb(244,244,244);
	}
	.headercenter{
   padding:1rem 1rem;
   height:8rem;
   background: white;
	}
	.headercenter li{
	float: left;
	height:100%;
	position:relative;
	 height:100%;

	}
	.headercenter li:nth-child(1){
		width:20%;
	}	
		.headercenter li:nth-child(2){
		width:40%;
		padding:1rem 1rem;
	}	
		.headercenter li:nth-child(3){
		width:29%;
		padding:1rem 1rem;
		font-size:1.4rem;
		text-align:center;
		height:4rem;
		line-height:4rem;
	
	}	
	.headercenter li img{
		width:6.7rem;
		height:6.7rem;
		border-radius:60px;
		position:absolute;
	     top:50%;
		 left:10%;
		transform: translateY(-50%);
	}
	.headercenter li:nth-child(2) p{
		width:100%;
		height:3rem;
	   line-height:3rem;
	   color:#151516;
	   font-size:1.8em;
	}
	.headercenter li:nth-child(2) span{
		color:#9c9c9c;
		font-size:1.3rem;
	}
.headercenter li:nth-child(3) p{
	     width:80%;
		height:30px;
		line-height:30px;
		border: 1px solid red;
	    border-radius:20px;
        margin:10px 0 0 18px;
}
 .month{
	background:#fdefee;
	height:5.5rem;
    margin:1rem 1rem;
    border-radius:10px  10px 0 0;
}
.card{
	font-size:1.6rem;
	width:40%;
	height:5.5rem;
	line-height:5.5rem;
	padding:20px;
	color:#e86159;
}
.card .help{
	font-size:1.4rem;
}
.month .take{
	background: red;
	height:5.5rem;
	line-height:5.5rem;
	font-size:1.3rem;
	border:1px solid red;
	border-radius:30px;
	color:white;
    padding:3px 8px;
	margin-left:55px;
}
.month .key{
	margin-left:10px;
	color:red;
	font-size:2rem;
}
  .mine{
   margin-left:10px;
   font-size:1.8rem;
   color:#151516;
}
.mineorder{
	padding:1rem 1rem;
}
.all{
	font-size:1.5rem;
	margin-left:230px;
	color:#999;
}
.key2{
	color:#999;
}

.order {
	display:flex;
	padding: 2rem 0;
}
.order li, .history li, .friend li{
	width:20%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content: center;
	
}
.order li img,  .history li img, .friend li img{
width:2.7rem;
height:2.7rem;
display:block;
}
.order li p, .history li p, .friend li p{
	font-size:1.4rem;
	margin-top: 10px;
	color:#58595b;
}
.persontop{
	background: white;
}
.history{
	display: flex;
	margin-top:10px;
	padding: 2rem 0;
	background: white;
		}
.friend{
	margin-top:10px;
	flex-wrap:wrap;
	display:flex;
	padding:1rem 1rem;
	background: white;
}
.friend li{
	margin:10px 0 10px 0;
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
