<template id="recommend">
    <div class="col-10">
        <mt-swipe :auto="2500">
            <mt-swipe-item><img src="../images/index/1.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/2.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/3.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/4.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/5.jpg" class="img-responsive"></mt-swipe-item>
        </mt-swipe>
        <div class="col-10" style="overflow:scroll;">
            <scroller ref="my_scroller" :on-refresh="refresh">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul class="col-10 all-list">
                    <li class="col-9 list-conetnt" v-for="key in obj" v-if="key.banimg">
                        <router-link :to="{path:'/newsdetail',query:{id:key.id}}">
                            <div class="col-7 detail">
                                <p class='p-font'>{{key.title}}</p>
                                <div class="actior">
                                    <em><img :src='key.image'></em>
                                    <span>{{key.username}}</span>
                                    <span class="mui-icon-extra mui-icon-extra-comment talk"></span>
                                    <span>1265</span>
                                </div>
                            </div>
                            <div class="img-box">
                                <img :src="key.banimg">
                            </div>
                        </router-link>
                    </li>
                    <li class="col-10 list-conetnt video-cont"  v-else-if="key.video">
                        <div class="mui-content">
                            <div class="mui-card">
                                <div class="mui-card-content">
                                    <div class="mui-card-content-inner">
                                        <p style="color: #575757;font-weight:1000;font-size:14px">{{key.title}}</p>
                                    </div>
                                </div>
                                <div class="player-container">
                                    <video-player class="vjs-custom-skin" :options="videos[key.id-1]"></video-player>
                                </div>
                                <div class="footer">
                                    <a class="read"><span class="mui-icon mui-icon-eye"></span>2.3万</a>
                                    <a class="read"><span class="mui-icon-extra mui-icon-extra-comment talk"></span>12345</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
             </mt-loadmore>
            </scroller>             
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

let recommend = {
    template:'#recommend'
}
let video = {
    template: '#video-player',    
}
export default {
    name: 'page-tab-container',
    data(){
        return {
            obj:[],//从后台请求的数据
            page:1,
            status:false,
            videourl:[],
            posterurl:[],
            videos:[],
            allLoaded: false,
            bottomStatus: '',
        }
    },
    methods:{
        refresh:function(){
            console.log('refresh')
            this.timeout = setTimeout(()=>{
                // this.getRequest(1);
                this.$refs.my_scroller.finishPullToRefresh()
            }, 1500)
        }, 
        handleBottomChange(status) {
            this.bottomStatus = status;
        },
        loadBottom() {
            setTimeout(() =>{
                this.page += 1;
                this.$refs.loadmore.onBottomLoaded();
                console.log("上拉触发啦");
                this.getRequest(this.page)
            // 加载更多数据
            // this.allLoaded = true;// 若数据已全部获取完毕
            },1500)
        },
        getRequest(page){
            let that = this;
            this.$http.get('http://localhost:8088/index?page='+page+'').then(function(data){
                // if(page == 1){
                //     this.obj = data.body;
                //     console.log(this.obj); 
                // }else 
                if(data.body == ''){
                    // that.noData = '没有更多了'
                    return false
                }else{
                    for(let i = 0;i<data.body.length;i++){
                        this.obj.push(data.body[i]);
                    }
                    for(let i = 0;i<data.body.length;i++){
                        // console.log(data.body.length);
                        for(let key in data.body[i]){
                            if(key == 'video'){
                                this.videourl.push(data.body[i]['video']);
                                // console.log(this.videourl);
                            }
                            if(key == 'poster'){
                                this.posterurl.push(data.body[i]['poster']);
                                // console.log(this.posterurl);
                            }   
                        }
                    };
                    for(let i = this.videourl.length - 2;i<this.videourl.length;i++){     
                        let videopt = {
                            // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                            autoplay: false, //如果true,浏览器准备好时开始回放。
                            controls: true, //控制条
                            preload: 'auto', //视频预加载
                            muted: false, //默认情况下将会消除任何音频。
                            loop: false, //导致视频一结束就重新开始。
                            language: 'zh-CN',
                            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                            sources: [{
                                type: 'video/mp4',
                                src: this.videourl[i],
                            }],
                            poster: this.posterurl[i], //你的封面地址
                            width: document.documentElement.clientWidth,
                            notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        }
                        this.videos.push(videopt)
                    }
                    this.status = true;
                }
            })
        },
        // scrollTop(){
        //     let that = this
        //     $(window).scroll(function(){
        //         if(that.status){
        //             //滚动条高度
        //             let scroll_top = $(window).scrollTop();
        //             //窗口可是高度
        //             let win_hei = $(window).height();            
        //             //窗口的总高度
        //             let win_total_hei = $(document).height();
        //             // console.log(scroll_top + win_hei - win_total_hei);
        //             if(scroll_top + win_hei - win_total_hei >= 0){
        //                 that.status = false
        //                 that.getRequest(that.page)
        //             }
        //         }
        //     })
            // console.log(this.status);  
        // }
    },
    mounted(){
        this.getRequest(this.page)
        // this.scrollTop()
    },
    destroyed(){
        $(window).off("scroll")
    },
    // components:{
    //     scroller
    // }
    
}
</script>
<style scoped>
    img{
        display: block;
    }
    /* 轮播图样式 */
    .mint-swipe{
        height: 190px;
        background: white;
    }
    .mint-navbar{
        background:none;
    }
    .mint-navbar .mint-tab-item {
        padding: 12px 0;
        z-index: 99;
    }
    .mint-navbar .mint-tab-item.is-selected{
        text-decoration: none;
    }
    /* .mint-swipe-indicator.is-active {
        opacity:1;
        background-color:#fcac00;
    } */
    .mint-swipe-items{
        width: 100%;
        height: 175px;
    }
    .mint-swipe-items-wrap img{
        width: 95%;
        height: 175px;
        display: block;
        margin: 8px auto;
        border-radius: 10px;
    }

    

    /* 所有新闻 */
    ._v-container{
        position: unset;
    }
    .all-list{
        padding: 0 0 50px 0;
    }
    .all-list li{
        padding: 0 0 0 0;
        list-style: none;
        float: left;
        border-bottom:1px solid #ececec;
    }
    .list-conetnt{
        margin: 0 0 0 5%;
        position: relative;
        /* border: 1px solid red; */
    }
    .img-box{
        width: 8.3rem;
        height: 5rem;
        margin: 8px 0 0 0;
        float: right;
        overflow: hidden;
        border-radius: 7px;
    }
    .list-conetnt img{
        width: 107px;
    }
    /* .list-conetnt a{
        display: block;
        height: 67px;
    } */
    .detail p{
        height: 67px;
        padding: 10px 0 15px 0;
        /* border: 1px solid red; */
        font-size: 12px;
        font-family: "微软雅黑";
        font-weight: 800;
        color: #575757;
    }
    .list-conetnt span{
        width: 20%;
        height: 20px;
        display: block;
        float: left;
        font-size:8px;
        transform: scale(0.9);  
        color: #c9c9c9;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .actior{
        width: 100%;
        bottom: 3px;
        position: absolute;
        z-index: 0;
    }
    .actior em{
        width: 15px;
        height: 15px;
        display: block;
        margin: 2px 0 0 0;
        overflow: hidden;
        float: left;
        border-radius: 50%;
    }
    .actior img{
        width: 15px;
        height: 15px;
        display: block;
    }
    .actior .talk{
        width: 15px;
        height: 15px;
        margin: 4px 0 0 0;
        transform: scale(0.8);
    }
    .all-list .video-cont{
        margin: 0 0 0 0;
        border: none;
    }
    .mui-content{
        background: white;
    }
    .mui-card-footer:before, .mui-card-header:after{
        background: none;
    }
    .mui-card-content-inner{
        padding: 0 15px 5px 15px;
    }
    .mui-card-content-inner p{
        width: 100%;
    }
    .read{
        width: 20%;
        float: left;
        display: block;
        padding: 0 0 0 20px;
        margin: 5px 0 0 0;
        position: relative;
        color: #c9c9c9;
        transform: scale(0.85)
    }
    .footer{
        padding: 5px 0 0 0;
    }
    .footer span{
        position: absolute;
        left: 0px;
        bottom: -3px;
    }
    .footer a:nth-of-type(2) span{
        bottom: -3px;
        left: -5px;
    }
    .mui-card{
        padding:0 0 13px 0;
        box-shadow: none;
        border-bottom: 1px solid  #e7e7e7;
    }
    .video-cont:last-of-type .mui-card{
        border: none;
    }
    /* video{
        width: 100%;
        border-radius: 5px;
    } */
    .player-container{
        border-radius: 8px;
    }
    .video-js{
        background: none;
    }
    .mui-card-header.mui-card-media{
        padding: 0 10px 0 10px;
    }
    .player-container{
        overflow: hidden;
    }
    .vjs-icon-placeholder::before{
        font-size: 1em;
        border-radius: 50%;
    }
    .video-js .vjs-big-play-button{
        /*
        播放按钮换成圆形
        */
        height: 2em;
        width: 2em;
        line-height: 2em;
        border-radius: 1em;
    }




    /* @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }

      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      @descendent wrapper {
        overflow: scroll;
      }

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

      @when rotate {
        transform: rotate(180deg);
      }
    }
  } */
</style>


