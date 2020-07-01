<template>
<div>
    <!-- <nav class="mui-bar mui-bar-tab">
        <router-link to="/recomd" class="mui-tab-item mui-active">
            <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
            <span class="mui-tab-label">资讯</span>
        </router-link>
        <a class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon-extra mui-icon-extra-grech"></span>
            <span class="mui-tab-label">赛事</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-pengyouquan"></span>
            <span class="mui-tab-label">社区</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
            <span class="mui-tab-label">战绩</span>
        </a>
        <router-link to="/user" class="mui-tab-item">
            <span class="mui-icon mui-icon-contact mui-icon-icon-contact me"></span>
            <span class="mui-tab-label">我</span>
        </router-link>
    </nav> -->
    <!-- <mt-tabbar v-model="selected">
        <mt-tab-item id="资讯" href="/#/recomd" @click="home">
            <img slot="icon" src="../images/110.jpg">
               资讯
        </mt-tab-item>
        <mt-tab-item id="赛事" href="/#/recomd">
            <img slot="icon" src="../images/110.jpg">
            赛事
        </mt-tab-item>
        <mt-tab-item id="社区">
            <img slot="icon" src="../images/110.jpg">
            社区
        </mt-tab-item>
        <mt-tab-item id="战绩">
            <img slot="icon" src="../images/110.jpg">
            战绩
        </mt-tab-item>
        <mt-tab-item id="我" href="/#/my">
            <img slot="icon" src="../images/110.jpg">
            我
        </mt-tab-item>
    </mt-tabbar> -->
	<nav class="mui-bar mui-bar-tab" id='nav'>
			<p @click="home" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
            	<span class="mui-tab-label">资讯</span>
			</p>
			<p @click="competion" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-grech"></span>
            	<span class="mui-tab-label">赛事</span>
			</p>
			<p @click="community" class="mui-tab-item">				
				<span class="mui-icon mui-icon-pengyouquan"></span>
            	<span class="mui-tab-label">社区</span>
			</p>
			
			<p @click="combat" class="mui-tab-item">				
				<span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
            	<span class="mui-tab-label">战绩</span>
			</p>
			<p @click="user" class="mui-tab-item">				
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact me"></span>
            	<span class="mui-tab-label">我</span>
			</p>
				<!-- <router-link class="mui-tab-item" to="/login">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">登录</span>
				</router-link> -->
		</nav>		

	<div id="cover" style="background: #000; position: fixed; left: 0px; top: 0px; width: 100%;height:130%; filter: alpha(opacity=30); opacity: 0.3; display: none; z-index: 9999 ">
	
	</div>
	<!-- 弹窗 -->
	<div id="showdiv" style="width: 80%; margin: 0 auto; height: 10.5rem; border: 1px solid #999; display: none; position: fixed; top: 40%; left: 10%; z-index: 3; background: #fff">
	<!-- 标题 -->
		<div style="background: #F8F7F7; width: 100%; height: 2rem; font-	size: 0.65rem; line-height: 2rem; border: 1px solid #999; text-align: center;" >
			提示
		</div>
		<!-- 内容 -->
		<div style="text-indent: 50px; height: 4rem; font-size: 0.5rem; padding: 0.5rem; line-height: 1rem; ">
			你未登录，请先登录
		</div>
		<!-- 按钮 -->
		<!-- <div style="background: #418BCA; width: 80%; margin: 0 auto; height: 1.5rem; line-height: 1.5rem; text-align: center;color: #fff;border:1px solid #418BCA ; -moz-border-radius:0.128rem; -webkit-border-radius:0.128rem; border-radius:0.128rem;font-size: 1.59733rem;"	@click="closeWindow">
			确 定
		</div> -->
		<p style="width:80%; height:1px; background:#fff; magrin:0 0 0 0 "></p>
		<div style="background: #418BCA; width: 80%; margin: 0 auto; height: 1.5rem; line-height: 1.5rem; text-align: center;color: #fff; -moz-border-radius:0.128rem; -webkit-border-radius:0.128rem; border-radius: .128rem;font-size: 1.59733rem;"	@click="denglu">
			马上登录
		</div>
	</div>

    
</div>
     
</template>
<script>
import $ from 'jquery'
export default {
	name: 'page-tabbar',
	mounted(){
		// this.home();
		// this.Discrove();
		// this.community();
		// this.combat();
		// this.user();
		if(localStorage.getItem('Flag') == null && this.$router.path != '/zhuce'){
			this.$router.push({path:'/login'});
			this.showWindow();
			console.log(this.$route.path);
        }
	},
    data() {
        return {
            selected: '资讯'
        };
	},
	methods:{ 
		home(){
			// let flg=localStorage.getItem('Flag')
			if(localStorage.getItem('Flag')!=null){
				// console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/recomd'});
			}else{
				this.showWindow();
			}
		},
		competion(){
			if(localStorage.getItem('Flag')!=null){
				// console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/competion'});
			}else{
				this.showWindow();
			}
		},
		community(){
			if(localStorage.getItem('Flag')!=null){
				// console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/social'});
			}else{
				this.showWindow();
			}
		},
		combat(){
			if(localStorage.getItem('Flag')!=null){
				// console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/military'});
			}else{
				this.showWindow();
			}
		},
		user(){
			if(localStorage.getItem('Flag')!=null){
				// console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/my'});
			}else{
				// alert('你未登录')
				this.showWindow();

			}
		},
	
		showWindow(){
			$('#showdiv').show();  //显示弹窗
			$('#cover').css('display','block'); //显示遮罩层
			$('#cover').css('height',document.body.clientHeight+'px'); //设置遮罩层的高度为当前页面高度
		},
		// 关闭弹窗
		closeWindow(){
		$('#showdiv').hide();  //隐藏弹窗
		$('#cover').css('display','none');   //显示遮罩层
		},
		denglu(){
		   this.$router.push({path:'/login'});
		   	$('#showdiv').hide();  //隐藏弹窗
			$('#cover').css('display','none');   //显示遮罩层
        }
	
	},
	watch:{//可以使用watch监听路由
		// this.$route.path
		'$route.path':function(newVal,oldVal){
			// console.log(newVal +'----->'+ oldVal);
			if(newVal == '/login'){
				console.log('欢迎您，进入登录页面');
			}else if(newVal == '/recomd'){
					$('#nav p').removeClass('mui-active')
				$('#nav p:eq(0)').addClass('mui-active')
			}else if(newVal =='/Discrove'){
				$('#nav p').removeClass('mui-active')
				$('#nav p:eq(1)').addClass('mui-active')
			}else if(newVal =='/Order'){
					$('#nav p').removeClass('mui-active')
				$('#nav p:eq(2)').addClass('mui-active')
			}else if(newVal =='/my'){
				$('#nav p').removeClass('mui-active')
				$('#nav p:eq(4)').addClass('mui-active')
			}
		}
	},
}
</script>
<style>
.mui-bar .mui-bar-tab{
    z-index: 999;
    position: fixed;
    bottom: 0;
}
.mui-bar-tab .mui-tab-item.mui-active{
    text-decoration: none;
    color: #fcac00;
}
.mui-tab-item .me{
    font-size: 28px;
}
.mui-bar-tab{
    border-top-left-radius: 20px;
    border-top-right-radius:20px;
    box-shadow: 0px 5px 5px 5px #cccccc;
    background: white;
}
a{
    display: block;
}
.mint-tab-item-icon img{
    width: 24px;
    height: 24px;
}
.mint-tabbar{
    position: fixed;
    bottom: 0;
    z-index: 999;
    border-top-left-radius: 20px;
    border-top-right-radius:20px;
    box-shadow: 0px 5px 5px 5px #cccccc;
    background: white;
}
.mint-tab-item{
    padding: 5px 0;
}
.mint-tab-item-label{
    text-decoration: none;
    color: rgb(70, 70, 70);
}
.mint-tabbar > .mint-tab-item.is-selected{
	text-decoration: none;
    color: #fcac00;
}
</style>

