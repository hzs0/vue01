<template lang='html'>
    <div class="Dis-container">
        <h1 class="cont-h1">发现感兴趣的人</h1>
            <mt-swipe class="notice-box"  :auto="0" :show-indicators="false" >
                <mt-swipe-item v-for="(key,index) in obj" >
                    <div class="cont-notice">
                        <img class="notice-user" v-bind:src="img[index]">
                        <p class="notice-username">{{key.username}}</p>
                        <button id="cont-btn" class="mint-button mint-button--default mint-button--small is-plain" >关注</button>
                    </div>
                   
                </mt-swipe-item>
                
            </mt-swipe>

        <h1 class="cont-h1">更多主题</h1>
        <div class="theme">
             <img class="theme-img" src="../../images/social/004.jpg" alt="">
             <div class="theme-cont">
                <h2 class="theme-title">KPL全明星投票开启</h2>
                <button class="mint-button mint-button--default mint-button--small is-plain">关注主题</button>
                 <div class="theme-bottom">
                    <span class="mui-icon mui-icon-person"></span>
                    <em class="news-like">233</em>
                    <span class="mui-icon mui-icon-compose"></span>
                    <em class="news-like">233</em>
                    <span class="glyphicon glyphicon-heart-empty"></span>
                    <em class="news-like">233</em>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
      data(){
          return {
              text:'关注',
              obj:{},
              img:[]
          }
      },
      mounted(){
          this.getrequest()
      },
      methods:{
          getrequest(){
              let that =this
              this.$http.get('http://127.0.0.1:8088/user').then(function(result){
                //   console.log(result.bodyText)
                 that.obj=JSON.parse(result.bodyText)
                 console.log(that.obj)
                 for(let key in that.obj){
                     that.img.push(that.obj[key].image)
                    //  console.log(that.obj[key].image)
                 }
                 
              })
          },
      }
}
</script>
<style scoped>
.Dis-container{
    padding-top: 50px;
    padding-bottom:50px;
    padding-left: 10px;
    padding-right: 10px;
}
.cont-h1{
    font-size: 17px;
    font-weight: 600;
}
.notice-box{
    width: 100%;
    height: 165px;
}
.cont-notice{
    width: 178px;
    height: 132px;
    /* border: 1px solid black; */
    margin: 30px 0 0 118px;
    border-radius: 10%;
    border: 1px solid #ddd;
    float: left;
    text-align: center;
}
.notice-user{
    width: 45px;
    height: 45px;
    border-radius: 50%;  
    margin-top: -20px;
}
.notice-username{
    color: black;
    margin-top: 10px;
    font-size: 1.1em;
}
.mint-button--small {
    width: 75px;
    margin-top:20px;
    border: 1px solid #e3ba60;  
    border-radius: 30px;
    color: #e3ba60;
}
.theme{
    width: 100%;
    height:auto;
    /* border: 1px solid black; */
    float: left;
    margin-top: 20px;
}
.theme .theme-img{
    width: 25%;
    height: 100%;
    border-radius: 20%;

}
.theme .theme-cont{
    width: 75%;
    height: auto;
    float: right;
}
.theme-title{
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
}
.theme .mint-button--small {
    width: 80px;
    float: right;
    margin-top: -30px;
    border: 1px solid #e3ba60;  
    border-radius: 30px;
    color: #e3ba60;
} 
.space{
    width: 100%;
    height: 30%;
    background: black;
}
.theme-bottom{
    margin-top: 10%;
    height: 30px;
}
.news-like{
    font-size: 14px;
    font-style: normal;
    padding: 5px;
    color: black;
}
.glyphicon-heart-empty{
    font-size: 17px;
}
</style>


