<template id="official">
    <div class="col-10">
        <div class="new">
            <h5>官方公告<a href="#" class="more">更多></a></h5>
            <ul>
                <li><a href="#"><i></i><span>五五开黑第二弹 | 十人赛道即将开启,十环警告，箭术女神,十环警告，箭术女神</span></a></li>
                <li><a href="#"><i></i><span>五五开黑第二弹 | 十环警告，箭术女神,游戏家中国行携手TGC王者</span></a></li>
                <li><a href="#"><i></i><span>王者荣耀|游戏家中国行携手TGC王者,游戏家中国行携手TGC王者</span></a></li>
            </ul>
        </div>
        <div class="col-10">
            <h5 class="new-version"><span>版本更新</span><span>2019-04-16</span><a href="#" class="more">更多></a></h5>
            <div class="mui-content">
                <div class="mui-slider mui-fullscreen">
                    <div class="fiexdpos">
                        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                            <div class="mui-scroll">
                                <a class="mui-control-item mui-active" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/105.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/106.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>                           
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/107.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/105.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>                            
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/105.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>                            
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/105.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>                            
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/105.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>                            
                                </a>
                                <a class="mui-control-item" href="#">
                                    <div class="cont">
                                        <img src="../images/index/hero/105.jpg">
                                        <span>
                                            <h1>芈月</h1>
                                            <p>被动对野怪额外伤害</p>
                                        </span>
                                    </div>                            
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-10">
            <div class="mui-content">
                <h5 class="new-version">峡谷新讯<a href="#" class="more">更多></a></h5>
                <div class="mui-card" v-for="key in obj" v-if="key.nakename">
                    <router-link :to="{path:'/herodetail',query:{id:key.id}}" class="mui-card-header mui-card-media" :style="{'background-image':'url('+key.image+')'}">
                        <div class="introduction">
                            <span><i><img src="../images/index/talk.png"></i>新英雄:[{{key.nakename}}:{{key.heroname}}]</span>
                            <span>{{key.updatetime}}上线</span>
                            <span>英雄全方位介绍>></span>
                        </div>
                    </router-link>
                </div>
                <div class="mui-card" v-else-if="key.skinname">
                    <router-link :to="{path:'/newskin',query:{id:key.id}}" class="mui-card-header mui-card-media" :style="{'background-image':'url('+key.image+')'}">
                        <div class="introduction">
                            <span><i><img src="../images/index/talk.png"></i>新皮肤:[{{key.skinname}}:{{key.heroname}}]</span>
                            <span>{{key.updatetime}}上架</span>
                            <span>皮肤全方位介绍>></span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import $ from 'jquery'
let official = {
    template:"#official"
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
            this.$http.get('http://localhost:8088/official?page='+page+'').then(function(data){
                // console.log(this.obj); 
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
                        that.getRequest(that.page)
                    }
                }
            })
            console.log(this.status);  
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
    ul li{
        list-style: none;
    }
    h5{
        width: 100%;
        height: 20px;
        margin: 15px 0 0 0;
        font-weight: bold;
        color: rgb(58, 58, 58);
    }
    .new{
      width: 90%;  
      margin: auto;
    }
    .new li,.new a{
        width: 100%;
        height: 30px;
        float: left;
    }
    .new li{
        margin: 10px 0 0 0;
    }
    .new .more,.new-version .more{
        width: 32px;
        height: 20px;
        line-height: 20px;
        float: right;
        font-size: 10px;
        color: #f8d538;
    }
    .new-version .more{
        margin: -10px 0 0 0;
    }
    .new i{
        width: 25px;
        height: 25px;
        margin: 5px 0 0 0;
        display: block;
        float: left;
        background: no-repeat url(../images/index/newico1.png);
        background-size:25px 25px; 
    }
    .new span{
        width: 85%;
        height: 30px;
        line-height: 30px;
        margin: 0 0 0 20px;
        float: left;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 10px;
        border-bottom: 1px solid #f0f0f0;
        color: #7c7c7c;
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
        padding: 0 0 40px 0;
        z-index: 99;
        background:white;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-scroll{
        height: 50px;
        padding:5px 0 0 0;
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-control-item{
        width:150px;
        height:115px;
        margin: 0 0 0 18px;
        position: relative;
        overflow: hidden;
        border-radius:5px;
    }
    .mui-fullscreen{
        padding: 15px 15px 0 0 ;
        position: relative;
    }
    .fiexdpos{
        width: 100%;
        background: white;
    }
    .mui-segmented-control.mui-scroll-wrapper{
        width: 100%;
        height:120px;
    }
    .cont{
        width:130%;
        height:90px;
        margin: 0 0 0 -18px;
        position: relative;
        box-shadow: 0px 0px 6px 0px #ccc;
        border-radius: 8px; 
    }
    .mui-control-item img{
        width:35px;
        height:35px;
        position: absolute;
        top: -15px;
        left: 55px;
        border-radius: 5px;
    }
    .cont span{
        width: 100%;
        margin: 20px 0 0 0;
        padding: 20px 0 0 0;
        display: block;
        font-size: 10px;
    }
    .cont span h1{
        padding: 0 0 0 0;
        font-size: 10px;
        font-weight: bold;
        color: #161616;
    }
    .cont span p{
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        margin: 0 0 0 0;
        transform: scale(0.9);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .new-version{
        width:90%;
        height: 40px;
        margin:auto;
        padding: 20px 0 0 0;
    }
    .new-version span{
        width: 55%;
        margin: 8px 0 0 0;
        float: left;
    }
    .new-version span:nth-of-type(2){
        font-size:10px;
        font-weight: normal;
    }


    .mui-card{
        margin:18px;
        border-radius: 10px;
        z-index: 0;
    }
    .mui-card-media{
        height:50vw;
        position: relative;
    }
    .introduction{
        width: 100%;
        position: absolute;
        bottom: 10px;
    }
    .introduction img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 0 2px 0 ;
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
        color: rgb(253, 200, 52);
    }
    .introduction span:nth-of-type(2){
        font-size: 10px;
        transform: scale(0.9);
        margin: 0 0 2px -15px;
    }
    .mui-content .more{
        margin: 0;
    }
</style>
