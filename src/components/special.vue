<template id="spa">
    <div>
        <div class="col-10 sin-cont">
            <div class="col-10 top-img">
                <img src="../images/index/single.jpg">
            </div>
            <div>
                <div>
                    <h1 class="sing-title">随便看看</h1>
                    <div class="banner">
                        <span>
                            <img src="../images/index/timg.png">
                        </span>
                        <span>
                            <h5>QG荣耀学院</h5>
                            <p>84.2万+人已订阅</p>
                        </span>
                        <mt-button plain>订阅</mt-button>
                    </div>
                    <div class="text-box">
                        <p>"主打新手向英雄攻略及技巧，职业选手叫你轻松上分，实用英雄教学随时掌握"</p>
                    </div>
                </div>
            </div>
            <!-- 滑动栏 -->
            <div class="mui-content">
                <div class="mui-slider mui-fullscreen">
                    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                        <div class="mui-scroll">
                            <a class="mui-control-item mui-active" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/24.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                            <a class="mui-control-item" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/15.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                            <a class="mui-control-item" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/16.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                            <a class="mui-control-item" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/17.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                            <a class="mui-control-item" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/18.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                            <a class="mui-control-item" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/19.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                            <a class="mui-control-item" href="#">
                                <span class="glyphicon glyphicon-play-circle"></span>
                                <img src='../images/index/bgimg/20.jpg'>
                                <p>小葵单车：线上回应强力续航 夺命二连狗杨戬教学</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-10 all-cont">
            <div>
                <div>
                    <h1 class="all-title">全部栏目</h1>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="key in obj">
                            <div class="banner">
                                <span>
                                    <img :src="key.image">
                                </span>
                                <span>
                                    <h5>{{key.col}}</h5>
                                    <p><em>{{key.name}}</em><i>84.2万+人已订阅</i></p>
                                </span>
                                <mt-button plain>订阅</mt-button>
                            </div>
                            <div class="new-text-box">
                                <p>"{{key.introduction}}"</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

let special = {
    template:"#spa"
};
export default {
    data(){
        return{
            obj:[],
            status:false,
            page :1,
        }
    },
    methods:{
         getRequest(page){
            this.$http.get('http://localhost:8088/special/?page='+page+'').then(function(data){
                // console.log(this.status); 
                // console.log(data.body);
                if(data.body == ''){
                    return false
                }else{
                    for(let i = 0;i<data.body.length;i++){
                            this.obj.push(data.body[i]);
                    }
                    this.page +=1;
                    this.status = true;
                    // console.log(this.status); 
                }
            })
        },
        scrollTop(){
            let that = this
            console.log(that.status);
            $(window).scroll(function(){
                if(that.status){
                    //滚动条高度
                    let scroll_top = $(window).scrollTop();
                    //窗口可见高度
                    let win_hei = $(window).height();            
                    //窗口的总高度
                    let win_total_hei = $(document).height();
                    // console.log(scroll_top + win_hei - win_total_hei);
                    if(scroll_top + win_hei - win_total_hei >= 0){
                        that.status = false
                        that.getRequest(that.page)
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
        padding:0 0 180px 0;
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
    .banner{
        width: 90%;
        height: auto;
        margin: auto;
        position: relative;
    }
    .banner span{
        height: 50px;
        display: block;
        float: left;
    }
    .banner span img{
        width: 30px;
        height: 30px;
        margin: 7px 0 0 0;
        border-radius:50%;
    }
    .banner span:nth-of-type(2){
        margin: 0 0 0 -8px;
    }
    .banner span h5{
        width: 100%;
        margin: 5px 0 5px 8px;
        display: block;
        float: left;
        color: #575757;
        font-weight:800;
        transform: scale(0.9);
    }
    .banner span p{
        margin: 0 0 0 13px;
        padding: 0 0 -10px 0;
        display: block;
        float: left;
        font-size: 10px;
        color: #575757;
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        transform: scale(0.9);
    }
    .banner span em{
        display: block;
        float: left;
        font-size: 10px;
        color: #575757;
        font-style: normal;
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    } 
    .banner span i{
        padding: 0 0 0 10px;
        font-style: normal;
        color: #ffc23d;
    }
    .mint-button--default.is-plain{
        width: 60px;
        height: 28px;
        margin: 8px 0 0 0;
        line-height: 28px; 
        right:0px;    
        font-size: 10px;
        font-weight: normal;
        border-radius: 3px; 
        color: #e49f0a;
        border:1px solid #e49f0a;
        position:absolute;
    }
    .text-box,.new-text-box{
        width: 90%;
        margin: 0 10px 0 5%;
        float: left;
        border-radius: 5px;
        background: #f3f3f3;
    }
    .text-box p{
        width: 100%;
        padding: 5px 0 0 0;
        font-size: 10;
        transform: scale(0.8);
    }
    .mui-content{
        width:100%;
        height:14rem;
        bottom:0;
        position:absolute;
        background:none;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-scroll{
        padding:0 12px 0 12px;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-control-item{
        width:19rem;
        height:15rem;
        padding:2px 0 0 0px;
        position: relative;
    }
    .mui-segmented-control.mui-scroll-wrapper{
        height:19rem;
    }
    .mui-control-item img{
        width:18rem;
        border-radius:5px;
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
    .all-cont{
        padding:0 0 10px 0;
    }
    .all-title{
        width: 100%;
        font-size: 10px;
        padding: 0 0 0 18px;
        line-height: 30px;
        background: #f3f3f3;
        color: #575757;
        font-weight:bold;
    }
    .mui-table-view{
        padding:0 0 50px 0
    }
    /* .mui-table-view li{
        border-bottom:1px solid #f1f1f1;
    }
    .mui-table-view li:last-of-type{
        border:none;
    } */
    .mui-table-view:before{
        height:0;
    }
    .mui-table-view-cell{
        padding:10px 0 10px 0;
    }
    .mui-table-view:after,.mui-table-view-cell:after{
        background:none;
    }
    .new-text-box p{
        width: 100%;
        padding: 3px 0 0 0;
        font-size: 10;
        transform: scale(0.8);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }


    
</style>


