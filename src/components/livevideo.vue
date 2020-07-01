<template>
<div class="col-10">
    <mt-header :title="obj.title" class="hdbg">
        <router-link to="recomd/playervideo" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="vjsvid">
        <video-player class="vjs-custom-skin" :options="playeroptions"></video-player>
    </div>
    <div class="perinfo fixper">
        <div class="infobox">
            <img src='../images/index/hand/g2.jpg'>
            <span>
                <i>{{obj.username}}</i>
                <em>认证信息: {{obj.username}}账号</em>
            </span>
            <button class="guangzhu">关注</button>
        </div>
    </div>
    <div class="talkbox">
        <div class="pertalk">
            <p v-for="key in list"><i>{{key.name}}</i> : {{key.content}}</p>
        </div>
    </div>
    <!-- <div class="col-10 bottominput">
        <div class="mui-input-group">
            <div class="mui-input-row">
                <input type="text" placeholder="发表评论..." v-model="content">
                <button @click="send">发表</button>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
export default {
    created(){
        this.option = this.$route.query.id
        this.username = JSON.parse(localStorage.getItem('Flag' || '[]'))[0].username
    },
    data(){
        return{
            obj:[],
            optin:-1,
            playeroptions:{},
            content:'',
            username:'',
            list:[
                {name:'国服第一系列',content:'Maybelle小乔，细节教学'},
                {name:'国服第一系列',content:'110星十三万战芈月,霸榜第一'},
                {name:'国服第一系列',content:'区一单排王者40星上51星'},
                {name:'国服第一系列',content:'国服李白个人秀，输一把送一88红包'},
                {name:'国服第一系列',content:'万人关羽五一全天直播'},
                {name:'国服第一系列',content:'国服全网第一流邦'},
                {name:'国服第一系列',content:'Maybelle小乔，细节教学'},
                {name:'国服第一系列',content:'110星十三万战芈月,霸榜第一'},
                {name:'国服第一系列',content:'区一单排王者40星上51星'},
                {name:'国服第一系列',content:'国服李白个人秀，输一把送一88红包'},
                {name:'国服第一系列',content:'万人关羽五一全天直播'},
                {name:'国服第一系列',content:'国服全网第一流邦'},
            ],
        }
    },
    methods:{
        getRequet(id){
            this.$http.get('http://localhost:8088/livevideo/'+id+'').then(function(data){
                    // console.log(data.body);
                    this.obj = data.body[0];
                    let live = {
                        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                        autoplay: true, //如果true,浏览器准备好时开始回放。
                        controls: true, //控制条
                        preload: 'auto', //视频预加载
                        muted: false, //默认情况下将会消除任何音频。
                        loop: false, //导致视频一结束就重新开始。
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                            type: 'video/mp4',
                            src: data.body[0].video,
                        }],
                        poster: data.body[0].poster, //你的封面地址
                        width: document.documentElement.clientWidth,
                        notSupportedMessage: '此视频正在加载中...，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    }
                    this.playeroptions = live
            });
        },
        send(){
            let talk = {}
            this.list = JSON.parse(localStorage.getItem('Flag' || '[]'));
            let data = {name:this.username,talk:this.content};
            this.list.push(data),
            localStorage.setItem('Flag',JSON.stringify(this.list))
            this.content = ''

            // console.log(this.list);
            // const reqHeaders = {
            //     Accept: 'text/json',
            //     // 第一次登录之后返回的token，之后每次请求都携带token字段进行验证
            //     Flag: this.list
            // }
            //     // window全局监听localStorage的setItem事件以及时更新
            // window.addEventListener('setItemEvent', function (e) {
            //     reqHeaders.Flag = e.newValue
            //     this.list = reqHeaders.Flag
            //     console.log(reqHeaders.Flag);
            // })
        }
    },
        
    mounted(){
        this.getRequet(this.option);
    }
}
</script>

<style scoped>
span,em,i{
    display: block;
}
.hdbg{
    background: none;
}
.mint-header{
    position: fixed;
    z-index: 99;
}
.mint-header .mint-button{
    color: white;
    font-weight: bold;
}

.perinfo{
    width: 90%;
    height: 79px;
    margin: auto;
    border:1px solid rgb(255, 255, 255);
    border-bottom:1px solid rgb(243, 243, 243);
}
.infobox{
    width: 100%;
    height: 40px;
    margin: 20px 0 0 0;
    /* border:1px solid red; */
}
.infobox img{
    width: 40px;
    height: 40px;
    float: left;
    border-radius: 50%;
}
.infobox span{
    width: 70%;
    height: 40px;
    float: left;
}
.infobox span i,.infobox span em{
    width: 100%;
    height: 20px;
    line-height: 20px;
    padding: 0 0 0 15px;
    font-size: 10px;
    font-style: normal;
}
.infobox span i{
    color: #c79730;
}
.guangzhu{
    width: 60px;
    height: 30px;
    padding: 0 0 0 0;
    margin: 5px 0 0 0;
    line-height: 10px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    float: right;
    color: #f8f8f8;
    background: #e7b23f;
    border-radius: 20px;
    border: none;
}
.talkbox{
    width: 100%;
    height: 340px;
    position: relative;
    overflow: hidden;
}
.pertalk{
    width: 90%;
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 0px;
    margin: auto;
}
.pertalk p {
    width: 100%;
    margin: 7px 0 7px 0;
    font-size: 14px;
    color: #8f8f8f;
    /* transform: scale(0.9); */
}
.pertalk i{
    width: auto;
    display: inline-block;
    font-style: normal;
    color: #ffd16f;
}
</style>

