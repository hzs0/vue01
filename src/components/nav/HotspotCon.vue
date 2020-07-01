<template lang="html">
    <div class="Hot-container">
         <div class="cont-news">

            <mt-swipe class="notice-box"  :auto="0" :show-indicators="false">
                <mt-swipe-item><img class="cont-notice" src="../../images/social/1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img class="cont-notice" src="../../images/social/2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img class="cont-notice" src="../../images/social/3.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
            <div class="Hot-theme">
                <h1 class="cont-h1">热门主题</h1>
                <button type="button" class="mui-btn">开黑吗，我公孙离贼6</button>
                <button type="button" class="mui-btn">默认</button>
                <button type="button" class="mui-btn">默认</button>
                <button type="button" class="mui-btn">默认</button>
            </div>
        </div>
        <div class="cut"></div>
        <ul class="cont-news">
            <li v-for="(k,i) in text">
            <div class="news-user">
                <a href="#">
                    <img class="user-avatar" src="../../images/social/004.jpg" alt="">
                    <span class="user-name">嫦娥</span>
                </a>
                <button class="mint-button mint-button--default mint-button--small is-plain" v-on:click="change" v-text="btnText">关注</button>
            </div>
             
            <p class="news-content">
                   {{k.content}}
            </p>
            <div class="news-bottom">
                <a href="#">
                    <span class="mui-icon-extra mui-icon-extra-heart"></span>
                    <em class="news-like">233</em>
                </a>
                <a href="#/Remark">
                    <span class="mui-icon mui-icon-chatboxes"></span>
                    <em class="news-like">233</em>
                </a>
                <a href="#">
                    <span class="mui-icon mui-icon-redo"></span>
                </a>
                <span class="news-time">{{k.c_time}}</span>
            </div>
            <div class="cut"></div>
          </li>
        </ul>
        
    </div>
</template>


<script>
export default {
      data(){
          return {
               text:{},
               flag:true,
               btnText:'关注'
          }
      },
      mounted(){
          this.getrequest()
      },
      methods:{
          getrequest(){
              let that =this
              this.$http.get('http://127.0.0.1:8088/refer').then(function(result){
                //   console.log(result.bodyText)
                 that.text=JSON.parse(result.bodyText)
                //  console.log(that.text)
              })
          },
          change(){
              this.flag = !this.flag
              this.btnText = '已关注'
          }
      },
      
}
</script>
<style scoped>

a{
    text-decoration: none;
}
.Hot-container{
    padding-top: 50px;
    padding-bottom:50px;
}
.cut{
    width: 100%;
    height: 10px;
    background-color: rgba(244, 244, 244);
}
.cont-news{
    width: 100%;
    height: auto;
    /* border: 1px solid black; */
    padding-left: 10px;
    padding-right: 10px;
}
.notice-box{
    width: 100%;
    height: 165px;
}
.cont-notice{
    width: 100%;
    height: 130px;
    /* border: 1px solid black; */
    margin: 30px auto;
    border-radius: 15%;
    padding-left: 30px;
    padding-right: 30px;
}
.cont-h1{
    font-size: 16px;
}
.mui-btn{
    width: 47.66%;
    height: 35px;
    margin: 5px 0 0 5px;
    overflow: hidden;
}
.news-user{
    width: 100%;
    height: 67px;
    /* border: 1px solid black; */
    
}
.news-user .user-avatar{
    width: 45px;
    height: 45px;
    border-radius: 50%;  
    margin-top: 10px;
}
.news-user .user-name{
    margin: -32px 6px 0 60px;
    color: black; 
    font-size: 16px;  
    display: block;
    font-weight: 600;
}
.mint-button--small {
    width: 80px;
    float: right;
    margin-top: -28px;
    border: 1px solid #e3ba60;  
    border-radius: 30px;
    color: #e3ba60;
}
.news-content{
    width: 100%;
    min-height: 25px;
    /* border: 1px solid black; */
}
.news-transpond{
    width: 100%;
    height: 80px;
    /* border: 1px solid black; */
    max-height: 80px;
    border-radius: 10px;

}
.news-bottom{
    width: 100%;
    height: 50px;
    border-top: 1px solid  #eee;
}
.mui-icon,.mui-icon-extra {
    padding:10px 0 0 20px;
}
.news-like{
    font-size: 14px;
    font-style: normal;
    padding: 5px;
    color: black;
}
.news-time{
    float: right;
    margin:10px 0 0 0;
}
</style>

