<template id ="plavideo">
    <div class="col-10" style="overflow:hidden">
        <mt-swipe :auto="2500">
            <mt-swipe-item><img src="../images/index/1.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/2.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/3.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/4.jpg" class="img-responsive"></mt-swipe-item>
            <mt-swipe-item><img src="../images/index/5.jpg" class="img-responsive"></mt-swipe-item>
        </mt-swipe>
        <div class="col-10">
            <div class="mui-content" style="background-color:#fff">
                <h5>热门视频<a href="#" class="more">更多></a></h5>
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="key in obj" v-if="key.type_id == 0">
                        <router-link :to="{path:'/livevideo',query:{id:key.id}}">
                            <img class="mui-media-object" :src="key.poster">
                            <div class="mui-media-body">
                                <span><i><img :src="key.image"></i><em>{{key.username}}</em></span>
                                <P>{{key.tab}}</p>
                            </div>
                        </router-link>
                    </li>
                    <!-- <li class="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img class="mui-media-object" src="../images/index/bgimg/35.jpg">
                            <div class="mui-media-body">
                                <span><i><img src="../images/index/1.jpg"></i><em>梦之泪</em></span>
                                <P>真-斗神既视感！</p>
                            </div>
                        </a>
                    </li>-->
                </ul>    
            </div>
        </div>
        <div class="col-10">
            <div class="mui-content" style="background-color:#fff">
                <h5>职业选手<a href="#" class="more">更多></a></h5>
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="key in obj" v-if="key.type_id == 1">
                        <router-link :to="{path:'/livevideo',query:{id:key.id}}">
                            <img class="mui-media-object" :src="key.poster">
                            <div class="mui-media-body">
                                <span><i><img :src="key.image"></i><em>{{key.username}}</em></span>
                                <P>{{key.tab}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>    
            </div>
        </div>
        <div class="col-10">
            <div class="mui-content" style="background-color:#fff">
                <h5>官方解说<a href="#" class="more">更多></a></h5>
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="key in obj" v-if="key.type_id == 3">
                        <router-link :to="{path:'/livevideo',query:{id:key.id}}">
                            <img class="mui-media-object" :src="key.poster">
                            <div class="mui-media-body">
                                <span><i><img :src="key.image"></i><em>{{key.username}}</em></span>
                                <P>{{key.tab}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>    
            </div>
        </div>
        <div class="col-10">
            <div class="mui-content" style="background-color:#fff">
                <h5>个性推荐<a href="#" class="more">更多></a></h5>
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="key in obj" v-if="key.type_id == 4">
                        <router-link :to="{path:'/livevideo',query:{id:key.id}}">
                            <img class="mui-media-object" :src="key.poster">
                            <div class="mui-media-body">
                                <span><i><img :src="key.image"></i><em>{{key.username}}</em></span>
                                <P>{{key.tab}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>    
            </div>
        </div>
    </div>
</template>
<script>
let playervideo = {
    template:'#plavideo'
}
export default {
    data(){
        return{
            obj:{},
        }
    },
    methods:{
        getRequest(){
            // console.log(1);
            this.$http.get('http://localhost:8088/playervideo').then(function(data){
                this.obj = data.body
                // console.log(this.obj); 
            })
        },
    },
    mounted(){
        this.getRequest()
    },
}
</script>
<style scoped>
    i,em,span{
        display:block;
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
    .mint-swipe-indicator{
        opacity: 1 ;
    }
    .mint-swipe-indicator.is-active{
        opacity: 1 ;
        background: #fcac00;
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

    .col-10:last-of-type{
        padding: 0 0 30px 0;
    }
    .mui-content{
        border-top:1px solid #f0f0f0; 
        border-top-width: 90%;
    }
    .mui-table-view:before,.mui-table-view:after{
        background:none;
    }
    .mui-h5, h5{
        width:105%;
        font-size:10px;
        transform:scale(0.9);
        margin:10px 0 0 -5px;
    }
    .more{
        float:right;
        margin:0 12px 0 0;
        color:#ffd687;
    }
    .mui-table-view-cell{
        position:relative;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body[data-v-bf8a114c]{
        height:4rem;
        margin-top: 0;
        overflow:normal;
    }
    .mui-media-object{
        border-radius: 5px;
    }
    .mui-media-body span{
        width:100%;
    }
    .mui-media-body span em{
        width:70%;
        float:left;
        padding:5px 0 0 40px;
        text-align: left;
        font-size:12px;
        font-style:normal;
        overflow:hidden;
        text-overflow: ellipsis;
    }
    .mui-media-body span i{
        position:absolute;
        left:20px;
        bottom:25px;
    }
    .mui-media-body span img{
        width:28px;
        height:28px;
        border-radius:50%;
        border:2px solid white;
    }
    .mui-media-body p{
        width:110%;
        padding:8px 0 0 0;
        margin:0 0 0 -8px;
        float:left;
        text-align:left;
        font-size:10px;
        transform:scale(0.9);
        overflow:hidden;
        text-overflow: ellipsis;
    }
   
</style>

