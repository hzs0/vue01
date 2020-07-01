<template>
    <div class="xm-container">
        <!-- 这里是头部 -->
        <!-- <mt-header fixed title="小明的爱情故事"></mt-header> -->

        <!-- 这里是主体部分 -->
        <router-view></router-view>
	<!--页眉，放置标题-->
	
        <nav class="mui-bar mui-bar-tab" id='nav'>
			<p @click="home" class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">咨询</span>
			</p>
			<p @click="Discrove" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">赛事</span>
			</p>
			<p @click="community" class="mui-tab-item">				
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
				<span class="mui-tab-label">社区</span>
			</p>
			
			<p @click="combat" class="mui-tab-item">				
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
				<span class="mui-tab-label">社区</span>
			</p>
			<p @click="user" class="mui-tab-item">				
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
				<span class="mui-tab-label">我的</span>
			</p>
				<!-- <router-link class="mui-tab-item" to="/login">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">登录</span>
				</router-link> -->
		</nav>			
			<!-- 遮罩层 -->
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
	mounted(){
		this.home();
		this.Discrove();
		this.community();
		this.combat();
		this.user();
	},
    methods:{ 
		home(){
			// let flg=localStorage.getItem('Flag')
			if(localStorage.getItem('Flag')!=null){
				console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/Home'});
			}else{
				this.showWindow();
			}
		},
		Discrove(){
			if(localStorage.getItem('Flag')!=null){
				console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/Discrove'});
			}else{
				this.showWindow();
			}
		},
		community(){
			if(localStorage.getItem('Flag')!=null){
				console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/Order'});
			}else{
				this.showWindow();
			}
		},
		combat(){
			if(localStorage.getItem('Flag')!=null){
				console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/Home'});
			}else{
				this.showWindow();
			}
		},
		user(){
			if(localStorage.getItem('Flag')!=null){
				console.log(localStorage.getItem('Flag'))
				 this.$router.push({path:'/My'});
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
                }else if(newVal == '/Home'){
						$('#nav p').removeClass('mui-active')
					$('#nav p:eq(0)').addClass('mui-active')
                }else if(newVal =='/Discrove'){
					$('#nav p').removeClass('mui-active')
					$('#nav p:eq(1)').addClass('mui-active')
				}else if(newVal =='/Order'){
						$('#nav p').removeClass('mui-active')
					$('#nav p:eq(2)').addClass('mui-active')
				}else if(newVal =='/My'){
					$('#nav p').removeClass('mui-active')
					$('#nav p:eq(4)').addClass('mui-active')
				}
            }
        },
}
</script>
<style scoped>
.xm-container{
    /* padding-top:40px;
    padding-bottom:50px; */
}
</style>


