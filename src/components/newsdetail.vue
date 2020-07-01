<template>
    <div class="col-10">
        <mt-header title="详情">
                <router-link to="recomd/recommend" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <div class="col-10 outbox">
            <div class="perinfo">
                <div class="infobox">
                    <img src='../images/index/hand/g.jpg'>
                    <span>
                        <i>{{obj.username}}</i>
                        <em>认证信息：{{obj.username}}账号</em>
                    </span>
                    <button>关注</button>
                </div>
            </div>
            <div class="detailtitle clear">
                <h4>{{obj.title}}</h4>
                <span>{{obj.c_time}}</span>
                <span class="mui-icon mui-icon-eye">3.2万</span>
            </div>
            <div class="detailcont">
                <img :src="obj.banimg">
                <p>{{obj.content}}</p>
            </div>
            <div class="duty">
                <h5>免责声明</h5>
                <p>您充分理解并同意，您所看到的内容均由作者独立创作、提供，上述信息仅供您参考。 本平台仅为信息发布平台，并不意味着赞同其内容，不保证信息的合理性、准确性和完整性，且不对因信息的不合理、不准确或遗漏导致的任何损失或损害承担责任。</p>
            </div>
            <div class="col-10 bottominput">
            <div class="mui-input-group">
                <div class="mui-input-row">
                    <!-- <label>Input</label> -->
                    <input type="text" placeholder="发表评论...">
                    <button type="submit">发表</button>
                </div>
            </div>
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
            obj:{},
            option:-1,
        }
    },
    methods:{
        getRequet(id){
            this.$http.get('http://localhost:8088/newsdetail/'+id+'').then(function(data){
                    console.log(data.body);
                    this.obj = data.body[0];
            });
        }
    },
    mounted(){
        console.log(this.option);
        this.getRequet(this.option);
    }
}
</script>
<style scoped>
span,em,i{
    display: block;
}
.outbox{
    padding: 40px 0 60px 0;
}
.mint-header{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    background: white;
    border: none;
    border-bottom:1px solid rgb(233, 233, 233); 
}
/* .col-10 .mint-header .mint-header-title{
    height: 12px;
    margin: 15px 0 15px 0;
    font-size: 10px;
    font-weight: bold;
    color: rgb(75, 75, 75);
} */
.mintui-back{
    color: #e49c00;
    font-weight: bold;
}
.mint-header .mint-button{
    color: #e49c00;
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
    height: 20px;
    line-height: 20px;
    padding: 0 0 0 15px;
    font-size: 10px;
    font-style: normal;
}
.infobox span i{
    color: #c79730;
}
.infobox button{
    width: 60px;
    height: 30px;
    padding: 0 0 0 0;
    margin: 5px 0 0 0;
    line-height: 10px;
    text-align: center;
    float: right;
    color: #c79730;
    border: 1px solid #c79730;
}
.detailtitle{
    width: 100%;
}
.detailtitle h4{
    width: 90%; 
    margin: 15px 5% 0 5%;
    line-height: 30px;
    font-weight: bold;
    color: rgb(73, 73, 73);
}
.detailtitle span{ 
    margin: 5px 10px 0 5%;
    float: left;  
    font-size: 10px;
    color: rgb(192, 192, 192);
}
.detailtitle span:nth-of-type(2){
    margin: 7px 0 0 0 ;
}
.detailcont{
    width: 90%;
    margin: 25px auto;
}
.detailcont img{
    width: 100%;
}
.detailcont p{
    margin: 20px 0 20px 0;
    color: rgb(58, 58, 58);
}
.clear:after {
	content: '';
	display: block;
	height: 0;
	overflow: hidden;
	clear:both;	
}
.duty h5,.duty p{
    width: 90%;
    margin: auto;
    text-align: center; 
}
.duty h5{
    width: 90%;
    margin: 50px 5% 15px 5%;
    font-size: 10px;
    font-weight: bold;
    color: rgb(80, 80, 80);
}
.duty p{
   width: 100%;
   line-height: 18px;
   font-size: 10px;
   transform: scale(0.9); 
   color: rgb(175, 175, 175); 
}
</style>


