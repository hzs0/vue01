<template>
    <div class="col-10 outbox">
        <mt-header :title="'新英雄-'+obj.heroname">
            <a href="#" slot="left" @click="prev()">
                <mt-button icon="back"></mt-button>
            </a>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <div class="hero-big-img">
            <img :src="obj.image">
        </div>
        <mt-navbar v-model="selected" class="nav-list">
            <mt-tab-item id="1"><span>资料</span></mt-tab-item>
            <mt-tab-item id="2"><span>技能</span></mt-tab-item>
        </mt-navbar>
         <mt-tab-container v-model="selected" swipeable><!--注意swipeable的值必须是布尔类型所以直接写在元素内获取的值是一个字符串所以必须在data里定义 -->
            <mt-tab-container-item id="1">        
                <div class="col-10">
                    <div class="hero-name">
                        <span>{{obj.nakename}}</span>
                        <span>{{obj.heroname}}</span>
                        <span><img :src='obj.position'></span>
                    </div>
                    <div class="herovideo">
                        <h4>英雄展示</h4>
                        <video-player class="vjs-custom-skin" :options="playeroption"></video-player>
                    </div>
                    <div class="herostory">
                        <h4>英雄故事</h4>
                        <p>{{obj.story}}</p>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" class="hero-skills">
                <h4 class="skills">技能阐述</h4>
                <span class="skill-point"><i>技能加点</i><em>主加1技能,有大点大</em></span>
                <div class="col-10">
                    <mt-navbar v-model="selectedson" class="skills-list">
                        <mt-tab-item :id="index" v-for="(key,index) in skills"><span><img :src="key.image"/></span></mt-tab-item>
                    </mt-navbar>
                    <mt-tab-container v-model="selectedson" class="skill-cont"><!--注意swipeable的值必须是布尔类型所以直接写在元素内获取的值是一个字符串所以必须在data里定义 -->
                        <mt-tab-container-item :id="index" v-for="(key,index) in skills">
                            <em class="skills-name">{{key.skillname}}</em>
                            <p class="skill-detail">{{key.skillinfo}}</p>
                        </mt-tab-container-item>
                    </mt-tab-container>                
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import '../css/newcss.scss'
export default {
    created(){
        this.option = this.$route.query.id;
    },
    data(){
        return{
            obj:[],
            skills:[],
            option:-1,
            selected:'1',
            selectedson:0,
            swipeable:true,
            playeroption:{},
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        getRequest(id){
            this.$http.get('http://localhost:8088/herodetail/'+id+'').then(function(data){
                this.obj = data.body[0]
                for(let i = 1;i<data.body.length;i++){
                    this.skills.push(data.body[i])
                }
                // console.log(this.obj);
                // console.log(this.skills);
                this.playeroption = {
                    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    controls: false, //控制条
                    preload: 'auto', //视频预加载
                    muted: true, //默认情况下将会消除任何音频。
                    loop: true, //导致视频一结束就重新开始。
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: 'video/mp4',
                        src: data.body[0].herovideo,
                    }],
                    poster: data.body[0].image, //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                }
            })
        },
    },
    mounted(){
        this.getRequest(this.option)
    },

}
</script>
<style scoped>
span,em,i,img{
    display: block;
}
.outbox{
    padding: 40px 0 60px 0;
}
.hero-big-img{
    width: 100%;
    overflow: hidden;
}
.hero-big-img img{
    width: 100%;
    margin: auto;
    display: block;
}
.mint-navbar{
    width: 60%;
    margin: auto;
}
.mint-navbar .mint-tab-item.is-selected{
    text-decoration: none;
    font-weight: bold;
    color: #e49c00;
    border-bottom:2px solid #e49c00;
    transition: all 0.3s ease;
}
.mint-navbar .mint-tab-item.is-selected span{
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    color: #e49c00;
    transition: all 0.3s ease;
}
.mint-tab-item-label span{
    font-size: 14px;
    line-height: 18px;
    color: #3f3f3f;
    font-weight: bold;
}
.mint-tab-container{
    border-top: 1px solid #e2e2e2;
}
.hero-name{
    width: 100%;
    padding: 10px 0 10px 0;
}
.hero-name span{
    width: 90%;
    margin: 5px auto;
}
.hero-name span:nth-of-type(1){
    margin: 15px 5% 0 5%;
    font-size: 14px;
    color: #cacaca;
}
.hero-name span:nth-of-type(2){
    font-size: 32px;
    font-weight: bold;
}
.hero-name span:nth-of-type(3) img{
    width: 150px;
}
.herovideo{
    width: 100%;
}
.herovideo h4,.herostory h4,.skills{
    width: 90%;
    margin: 15px auto;
    padding: 10px 0 10px 0;
    text-align: center;
    font-weight: bold;
    color: #555555;
    border-top:1px solid rgb(231, 231, 231); 
    border-bottom: 1px solid rgb(231, 231, 231);
}
.vjs-custom-skin{
    width: 90%;
    margin: auto;
}
.mint-header{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    background: white;
    border-bottom: 1px solid #e7e7e7;
}
.mintui-back{
    color: #e49c00;
    font-weight: bold;
}
.mint-header .mint-button{
    color: #e49c00;
    font-weight: bold;
}
.herostory{
    width: 100%;
    margin: 25px auto;
}
.herostory p{
    width: 90%;
    margin: auto;
    color: rgb(58, 58, 58);
}
.hero-skills .mint-navbar{
    width: 90%;
    margin: auto;
}
.hero-skills .skill-point{
    width: 90%;
    height: 40px;
    border-radius: 0px;
    border:0px;
}
.hero-skills .skill-point i,.hero-skills .skill-point em{
    height: 20px;
    float: left;
    font-style: normal;
}
.hero-skills .skill-point i{
    width: 75px;
    height: 23px;
    line-height: 23px;
    margin: 0 0 0 17px;
    font-size: 10px;
    text-align: center;
    color: #664600;
    border-radius: 20px;
    background: #d6a845;
    transform: scale(0.9);
}
.hero-skills .skill-point em{
    margin: 0 0 0 10px;
    font-size: 10px;
    line-height: 20px;
    color: #636363;
    transform: scale(0.9);
}
.hero-skills span{
    width: 42px;
    height: 42PX;
    margin: auto;
    border-radius: 50%;
    border:2px solid #d8d8d8;
}
.hero-skills img{
    width: 100%;
    height: 100%;
    border-radius:50%;
    margin: 0 0 0 0;
}
.hero-skills .mint-navbar .mint-tab-item{
    padding: 0 0 0 0;
}
.hero-skills .mint-navbar .mint-tab-item.is-selected span{
    border:2px solid #e49c00;
}
.mint-navbar .mint-tab-item.is-selected{
    border: none;
}
.skill-cont{
    border: none;
}
.skill-cont em,.skill-cont p{
    width: 80%;
    margin:10px 10% 0 10%;
}
.skill-cont em{
    font-weight: bold;
    font-style: normal;
    color: #e49c00;
}
.skill-cont .skill-detail{
    display: block;
    padding: 0 0 20px 0;
    border-bottom: 1px dashed #ccc;
    font-size: 10px;
}
.clear:after {
	content: '';
	display: block;
	height: 0;
	overflow: hidden;
	clear:both;	
}
</style>


