<template>
	<ul class="sale">
		 <li id="product"  v-for="(good,index) in goods" :key="index">
			<div class="sleft">			
			  <img :src="good.tpath"/>
			  <div class="pd">
				<p>{{good.tdes}}</p>
				<p>{{good.tpostage}}</p>
			     <p>￥{{good.tprice}}<span>已拼{{good.tcount}}件</span></p>
				
			  </div>
		     </div>
			 <div class="sright">
			   <img :src="good.rpath"/>
			   <div class="pd">
			 	<p>{{good.rdes}}</p>
			 	<p>{{good.rpostage}}</p>
			      <p>￥{{good.rprice}} <span>已拼{{good.rcount}}件</span></p>	
			   </div>
			  </div>
	        </li>
				</ul>	
</template>

<script>
	export default{
	name:'goodslist',
	data:function(){
	 return{
	 goods:[
		 {tpath:require("@/assets/navg/wt.jpg"),
		  tdes:"毛呢外套女士呢子大衣秋冬季",
		  tpostage:"退货包邮费",
		  tprice:"99",
		  tcount:"15",
	     rpath:require("@/assets/navg/yr.jpg"),
		 rdes:"【品牌同款】轻薄羽绒服女大",
		 rpostage:"急速退款",
		 rprice:"36.8",
		 rcount:"7.5",	 
		 },
		 {tpath:require("@/assets/navg/bz.jpg"),
		  tdes:"经典百褶裙女纯棉不起球",
		  tpostage:"包运费险",
		  tprice:"35",
		  tcount:"100",
		 rpath:require("@/assets/navg/mf.jpg"),
		 rdes:"【明星同款】时尚百搭棉服女",
		 rpostage:"满30减10",
		 rprice:"59.9",
		 rcount:"600",	 
		 },
		 {tpath:require("@/assets/navg/jr.jpg"),
		  tdes:"冬季加绒牛仔裤女2019",
		  tpostage:"买一赠一",
		  tprice:"49.9",
		  tcount:"10000+",
		 rpath:require("@/assets/navg/dd.jpg"),
		 rdes:"【经典打底】纯色毛衣打底衫",
		 rpostage:"满20减5",
		 rprice:"10.8",
		 rcount:"3000",	 
		 }
	 ]
		
	 }
	}
	}
</script>

<style>
	.share{
	     width:100%;
	     height:100%;
		 overflow-y:scroll;
		}
		li#product{
			width:100%;
			height:255px;
		    background-color:white;
		}
		.sleft img,.sright img{
			display:inline-block;
	       width:185px;
			height:185px;
		}
	 .sleft, .sright{
		  float:left;
		  text-align:left;
	 }
	.sright{
		 margin-left:4px;
	}
	 div.pd{
		 width:50%;
		 height:50px;
		 margin:0 0 10px 0;
	 }
	 .pd p{
		  width:185px;
	     margin-top:3px;
		 }
		   .pd p:first-child{
			   font-size:13px;
			   height:13px;
			   line-height:13px;
		   }
		   .pd p:nth-child(2){
			   color: rgb(255, 87, 6);
			   font-size:12px;
			   height:13px;
			   line-height:13px;
		   }
		   .pd p:last-child{
			  color: #e02e24;
			  font-size:13px;
			  height:13px;
			  line-height:13px;
			  font-weight:800;
		   }
		   .pd p:last-child span{
			   font-size:12px;
			  color:#9c9c9c;
		   }
</style>
