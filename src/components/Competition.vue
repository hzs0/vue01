<template lang="html">
    <div class="warp clear">
    <!-- 这里是头部 -->
        <mt-header fixed title="顶部"> <p>qwe</p></mt-header>
        <div class="header">
            <!-- 视频直播 -->
            <div class="live_streaming">
                <h3 class="ls_title">2019KPL春季赛常规赛</h3>
                <div class="ls_video">
                <!-- 视频插件 -->
                    <video-player  class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
                    <!-- <mt-button>
                        <img src="../img/png.png" height="20" width="20" slot="icon">点击回放
                    </mt-button> -->
                </div>
            </div>
            <!-- 直播记录 -->
            <ul class="record">
                <li>
                    <h5 class="ls_title">2019/04/25 18:00</h5>
                    <ul class="vs">
                        <li class="clan_icon1">
                            <!-- <img src="../img/we.png" alt="" srcset=""> -->
                        </li>
                        <li class="vs_icon">vs</li>
                        <li class="clan_icon2"></li>
                    </ul>
                    <ul class="c_data">
                        <li>RNG</li>
                        <li class="subscription">订阅</li>
                        <li>TOP</li>
                    </ul>
                </li>
                <li>
                    <h5 class="ls_title">2019/04/25 18:00</h5>
                    <ul class="vs">
                        <li class="clan_icon3"></li>
                        <li class="vs_icon">vs</li>
                        <li class="clan_icon4"></li>
                    </ul>
                    <ul class="c_data">
                        <li>IG</li>
                        <li class="subscription">订阅</li>
                        <li>EDG</li>
                    </ul>
                </li>
            </ul>
            <!-- 导航 -->
            <div class="navigation_bar">
                <ul>
                    <li>
                        <span class="span1"></span>
                        <p>每日回放</p>
                    </li>
                    <li>
                        <span class="span2"></span>
                        <p>积分数据</p>
                    </li>
                    <li>
                        <span class="span3"></span>
                        <p>购票中心</p>
                    </li>
                    <li>
                        <span class="span4"></span>
                        <p>助威排行</p>
                    </li>
                </ul>
              
            </div>

        </div>
        

    <!-- 这里是主体 -->
        <div class="main">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">资讯</mt-tab-item>
                <mt-tab-item id="2">视频</mt-tab-item>
            </mt-navbar>

            
            <mt-tab-container v-model="selected">
                <!-- 资讯 -->
                <mt-tab-container-item id="1">
                    <div class="subject" v-for="(key,index) in list ">
                        <!--  -->
                        <p class="headline" >{{key.content}}</p>
                        <div class="video_preview">
                            <img src="../images/competion/bofang2.png" alt="" width="100%">
                            <!-- <video-player  class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player> -->
                        </div>
                        <ul class="information">
                            <li>
                                <p class="mui-icon mui-icon-contact">{{key.author}}</p>
                            </li>
                            <li class="mui-icon mui-icon-eye">
                                <p class="watch">123</p>
                            </li>
                            <li class="mui-icon mui-icon-chat">
                                <p class="watch">222</p>
                            </li>
                        </ul>
                    </div>
                     <div class="kongbai"></div>
                </mt-tab-container-item>
            <!-- 视频 -->
                <mt-tab-container-item id="2">
                    <!-- <mt-cell :title="'测试 '" /> -->
                    <div class="video_t" v-for="(k,i) in videos">
                        <h3>{{k.title}}</h3>
                            <video-player  class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptionslist[i]" ></video-player>
                        <ul class="information information_t">
                            <li>
                                <p class="mui-icon mui-icon-contact">{{k.author}}</p>
                            </li>
                            <li class="mui-icon mui-icon-eye">
                                <p class="watch">123</p>
                            </li>
                            <li class="mui-icon mui-icon-chat">
                                <p class="watch">222</p>
                            </li>
                        </ul>
                    </div>
                    <!-- <button @click="getVideo()">点击后去</button> -->
                   <div class="kongbai"></div>
                </mt-tab-container-item>
            </mt-tab-container>
            
        </div>
        
    <!-- 这里是底部 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">资讯</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">赛事</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">社区</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">战绩</span>
			</a>
            <a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
    </div>
</template>
<script>
    import { videoPlayer } from 'vue-video-player'
    export default {
        name: '',
        data(){
            return {
                selected:'1',
                playerOptionslist:[],
                playerOptions: {
                        //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                        autoplay: false, //如果true,浏览器准备好时开始回放。
                        muted: false, // 默认情况下将会消除任何音频。
                        loop: false, // 导致视频一结束就重新开始。
                        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                        type: "video/mp4",
                        src: "../videos/comvideo/linxin.mp4" //你的视频地址（必填）
                        }],
                        poster: "../images/competion/7.jpg", //你的封面地址
                        width: document.documentElement.clientWidth,
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        // controlBar: {
                        //     timeDivider: true,
                        //     durationDisplay: true,
                        //     remainingTimeDisplay: false,
                        //     fullscreenToggle: true  //全屏按钮
                        // }
                },
                
                // 数据库
                list:{},
                videos:{},
                img_src:[],
                video_src:[],
            }
           
        },
        // 生命周期函数
        mounted(){
            this.get();
            this.getVideo();
           
        },
        // 组件
        components: {
            videoPlayer
        },
        // 计算属性
        computed: {
            player() {
                return this.$refs.videoPlayer.player
                }
        },
        methods:{
            onPlayerPlay(player) {
                alert("play");
            },
            onPlayerPause(player){
                alert("pause");
            },
            //从后台拿数据
            get(){
                var that=this
                this.$http.get('http://localhost:8088/competition').then(result => {
                    // console.log(result.bodyText);
                    that.list=JSON.parse(result.bodyText);
                    console.log('list',that.list)
                    // get body data
                    // this.someData = response.body;
        
                }, response =>{
                    // response.setHeader("Access-Control-Allow-Origin", "*");
                    console.log("error");
                });
            },
            getVideo(){
                var that=this
                 this.$http.get('http://localhost:8088/video').then(result => {
                    // console.log(result.bodyText);
                    that.videos=JSON.parse(result.bodyText);
                    console.log('videos',that.videos)
                    for(var k in that.videos){
                        that.img_src.push(that.videos[k].img_src);
                         that.video_src.push(that.videos[k].video_src)
                    }
                    
                    console.log(that.videos)
                    console.log(that.video_src)
                    
                    for(var i=0;i<that.videos.length;i++){
                        that.playerOptionslist.push(
                            {
                                //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                                autoplay: false, //如果true,浏览器准备好时开始回放。
                                muted: false, // 默认情况下将会消除任何音频。
                                loop: false, // 导致视频一结束就重新开始。
                                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                                language: 'zh-CN',
                                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                                sources: [{
                                type: "video/mp4",
                                src: that.videos[i].video_src, //你的视频地址（必填）
                                }],
                                poster: that.videos[i].img_src, //你的封面地址
                                width: document.documentElement.clientWidth,
                                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                                // controlBar: {
                                //     timeDivider: true,
                                //     durationDisplay: true,
                                //     remainingTimeDisplay: false,
                                //     fullscreenToggle: true  //全屏按钮
                                // }
                            },
                        )
                        console.log(that.playerOptionslist);
                    }
                });
            },
            // 视频
            // getsrc(){
               
            //     // var arr = Object.keys(this.videos);
            //     // console.log(1111,arr.length);
            //     for(var i=0;i<5;i++){
            //         this.playerOptions.push(
            //             {playerOptions: {
            //                 //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            //                 autoplay: false, //如果true,浏览器准备好时开始回放。
            //                 muted: false, // 默认情况下将会消除任何音频。
            //                 loop: false, // 导致视频一结束就重新开始。
            //                 preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            //                 language: 'zh-CN',
            //                 aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            //                 fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            //                 sources: [{
            //                 type: "video/mp4",
            //                 src: that.video_src[i], //你的视频地址（必填）
            //                 }],
            //                 poster: that.img_src[i], //你的封面地址
            //                 width: document.documentElement.clientWidth,
            //                 notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            //                 // controlBar: {
            //                 //     timeDivider: true,
            //                 //     durationDisplay: true,
            //                 //     remainingTimeDisplay: false,
            //                 //     fullscreenToggle: true  //全屏按钮
            //                 // }
            //                 }
            //             },
            //         )
            //     }
            //     console.log(11,this.playerOptions)
            // }
            
                // playerOptions: {
                //         //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                //         autoplay: false, //如果true,浏览器准备好时开始回放。
                //         muted: false, // 默认情况下将会消除任何音频。
                //         loop: false, // 导致视频一结束就重新开始。
                //         preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                //         language: 'zh-CN',
                //         aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                //         fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                //         sources: [{
                //         type: "video/mp4",
                //         src: "../video/linxin.mp4" //你的视频地址（必填）
                //         }],
                //         poster: "../img/7.jpg", //你的封面地址
                //         width: document.documentElement.clientWidth,
                //         notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                //         // controlBar: {
                //         //     timeDivider: true,
                //         //     durationDisplay: true,
                //         //     remainingTimeDisplay: false,
                //         //     fullscreenToggle: true  //全屏按钮
                //         // }
                // },
        }

    }
</script>
<link src="../css/Competition.css"></link>

