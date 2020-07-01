<template>  
    <div class="box"> 
        <!-- <div id='control'>
            <div class="font" >
                    <span>欢迎来到王者荣耀</span>
            </div>
            <div class="font">
                <span>请输入你的用户名和密码进行登录操作</span>
            </div>
        </div> --> 
            <form  method="post" class="mui-input-group login">
                    
                    <div class="mui-input-row">
                        <label>用户名</label>
                    <input type="text"  v-model="User.username" class="mui-input-clear" placeholder="请输入用户名">
                    </div>
                    <div class="mui-input-row">
                        <label>密码</label>
                        <input type="password" v-model="User.password" class="mui-input-password" placeholder="请输入密码">
                    </div>
                    <!-- <p id="remember-password">
                            <input type="checkbox" v-model="User.r_me" />记住我
                    </p> -->
                    <div class="mui-button-row">
                        <button type="button" class="mui-btn mui-btn-primary" value="登录" @click="postrequest"  >登录</button>
                        <button type="button" class="mui-btn mui-btn-danger"><router-link to="/zhuce">注册</router-link></button>
                    </div>
            </form>
                    <!-- 遮罩层 -->
                <div id="cover" style="background: #000; position: fixed; left: 0px; top: 0px; width: 100%; height:200%; filter: alpha(opacity=30); opacity: 0.3; display: none; z-index: 2 ">
                
                </div>
                <!-- 弹窗 -->
                <div id="showdiv" style="width: 80%; margin: 0 auto; height: 9.5rem; border: 1px solid #999; display: none; position: fixed; top: 40%; left: 10%; z-index: 3; background: #fff">
                <!-- 标题 -->
                <div style="background: #F8F7F7; width: 100%; height: 2rem; font-size: 0.65rem; line-height: 2rem; border: 1px solid #999; text-align: center;" >
                    提示
                </div>
                <!-- 内容 -->
                <div style="text-indent: 50px; height: 4rem; font-size: 0.5rem; padding: 0.5rem; line-height: 1rem; ">
                    	    <p>你未登录，请先登录</p>
                            <p>使用该功能，请先登录</p>
                </div>
                <!-- 按钮 -->
                <div style="background: #418BCA; width: 80%; margin: 0 auto; height: 1.5rem; line-height: 1.5rem; text-align: center;color: #fff;margin-top: 1rem; -moz-border-radius: .128rem; -webkit-border-radius: .128rem; border-radius: .128rem;font-size: .59733rem;" @click="closeWindow">
                   确定
                </div>
                
                	
                	

                </div>
                
            

                  
 </div>
</template>
<script src="./vue-resource1.5.1.js"></script>
<script>

</script>

<script>
import $ from 'jquery'
export default {
     data(){
        return {
            User:{},
            obj:{},
        }
    },
     methods:{
       postrequest(){
        // console.log(1);
        // http://127.0.0.1:8888/login?username='+this.User.username+'&&password='+this.User.password+'&&callback=demo
        // $('#src1').attr({'src':'./1.jpg'});
        // console.log($('#src1').attr('src'));
        let scprit = document.createElement('script')
           scprit.src='http://localhost:8088/login?username='+this.User.username+'&&password='+this.User.password+'&&callback=demo'
           $('.box').after(scprit)
        console.log(scprit);
         this.User.username=this.User.password=''
       
        // this.demo(data)
        //    $('.box').append('<script ref="add" src=""></scprit>');

        //     var _this=this;
        //     // console.log(this.User)
        //     let url='http://127.0.0.1:8888/login'
		// 	//使用post 请求，可以通过then设置成功的回调函数
		// 	//手动发起post请求，有些服务器不支持，所以需要设置post方法的第三个参数，{emulateJSON:true},设置类型为普通的表单数据格式
		// 	// this.$http.post('1.php?nb=123',{name:'tom'},{emulateJSON:true}).then(function(result){
		// 	// 	console.log(result);
		// 	// 	_this.obj=result.body;
        // 	// })
        //  this.$http.get('http://127.0.0.1:8888/login?username='+this.User.username+'&&password='+this.User.password+'').then(function(result){
        //         console.log(123);
        //         console.log(result);
		// 		// _this.obj=result.body;
        //     })	
        //  this.$http.post('http://127.0.0.1:8888/login',{username:this.User.username,password:this.User.password}).then(function(result){
        //         console.log(123);
        //         console.log(result);
		// 		// _this.obj=result.body;
        //     })	
        //    $.ajax({
        //             url:"http://127.0.0.1:8888",
        //             type:'post',
        //             data:'name=aaa&password=123456789',
        //             dataType:'josn',
        //             success: function(json){
        //                 alert(123);
        //             }
        //        })
        },
        // abb(){
        //         localStorage.clear('Flag');
        //         alert('清除成功:'+localStorage.getItem('Flag'))
        // },
         showWindow(){
			$('#showdiv').show();  //显示弹窗
			$('#cover').css('display','block'); //显示遮罩层
			$('#cover').css('height',document.body.clientHeight+'px'); //设置遮罩层的高度为当前页面高度
		},
		// 关闭弹窗
		 closeWindow() {
		$('#showdiv').hide();  //隐藏弹窗
		$('#cover').css('display','none');   //显示遮罩层
            },
       
     }
   
  }
</script>

<style scoped>
.box{
    width:100%;
    min-height:640px;
    height: 100%; 
    margin: 0  auto;
}
#control{
    padding-top: 0px;
}
.mui-input-group{
    padding-top: 40%;
  background: none;
  color: black;
}
.mui-input-row input{
    width: 60%;
}
input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: goldenrod;
    /* placeholder字体大小  */
    font-size: 12px;
    /* placeholder位置  */
}
.mui-input-group:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 0px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #553334;
}
 @media screen and (max-width:375px){
         .box {
            width: 100%;
            min-width: 200px;
            min-height: 500px;
            height: 100%;
            font-size: 12px;
             color:goldenrod; 
            background-image: url(../images/loginbg.png);
                background-size:100% 100%;
           }
        .font{
          width: 250px;
           margin:  0 auto;
            font-size: 14px;
            color:goldenrod; 
        }
        }
  @media  screen and (min-width:375px) and (max-width:499px) {
  .box {
      width: 100%;
      min-height: 667px;
      height: 100%;
    background-image: url(../images/loginbg.png);
        background-size:100% 100%;
              font-size: 16px;
  }
  .font{
            width: 450px;
            margin:  0 auto;
            font-size: 24px;
            color:goldenrod; 
        }
}

@media  screen and (min-width:500px) and (max-width:900px) {
  .box {
      width: 100%;
      min-height: 667px;
      height: 100%;
    background-image: url(../images/login-big.jpg);
        background-size:100% 100%;
              font-size: 16px;
  }
  .font{
            width: 450px;
            margin:  0 auto;
            font-size: 24px;
            color:goldenrod; 
        }
}

@media not screen and (max-width: 901px){
               .box {
                width: 100%;
                height: 100%;
                background-image: url(../images/login-big.jpg);
                background-size:100% 100%;
                font-size:20px;
                  }
               .font{
                   width: 450px;
                    min-width: 100px;
                    margin:  0 auto;
                    font-size: 24px;
                     color:goldenrod; 
                }
                .mui-input-row{
                    width: 100%;
                    
                }
                .login{
                    width: 50%;
                    height: 100%;
                    margin: 10px auto;
                    /* padding: 10px 0 ; */
                }
               
            }
.mui-button-row a{
    text-decoration: none;
    color: white;
}

</style>
