<template>
    <div class="col-10 outboxs">
        <mt-header :title="'新皮肤-'+obj.skinname+':'+obj.heroname">
            <a href="#" slot="left" @click="prev()">
                <mt-button icon="back"></mt-button>
            </a>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <div class="hero-big-img">
            <img :src="obj.image">
        </div>     
        <div class="col-10">
            <div class="hero-name">
                <span>{{obj.heroname}}</span>
                <span>{{obj.skinname}}</span>
                <span><img src='../images/index/hero/zhanshi.png'></span>
            </div>
            <div class="skinshow">
                <h4>皮肤展示</h4>
                <span><img :src='obj.gifimage'></span>
            </div>
            <div class="herostory">
                <h4>灵感特性介绍</h4>
                <p>{{obj.content}}</p>
                <span><img :src='obj.protype'></span>
            </div>
        </div>
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
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        getRequet(id){
            this.$http.get('http://localhost:8088/newskin/'+id+'').then(function(data){
                    // console.log(data.body);
                    this.obj = data.body[0];
            });
        }
    },
    mounted(){
        this.getRequet(this.option);
    }
}
</script>
<style scoped>
span,em,i,img{
    display: block;
}
.outboxs{
    padding: 40px 0 0 0;
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
    margin: 10px auto;
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
.skinshow h4,.herostory h4,.skills{
    width: 90%;
    margin: 15px auto;
    padding: 10px 0 10px 0;
    text-align: center;
    font-weight: bold;
    color: #555555;
    border-top:1px solid rgb(231, 231, 231); 
    border-bottom: 1px solid rgb(231, 231, 231);
}
.skinshow span{
    width: 90%;
    margin: auto;
}
.skinshow span img{
    width: 100%;
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
    margin: 20px auto;
    color: rgb(58, 58, 58);
}
.herostory span{
    width: 90%;
    margin: auto;
}
.herostory span img{
    width: 100%;
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


