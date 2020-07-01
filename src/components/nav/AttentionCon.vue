<template lang="html">
    <div class="Att-container">
        <ul class="cont-news" >
                <div class="news-user" >
                    <a href="#">
                        <img class="user-avatar" :src="user.image" alt="">
                        <span class="user-name">{{user.username}}</span>
                    </a>
                </div>
                <p class="news-content">
                   
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
                <span class="news-time"></span>
                </div>
                <div class="cut"></div>
            <!-- <button @click='getrequest'>按钮</button> -->
            
            
            <!-- <div class="news-transpond">
                    
            </div> -->
            
        </ul>
        
    
        
    </div>
    
</template>
<script>
export default {
      data(){
          return {
               text:{},
               user:JSON.parse(localStorage.getItem('Flag') || '[]')[0],
          }
      },
      mounted(){
          this.getrequest();
      },
      methods:{
          getrequest(){
              let that =this
              this.$http.get('http://127.0.0.1:8088/refer').then(function(result){
                //   console.log(result.bodyText)
                 that.text=JSON.parse(result.bodyText)
                //  console.log(that.text)
              })
          }
      },
      
}
</script>
<style scoped>
span{
    color: black;
}
a{
    text-decoration: none;
}
.Att-container{
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
    min-height: 160px;
    /* border: 1px solid black; */
    padding-left: 10px;
    padding-right: 10px;
}
.news-user{
    width: 50%;
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
.news-content{
    width: 100%;
    min-height: 25px;
    /* border: 1px solid black; */
    font-size: 16px;
    color: black;
    height: auto;
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

