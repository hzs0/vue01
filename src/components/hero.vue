<template id="hero">
    <div class="col-10">
        <!-- <div class="mui-content">
            <div class="mui-slider mui-fullscreen">
                <div class="fiexdpos">
                    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                        <div class="mui-scroll">
                            <a class="mui-control-item mui-active" href="#">
                                <img src="../images/index/hero/105.jpg">
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/106.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/107.jpg">
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/108.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/109.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/110.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/111.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/112.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/113.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/114.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/115.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/116.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/117.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/118.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/119.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/120.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/121.jpg">                            
                            </a>
                            <a class="mui-control-item" href="#">
                                <img src="../images/index/hero/123.jpg">                            
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="col-10">
            <div class="mui-content">
                <div class="mui-card" v-for="key in obj">
                    <router-link :to="{path:'/herodetail',query:{id:key.id}}" class="mui-card-header mui-card-media" :style="{'background-image': 'url('+key.image+')'}">
                        <div class="introduction">
                            <span><i><img :src="key.littleimg"></i>{{key.nakename}}:{{key.heroname}}</span>
                            <span>英雄全方位介绍>></span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

let hero = {
    template:'#hero',
}

export default {
    data(){
        return{
            obj:[],
            page:1,
            status:false,
        }
    },
    methods:{
        getRequest(page){
            this.$http.get('http://localhost:8088/hero?page='+page+'').then(function(data){
                // console.log(data.body)
                if(data.body == ''){
                    return false
                }else{
                    for(let i = 0;i<data.body.length;i++){
                        this.obj.push(data.body[i]);
                    }
                    this.page +=1;
                    this.status = true;
                }
            })
        },
        scrollTop(){
            //把指向更改会vue实例
            let that = this
            $(window).scroll(function(){
                if(that.status){
                    //滚动条高度
                    let scroll_top = $(window).scrollTop();
                    //窗口可是高度
                    let win_hei = $(window).height();            
                    //窗口的总高度
                    let win_total_hei = $(document).height();
                    // console.log(scroll_top + win_hei - win_total_hei);
                    if(scroll_top + win_hei - win_total_hei >= 0){
                        that.status = false
                        that.getRequest(that.page);  
                    }
                }
            })
        }
    },
    mounted(){
        this.getRequest(this.page)
        this.scrollTop()
    },
    destroyed(){
        $(window).off("scroll")
    }
}
</script>
<style scoped>
    p{
        margin-bottom:0; 
    }
    .sin-cont{
        position:relative;
    }
    .top-img{
        background: white;
    }
    .top-img img{
        width: 90%;
        margin: 15px 10px 15px 18px;
        border-radius:15px;
    }
    .sing-title{
        width: 100%;
        font-size: 10px;
        padding: 10px 0 0 18px;
        line-height: 30px;
        background: #f3f3f3;
        color: #575757;
        font-weight:bold;
    }
    .mui-content{
        width:100%;
        z-index: 99;
        padding: 0 0 40px 0;
        background:white;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-scroll{
        height: 50px;
        padding:0 0 0 0;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-control-item{
        width:38px;
        height:38px;
        padding:2px 0 0 0px;
        position: relative;
        overflow: hidden;
        border-radius:8px;
        /* border: 1px solid #e49f0a; */
    }

    .mui-card-media{
        height: 50vw;
    }
    .mui-fullscreen{
        position: relative;
        z-index: 99;
    }
    .fiexdpos{
        width: 100%;
        position:fixed;
        top: 77px;
        background: white;
    }
    .mui-segmented-control.mui-scroll-wrapper{
        width: 90%;
        height:50px;
        margin: 0 0 0 18px;
    }
    .mui-control-item img{
        width:40px;
        height: 40px;
        margin: -3px 0 0 0;
    }
    .mui-control-item p{
        width:21rem;
        line-height:16px;
        /* height:3rem; */
        margin:5px 0 5px -8px;
        text-align:left;
        display:block;
        color:#20232c;
        font-weight:bold;
        font-size:0.1rem;
        white-space:pre-wrap;   /*强制换行*/
        transform:scale(0.9);
    }
    .mui-control-item span{
        position: absolute;
        top:50%;
        left: 50%;
        margin: -35px 0 0 -13px;
        font-size: 26px;
        color: white;
    }

    .mui-card{
        margin:18px;
        border-radius: 10px;
        z-index: 0;
    }
    .mui-card-media{
        position: relative;
    }
    .introduction{
        width: 100%;
        position: absolute;
        bottom: 10px;
    }
    .introduction img{
        width: 25px;
        height: 25px;
        margin: 0 0 2px 0;
        border-radius: 50%;
        border: 2px solid rgb(255, 255, 255);
    }
    .introduction i{
        padding: 0 5px 0 0 ;
    }
    .introduction span{
        width: 100%;
        padding: 2px 5px 0 0 ;
        float:left;
        font-size: 12px;
        color: white;
    }
    .introduction span:nth-of-type(1){
        font-size: 14px;
        font-weight: bold;
        color: rgb(252, 213, 106);
    }
    .introduction span:nth-of-type(2){
        font-size: 10px;
        transform: scale(0.9);
        margin: 0 0 0 -15px;
    }
</style>

