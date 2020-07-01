<template>
    <div class="col-10">
        <div class="col-10 top-bg">
            <div class="col-1">
                <span v-if="data[0].username"><img :src="data[0].image"></span>
                <span v-else><img src="../images/index/handimg.png"></span>
            </div>
            <div class="mui-search col-8" id="inptext">
                <span class="mui-icon mui-icon-search search-icon"></span>                
                <input type="search" class="mui-input-clear int-search" placeholder="大家都在搜：新赛季">
            </div>
            <div class="col-1">
                <span class="mui-icon mui-icon-chat"><span class="mui-badge">9</span></span>
            </div>
        </div>
        <div class="table-tab">
            <mt-navbar>
                <mt-tab-item><router-link to='/recomd/recommend'><span>推荐</span></router-link></mt-tab-item>
                <mt-tab-item><router-link to='/recomd/special'><span>专栏</span></router-link></mt-tab-item>
                <mt-tab-item><router-link to='/recomd/playervideo'><span>视频</span></router-link></mt-tab-item>
                <mt-tab-item><router-link to='/recomd/hero'><span>英雄</span></router-link></mt-tab-item>
                <mt-tab-item><router-link to='/recomd/official'><span>官方</span></router-link></mt-tab-item>
            </mt-navbar>
            <mt-tab-container id="tabview"><!--注意swipeable的值必须是布尔类型所以直接写在元素内获取的值是一个字符串所以必须在data里定义 -->
                <mt-tab-container-item> 
                    <transition :name="transitionname"> 
                        <router-view class="Router"></router-view>
                    </transition>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
    created(){
        this.data = JSON.parse(localStorage.getItem('Flag' || []));
        console.log(this.data);
    },
    data(){
        return {
            transitionname:'',
            data:{}
        }
    },
    methods:{

    },
    watch:{
　　　'$route' (to, from) {
　　　　　　if(to.meta.index > from.meta.index){
　　　　　　　　this.transitionname = 'slide-top'
                // console.log(this.transitionname);
　　　　　　}else{
　　　　　　    this.transitionname = 'slide-bottom'
                // console.log(this.transitionname);
　　　　　  }
        }
　　}
}		
</script>
<style scoped>
    .Router{
        position: absolute;
        z-index:0;
        width: 100%;
        transition: all 0.5s ease;
        overflow: hidden;
        background: white;
    }
    .slide-bottom-enter,.faslide-topde-leave-active {
        opacity: 0;
        transform: translate(0,100%);
    }
    .slide-bottom-leave-active,.slide-top-enter {
        opacity: 0;
        transform: translate(0,100%)
    }
    .img{
        display: block;
    }
    /* 头部搜索框 */
    .top-bg{
        height: 40px;
        position: fixed;
        z-index: 99;
        background: #facf74;   
    }
    .top-bg .col-1 span img{
        width: 30px;
        height: 30px;
        margin: 5px 0 0 10px;
        border-radius: 50%;
    }
    .mui-icon{
        margin: 9px 0 0 0;
        color: white;
        font-size: 20px;
    }
    .mui-icon-extra{
        margin: 9px 0 0 15px;
        color: white;
        font-size: 20px;
    }
    .mui-input-row{
        clear: right;
    }
    .int-search{
        width: 88%;
        height: 25px;
        margin: 7px 0 0 18px;
        border-radius: 20px;
        font-size: 10px;
        text-align: left;
        background: white;
    }
    .mui-badge{
        top: 2px;
        margin-left: -25px;
    }
    .search-icon{
        margin: 9px 0 0 25px;
        position: absolute;
        color: #575757;
    }

    /* 选项卡样式 */
    .mint-tab-container{
        overflow:inherit;
        border: none;
        box-shadow: none;
    }
    .mint-tab-container-item{
        background: white;
        padding: 0 0 40px 0;
    }
    .mint-tab-container-wrap{
        padding: 80px;
    }
    .table-tab{
        width: 100%;
        padding-top: 75px;
        /* overflow: hidden; */
    }
    .mint-tab-item-label span{
        width: 100%;
        height: 34px;
        line-height: 34px;
        margin: -12px 0 0 0;
        display: block;
        border-bottom:1px solid #e4e4e4 ;
    }
    .mint-tab-item-label a{
        width: 100%;
        height: 100%;
        display: block;
        color: rgb(88, 88, 88);
    }
    .mint-tab-item{
        font-size: 16px;
        color: #20232c;
    }
    .mint-navbar[data-v-cf1b2a74]{
        width: 100%;
        height: 35px;
        position: fixed;
        top: 40px;
        z-index: 99;
        background: white;
        border-bottom: 1px solid #cccccc;
    }
    .mint-tab-item-labe{
        font-size: 0px;
    }
    .mint-tab-item.is-selected {
        font-weight: 800;
        color: #f3c258;
        border-bottom: none;
    }

    /* 轮播图样式 */
    .mint-swipe{
        height: 190px;
        background: white;
    }
    .mint-navbar .mint-tab-item {
        padding: 12px 0;
        z-index: 99;
        background: white;
    }
    .mint-navbar .mint-tab-item.is-selected{
        text-decoration: none;
    }
    .mint-swipe-indicator.is-active {
        opacity:1;
        background-color:#f8bc3a;
    }
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
    /* .video-js{
        background: none;
    } */

    .mui-active{
        color: #ffcc5d !important;
        font-size:16px;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s ease;
        border-bottom: 3px solid  #ffcc5d;
    }
</style>
 
    