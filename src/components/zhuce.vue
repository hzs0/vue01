<template lang='html'>
         <form  method="post" class="mui-input-group">
                    <div class="mui-input-row">
                          <label>用户名</label>
                      <input type="text"  v-model="User.username" class="mui-input-clear" placeholder="请输入用户名" @blur="username">
                      <span class="glyphicon glyphicon-remove" id='cuo1'></span>
                      <span class="glyphicon glyphicon-ok" id='ok1'></span>
                    </div>
                    <p></p>
                    <div class="mui-input-row">
                        <label>密码</label>
                        <input type="password" v-model="User.password" class="mui-input-clear" placeholder="请输入密码" @blur="password">
                          <span class="glyphicon glyphicon-remove" id='cuo2'></span>
                          <span class="glyphicon glyphicon-ok" id='ok2'></span>
                    </div>
                    <p></p>
                     <div class="mui-input-row">
                        <label>邮箱</label>
                        <input type="text" v-model="User.email" class="mui-input-clear" placeholder="请输入邮箱" @blur='email'>
                        <span class="glyphicon glyphicon-remove" id='cuo3'></span>
                        <span class="glyphicon glyphicon-ok" id='ok3'></span>
                    </div>
                    <p></p>
                     <div class="mui-input-row">
                        <label>手机号码</label>
                        <input type="text" v-model="User.iphone" class="mui-input-clear" placeholder="请输入你的手机号码" @blur='iphone'>
                         <span class="glyphicon glyphicon-remove" id='cuo4'></span>
                       <span class="glyphicon glyphicon-ok" id='ok4'></span>
                    </div>
                    <p></p>
                    
             
                    <!-- <p id="remember-password">
                            <input type="checkbox" v-model="User.r_me" />记住我
                    </p> -->
                    <div class="mui-button-row">
                        <button type="button" class="mui-btn mui-btn-primary" value="登录"  @click="post"  id='login'>登录</button>
                        <button type="button" class="mui-btn mui-btn-danger"><router-link to="/login">取消</router-link></button>
                    </div>
                    <button v-model="obj">{{obj}}</button>
            </form>
</template>
<script>
import $ from 'jquery'
export default {
   data(){
      return {
        User:{},
        obj:'',
        userone:false,
        passone:false,
        iphoneone:false,
        emialone:false
      }
    },
    mounted(){
    },
    methods:{
        post(){
            let post = 'username='+this.User.username+'&&password='+this.User.password+'&&email='+this.User.email+'&&iphone='+this.User.iphone
            let _this =this
            if(!this.userone&&!this.passone&&!this.iphoneone&&!this.emialone){
                 $('#login').attr('disabled',false)
                 alert("你未通过验证") 
            }else{
                 $('#login').attr("disabled",true);
                console.log(1)
                  this.$http.post('http://127.0.0.1:8088/adduser?'+post).then(function(result){
                    console.log(result.bodyText)
                    _this.obj = result.bodyText;
                    console.log(_this.obj)
                    if(result.bodyText=='注册成功'){
						setTimeout(function(){
							alert('注册成功,即将跳往登录页面')
							window.location="//localhost:8008/#/login" 
						},2000)
                    }   
                })
            }
          
        },
        username(){
				let a = $('input').eq(0).val()
			  var reg=/^[\u4e00-\u9fa5_a-zA-Z0-9/S]{3,15}$/;   //用户名可以是中文,英文字母和数字组成的3-16位字符， 
			  	if(reg.test(a)==false){
            $('p').eq(0).html('用户名可以是中文,英文字母和数字组成的3-16位字符');
            $('#cuo1').css('display','block')
			  	}else{
            $('p').eq(0).html('用户名正确')
            $('#cuo1').css('display','none')
            $('#ok1').css('display','block')
                      console.log('用户名正确')
                     this.userone=true;
                      console.log(this.userone)
			  	}

        },
        password(){
				let a = $('input').eq(1).val()
				console.log(a)
			  var reg=/^[a-zA-Z][0-9a-zA-ZA-z]{5,15}$/;   //密码由英文字母和数字组成的6-15位字符，以字母开头 
			  	if(reg.test(a)==false){
            console.log('密码由英文字母和数字组成的6-15位字符，以字母开头 ')
            $('p').eq(1).html('密码由英文字母和数字组成的6-15位字符，以字母开头');
            $('#cuo2').css('display','block')
			  	}else{
             $('p').eq(1).html('密码验证正确')
            $('#cuo2').css('display','none')
            $('#ok2').css('display','block')
                      console.log('密码正确')
                    this.passone=true;
                    console.log(this.passone)

			  	}
        },
        email(){
				let a =$('input').eq(2).val()
				console.log(a)
			  var reg=/^[A-Za-zd0-9]+[A-Za-zd0-9]+[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,5}$/;    //邮箱格式为：123@qq|163.com  前面可以为纯数字或纯英文，最少个数为3.
			  	if(reg.test(a)==false){
            console.log('邮箱格式为：123@qq|163.com  前面可以为纯数字或纯英文，最少个数为3.')
              $('p').eq(2).html('邮箱格式为：123@qq|163.com  前面可以为纯数字或纯英文，最少个数为3');
            $('#cuo3').css('display','block')
			  	}else{
                  $('p').eq(2).html('邮箱验证正确')
                  $('#cuo3').css('display','none')
                  $('#ok3').css('display','block')                    
                    this.emialone=true
                      console.log(this.emialone)
			  	}
        },
        iphone(){
				let a =$('input').eq(3).val()
				console.log(a)
			  var reg=/^[1][3,4,5,7,8][0-9]{9}$/;    //手机号以1 开头，第二个数字为3,4,5,6,7,8,11个数 
			  	if(reg.test(a)==false){
              $('p').eq(3).html('手机号以1开头，第二个数字为3,4,5,6,7,8,11个数');
            $('#cuo4').css('display','block')
			  	}else{
             $('p').eq(3).html('手机号码正确')
                  $('#cuo4').css('display','none')
                  $('#ok4').css('display','block')        
                    this.iphoneone=true;
                  console.log(this.iphoneone)
			  	}
        },  
        
       
    }
}
</script>

<style scoped>
.mui-input-group{
    background: white;
}
.mui-input-clear{
  width: 60%
}
.glyphicon{
  position:absolute;
  right: 0px;
  top:15px;
  display: none;
  }
.glyphicon-remove{
  color:red;
}
.glyphicon-ok{
  color:yellowgreen;
}
.mui-button-row a{
    text-decoration: none;
    color: white;
}
</style>
