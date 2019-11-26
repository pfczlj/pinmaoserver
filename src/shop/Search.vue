<template>
	<!--搜索主界面-->
	<div class="root">
		<div class="header">
		<div class="search">搜索你想要的</div>
	</div>
	   <div class="categoryarea">
		 <div class="find">
		  <span class="bh">百货</span>
		   <span  class="more">查看更多></span>
		 </div>
		   <img class="tu" :src="img" />
		
		   <ul class="category">
			   <li v-for="(category,index) in categories" :class="selected ==index?'selected':''"  @click="selected=index" :key="index">
				   {{category.name}}
			   </li>
		   </ul>
		   
		   <ul class="categorylist">
			   <li v-for="(category,index) in categorylist"  :key="index">
				   <img :src="category.path"/>
				   <span>{{category.name}}</span>
			   </li>
		   </ul>
	   </div>
	
	</div>
</template>

<script>
	export default{
		name:"search",
		data:function(){
			return{
				selected:0,
				img:require("@/assets/search/langman.jpg"),
				categories:[
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
										
				],
				categorylist:[
					{path:require("@/assets/search/1.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/2.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/3.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/4.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/5.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/6.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/7.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/8.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/9.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/10.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/11.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/12.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/13.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/14.jpg"),
					name:"日用百货"},
					{path:require("@/assets/search/15.jpg"),
					name:"日用百货"}					
				]
			}
		}
	}
</script>

<style scoped>
    ul,.categoryarea{
		float:left;
		}
	.header{
		width:100%;
		height:5.5rem;
	    display:flex;
		justify-content: center;
		align-items:center;
		border-bottom: 1px solid gainsboro;
	}	
	.search{
		width:38.3rem;
		height:4rem;
		border-radius:10px;
		background:rgb(237,237,237);
		color:rgb(159,159,159);
		display:flex;
		align-items:center;
		justify-content:center;
		font-size:1.6rem;
		}
		.search img{
			width:1.7rem;
			height:1.7rem;
		}
        .find{
			float: right;
			width:31.5rem;
			height:3.7rem;
	        line-height:3.7rem;
			margin-top:1rem;
		}
		.tu{
            margin:1rem 1rem ;
			width:28rem;
			height:10rem;
			display:inline-block;
		}
		.categoryarea span{
			padding:0 1.2rem;
	
		}
      .bh{
		  font-size:1.7rem;
		  color:#58595B;
	  }
	  .more{
		  font-size:1.4rem;
		   color: #959595;
		   float:right;
		 
	  }
		ul.category {
			height:calc(11 * 5.4rem);
			overflow-y: scroll;
			width:25%;
		}
		.category li{
			line-height:3rem;
			width:100%;
			line-height:3rem;
			text-align:center;
			background:rgb(248,248,248);
			font-size:1.6rem;
		}
		.category li.selected{
			color:red;	
			position: relative;
			background-color:white;
		}
		.category li.selected:before{
			width:2px;
			height:3.9rem;
			background:red;
			content:"";
			display:inline-block;
			position:absolute;
			top:50%;
			left:0;
			transform: translateY(-50%);
		}
		.categorylist {
			background-color:white;
			display:flex;
			flex-wrap: wrap;/*换行*/
			width:75%;
		}
		.categorylist li{
			width:30%;
		    display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size:1.3rem;
		}
		.categorylist li img{
			width:5.6rem;
		}
</style>
