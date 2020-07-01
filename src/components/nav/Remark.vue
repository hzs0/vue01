<template lang="html">
    <div class="re-contain">
        <div>
            <header class="mint-header">
                <div class="mint-header-button is-left">
                    <a href="#/social/Hotspot" class="router-link-active">
                        <button class="mint-button mint-button--default mint-button--normal">
                            <span class="mint-button-icon">
                                <i class="mintui mintui-back"></i>
                            </span> 
                            <label class="mint-button-text"></label>
                        </button>
                    </a>
                </div> 
                <h1 class="mint-header-title">动态详情</h1> 
                <div class="mint-header-button is-right">
                    <button class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon">
                            <i class="mintui mintui-more"></i>
                        </span>
                        <label class="mint-button-text"></label>
                    </button>
                </div>
            </header>
        </div>
        <div class="content">
            <div class="news-user" >
                    <a href="#">
                        <img class="user-avatar" src="../../images/social/004.jpg" alt="">
                        <span class="user-name">嫦娥</span>
                    </a>
                <button class="mint-button mint-button--default mint-button--small is-plain" >关注</button>

            </div>
            <p class="news-content">
                爱的哈依然还是突然很舒服很舒服回复都喜欢听故事
            </p>
            <div class="news-bottom">
                <a href="#">
                    <span class="mui-icon-extra mui-icon-extra-heart"></span>
                    <em class="news-like">233</em>
                </a>
            
            <a href="#">
                <span class="mui-icon mui-icon-redo"></span>
            </a>
            </div>
        </div>
        <div class="remark-ul">
            <h1 class="remark-h1">xx条评论</h1>
            <div class="remark-li" v-for="(key,index) in obj"> 
                <div class="news-user" >
                    <a href="#">
                        <img class="user-avatar" src="../../images/social/004.jpg" alt="">
                        <span class="user-name">hzs</span>
                    </a>
                    <a class="like" href="#">
                        <span class="mui-icon-extra mui-icon-extra-heart"></span>
                        <em class="news-like">233</em>
                    </a>
                </div>
                <p class="remark-cont">
                    {{key.content}}
                </p>
            </div>
        </div>
        <div class="send">
             <span><img src="../../images/social/face.png" alt=""></span>
             <input class="send-input" type="text" placeholder="发表评论" v-model="content"> 
             <a href="#/Remark">
                <button @click="send">发表</button>
             </a>
        </div>
    </div>
</template>
<script>
export default {
     data(){
         return {
            content:'',
            obj:{},
            user:{},
            peruser:JSON.parse(localStorage.getItem('Flag') || '[]')[0],
         }
     },
     mounted(){
            this.getrequest()
            console.log(this.peruser);
      },
     methods:{
         send(){
             this.$router.go(0);
             this.$http.get('http://127.0.0.1:8088/send?content='+this.content).then(function(result){
                //  console.log(result)
             })
         },
         getrequest(){
              let that =this
              this.$http.get('http://127.0.0.1:8088/show').then(function(result){
                 that.obj=JSON.parse(result.bodyText)
                 
              })
              this.$http.get('http://127.0.0.1:8088/users').then(function(results){
                 that.user=JSON.parse(results.bodyText)
                  
              })
              
          },
     }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.re-contain{
    width: 100%;
    height: auto;
}
.mint-header{
    background-color: white;
    height: 65px;
    border-bottom: 1px solid rgb(218, 215, 215);
}
.mintui{
    color: #cca78ced;
    font-size: 26px;
}
.mint-header-title{
    /* font-size: 20px; */
    color: black;
}
.content{
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: auto;
    min-height: 300px;
    border-bottom: 10px solid rgb(244,244,244);
}
.news-user{
    width: 100%;
    height: 67px;
    /* border: 1px solid black; */
    position: relative;
    
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
    width: 30%;
}
.mint-button--small {
    width: 75px;
    margin-top:-30px;
    border: 1px solid #e3ba60;  
    border-radius: 30px;
    color: #e3ba60;
    float: right;

}
.news-content{
    width: 100%;
    min-height: 160px;
    font-size: 16px;
    color: black;
    height: auto;
}
.news-bottom{
    width: 100%;
    height: 50px;
    border-top: 1px solid  #eee;
    text-align: center;
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
.remark-h1{
    font-size: 18px;
    padding-left: 20px;
}
.remark-ul{
    width: 100%;
    height: auto;
    padding-bottom: 50px;
}
.remark-li{
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgb(218, 215, 215);
    min-height: 100px;
    padding-left: 10px;
    padding-right: 10px;
}
.remark-cont{
    width: 80%;
    min-height: 25px;
    height: auto;
    margin-left: 58px;
    /* border:1px solid black; */
}
.like{
    float: right;
    margin-top:-35px;
}
.send{
    width: 100%;
    height: 50px;
    text-align: center;
    bottom: 0;
    position: fixed;
    background: white;
}
.send-input{
    width: 68%;
    height: 35px;
}
.send a{
    display: inline;
}

</style>

