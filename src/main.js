
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// 安装Vue路由
Vue.use(VueRouter)
// 安装Vue访问资源模块
Vue.use(VueResource)
//视频视频依赖包
import VueVideoPlayer from 'vue-video-player';
Vue.use(VueVideoPlayer);

import Navigation from 'vue-navigation'
Vue.use(Navigation,{router})

//懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//下拉刷新,上拉加载
import VueScroller from 'vue-scroller';
Vue.use(VueScroller);


import '../lib/mui/js/mui.js';
import '../lib/mui/css/mui.min.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../src/css/index.css';
import '../lib/mint-ui/lib/style.css';
import '../lib/mui/css/icons-extra.css';
//导入视频的相关依赖包
import "video.js/dist/video-js.css";          
import "vue-video-player/src/custom-theme.css";     
import 'videojs-contrib-hls';     



//头部搜索框
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

//头部标题距返回按钮
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button)

//页面跳转
import { TabContainer, TabContainerItem,Cell} from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

// 头部tabbar
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

//轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//底下tabbar
import {Tabbar} from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);

//上拉加载更多
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);

//拖动页面组件
// import TabSlider from 'tab-slider'
// import '../lib/tab-slider/dist/index.css'
// Vue.use(TabSlider)

import index from './index.vue'
import router from './router.js'
//过滤掉上一个组件的滚动条
router.afterEach(() => {
    window.scrollTo(0,0);
});


let vm = new Vue({
    el:'#myapp',
    data:{

    },
    //render该对象与data对象同级
    // render:function(creatElement){
    //     return creatElement(demo)
    // },
    //以下写法为es6的简写
    render:c=>c(index),
    router:router,
})





