<template>
    <div>
        <transition :name="transitionname">
            <router-view class="Router"></router-view>
        </transition> 
        <transition :name="transitionname">       
            <router-view name="content"></router-view>
        </transition> 
        <router-view name="footer"></router-view>

    </div>
</template>
<script>
export default {
    data() {
        return {
            transitionname:'',
        };
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
　　},
}
</script>
<style>
    .Router{
        position: absolute;
        z-index:9999;
        width: 100%;
        transition: all 0.8s ease;
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
    .mui-bar-tab .mui-tab-item.mui-active{
        text-decoration: none;
        color: #fcac00;
    }
    .mui-tab-item .me{
        font-size: 28px;
    }
    .mui-bar-tab{
        border-top-left-radius: 20px;
        border-top-right-radius:20px;
        box-shadow: 0px 5px 5px 5px #cccccc;
        background: white;
    }
</style>
