<template lang="html">

    <div class="box">
			<!---头部背景-->
				<div class="mui-card-header mui-card-media"  style="height:55vw;background-image:url(../images/loginbg.jpg)">
				</div>
				<div class="mui-card-header mui-card-media box-A">
						<div class="user-top" v-for="(key,index) in data">
								<img :src="key.image"></li>
						</div>
						<div class="user">
							<p class="user-name" >
								<span v-for="(key,index) in data">{{key.username}}</span>
								<!-- <span>{{data}}</span>
								<span>{{this.data}}</span> -->
							</p>
							<p class="user-font" v-for="(key,index) in data">
								{{key.title}}
							</p>
				
							<div class="row fs">
								<div class="col-md-4 	col-xs-4"><p><a href="#">0</a></p>粉丝</div>
								<div class="col-md-4 	col-xs-4"><p><a href="#">0</a></p>关注</div>
								<div class="col-md-4 col-xs-4"><p><a href="#">0</a></p>访客</div>
							</div>
							<div class="row hr">
								<hr  class="col-md-12 	col-xs-12" style="height:20px">
							</div>
							<!-- <div class="money">
								<div class="money-left"><span class="mui-icon-extra mui-icon-extra-gold"></span>营地币:<a>0</a></div>
								<div class="money-right"><span class="mui-icon-extra mui-icon-extra-gold"></span>荣耀币:<a>0</a></div>
							</div> -->
							<div class="row money">
								<div class="col-md-6 	col-xs-6"><span class="mui-icon-extra mui-icon-extra-gold"></span>营地币:<a>0</a></div>
								<div class="col-md-6 	col-xs-6"><span class="mui-icon-extra mui-icon-extra-gold"></span>荣耀币:<a>0</a></div>

							</div>
						</div>
			  	</div>
				<div class="row huodong">
						<div class="col-md-3 	col-xs-3">
							<span class="mui-icon mui-icon-gear"></span>
							<p>身份认证</p>
						</div>
						<div class="col-md-3 	col-xs-3">
							<span class="mui-icon mui-icon-gear"></span>
							<p>身份认证</p>
						</div>
						<div class="col-md-3 	col-xs-3">
							<span class="mui-icon mui-icon-gear"></span>
							<p>身份认证</p>
						</div>
						<div class="col-md-3 	col-xs-3">
							<span class="mui-icon mui-icon-gear"></span>
							<p>身份认证</p>
						</div>
				</div>
				<div class="mui-card-header mui-card-media box-B ">
					<div class="zhanji-title">
						<span style="color:#000 ;float:left">战绩</span>
						<span style="color:#C0C0C0;float:right">更多&nbsp&nbsp></span>
					</div>
					<div class="content">
							<p class="usernew"><span v-for="(key,index) in data">{{key.username}}</span><span>苹果微信区8区</span><span>LV30</span><span style="color:green">·游戏在线</span></p>
							<div class="content-main row">
									<div class="main-right col-xs-3 col-sm-3 col-md-3 col-lg-3">
											<img src="../images/duanwei.png" class="img-responsive img" >
									</div>
									<div class="main-left col-xs-9col-sm-9 col-md-9 col-lg-9">
												<ul class="news">
														<li><p>0</p><span>总场次</span></li>
														<li><p>0%</p><span>胜率</span></li>
														<li><p>0</p><span>MVP</span></li>
														<li><p>0</p><span>战斗力</span></li>
														<li><p>0</p><span>英雄</span></li>
														<li><p>0</p><span>皮肤</span></li>
												</ul>
									</div>
							</div>
					</div>
				</div>
				<div class="dongtai"> 
						<div class="dongtai-title">
							<span style="color:#000 ;float:left">动态&nbsp&nbsp <a href="#" style="color:#c0c0c0">0</a></span>
							<span style="color:#C0C0C0;float:right">更多&nbsp&nbsp></span>
						</div>
						<div class="dongtai-main">
								<p class="dongtai-font" style="text-align:center">前往社区，随时随地分享你的王者见闻</p>
						</div>

				</div>
			
		
    </div>
</template>
<script>
export default {
	
	data(){
		return{
			data:JSON.parse(localStorage.getItem('Flag') || '[]'),
		}
	},
	mounted(){
		this.abs();
	},
	methods:{	
	
		abs(){
			let a =localStorage.getItem('Flag');
			// console.log(a)
			var list = JSON.parse(localStorage.getItem('Flag') || '[]')
			// console.log(list)
           
		}
	}
}
</script>
<style scoped>
.box{
	width: 100%;
	background:	rgb(243, 241, 241)
}
	.box-A{
		width: 80%;
		height:35vw;
		/* min-width: 400px; */
		background-color: #ffffff;
		border-radius: 20px;
		margin: -60px auto;
		position: relative;
		box-shadow: 0px 0px 2px #000;

	}
	 @media screen and (max-width:375px){
		 .box-A{
		width: 90%;
		height:40vw;
		background-color: #ffffff;
		border-radius: 20px;
		margin: -60px auto;
		position: relative;
		box-shadow: 0px 0px 2px #000;
		}
		 .money{
		 width: 90%;
		 height: 5vw;
		 min-height:20px;
		 /* min-width: 100px; */
		 position: absolute;
		 top: 80%;
		 color:#000;
	 }

	.huodong{
		 width: 100%;
		 height: 10vw;
		 position: relative;
		 top: 10%;
		margin: 100px auto;		
	 }
 }
	.user-top{
		width: 10vw;
		height: 10vw;
		border-radius: 50%;
		position: absolute;
		top: -10%;
		left: 10%;
	}
	.user-top img{
		width: 10vw;
		height: 10vw;
	}
	.user{
		width: 80%;
		height: auto;
	}
	.user-name{
		width: 100px;
		height: 30px;
		position: absolute;
		top: 23%;
	}
	.user-font{
		width: 100%;
		height: 8vw;
		position: absolute;
		top: 35%;
	}
	.fs{
		width: 80%;
		height:50px;
		min-width: 280px;
		position: absolute;
		top: 45%;
				color: #000;

	}
	.fs a{
		margin: 0 10px 0 10px;
		cursor: pointer;
	}
	 
	 .hr{
		 width: 90%;
		 height: 20px;
		 position:absolute;
		 top: 65%;
	 }
	 .money{
		 width: 80%;
		 height: 6vw;
		 min-height:30px;
		 min-width: 260px;
		 position: absolute;
		 top: 80%;
		 color:#000;
	 }
	 .money-left{
		 float: left;
	 }
	 .money-right{
		 float:right;
	 }
	 .mui-icon-extra-gold:before{
			color:darkgoldenrod;
	 }
	 .huodong{
		 width: 80%;
		 min-width: 350px;
		 height: 10vw;
		 max-height: 100px;
		 position: relative;
		 top: 10%;
		margin: 100px auto;		
		background: #ffffff;
	 }
	 .huodong div{
		 	margin: 0px 0 0 0px;
	 }
	  @media screen and (min-width:1000px){
				 .huodong div{
		 	margin: 30px 0 0 0px;
	 }
		}
	 .box-B{
		 width: 80%;
			height:42vw;
			min-width: 340px;
			background-color: #ffffff;
			border-radius: 20px;
			margin: -60px auto;
			position: relative;
			box-shadow: 0px 0px 2px #000;
	 }
	 .zhanji-title{
		 width: 100%;
		 height: 4vw;
	 }
	 .content{
		 width: 80%;
		 height: 10vw;
	 }

	.usernew{
		width: 100%;
		float: left;
	}
	 .usernew span{
		 margin: 0 5px 0 5px;
	 }

	.content-main{
		width: 100%;
		height: 15vw;
	}
	 .main-right{
		 width: 25%;
		 height: 25vw;
		 float: left;
	 }
	 .img{
		 margin:20px 0 0 30px;
	 }
	 .main-left{
		 width: 75%;
		 height: 25vw;
		 float: right;
	 }
	  .main-left ul li{
			list-style: none;
			float: left;
			margin:0 0 0 10px;
			color: #000;
		}
		.main-left ul li p{
			margin: 0 0 0 5px;
		}
		.dongtai{
			 width: 80%;
			height:25vw;
			min-width: 340px;
			background-color: #ffffff;
			border-radius: 20px;
			margin: 70px auto;
			position: relative;
			box-shadow: 0px 0px 2px #000;
		}
		.dongtai-title{
			width: 100%;
			height: 4vw;
		}
		.dongtai-title span{
			margin: 5px 0 0 2px;
		}
		.dongtai-main{
			width: 100%;
			height: 21vw;
			box-shadow: 0px 0px 2px #000;
			background: url(../images/dongtai-bg.jpg) no-repeat;
			background-size: 100% 100%;
		}
		.dongtai-font{
			
				color:goldenrod;
		}
</style>


