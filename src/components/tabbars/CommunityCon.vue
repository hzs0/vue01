<template>  
<div id="mytab" >
<!-- 这里是头部 -->
    <div class="mt-header">
        <div class="mui-input-row mui-search mui-active">
            <input type="search" class="mui-input-clear" placeholder="大家都在搜：新赛季" data-input-clear="15" data-input-search="15">
            <span class="mui-icon mui-icon-clear mui-hidden"></span>
            <span class="mui-placeholder">
                <span class="mui-icon mui-icon-search"></span>
                <span></span>
            </span>
        </div>
        <span class="mui-icon mui-icon-chat">
            <span class="mui-badge">3</span>
        </span>
    </div>
   <div class="comm-tab">
       <router-link class="tab-choose" to="Attention">
          <span>关注</span>
       </router-link>
      <router-link class="tab-choose" to="Hotspot">
          <span>热点</span>
       </router-link>
       <router-link class="tab-choose" to="Discover">
          <span>发现</span>
       </router-link>
   </div>

   <router-view></router-view>
   <router-link to='/Write'>
         <button class="mui-icon mui-icon-compose"  ></button>
   </router-link>
   <!-- <nav class="mui-bar mui-bar-tab" ref="hide">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Match">
				<span class="mui-icon mui-icon-videocam"></span>
				<span class="mui-tab-label">赛事</span>
			</router-link>
			<router-link class="mui-tab-item"  to="/Attention">
				<span class="mui-icon mui-icon-spinner mui-spin" ></span>
				<span class="mui-tab-label">社区</span>
			</router-link>
            <router-link class="mui-tab-item" to="/Order">
				<span class="mui-icon mui-icon-extra mui-icon-extra-trend"></span>
				<span class="mui-tab-label">战绩</span>
			</router-link>
			<router-link class="mui-tab-item" to="/My">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我</span>
			</router-link>
		</nav> -->
</div>


</template>
<script>
// import TabSlider from 'tab-slider'
export default {
      data(){
        return {
            show:false,
        }
    },
}
</script>
<style scoped>
#mytab{
    padding-top: 50px;
}
.mt-header{
    width: 100%;
    height: 50px;
    background-color: #e3ba60;
    position: fixed;
    box-sizing: border-box;
    display: flex;
    top:0;
    right: 0;
    left: 0;
    z-index: 10;
}
.tab-choose{
    display:inline;
}
.mt-header input{
    width: 270px;
    height: 30px;
    background: white;
    margin: 10px 0 0 20px;
    border-radius: 50px;
    font-size: 14px;
}
.mui-search.mui-active:before {
    left: 30px;
    top: 28px;
    color: #e3ba60;
}
.mui-icon.mui-icon-chat{
    margin: auto;
    color: white;
    position: relative;
}
.mui-icon   .mui-badge {
    top: -6px;
    margin-left: -10px;
    position: absolute;
}
.comm-tab{
    width: 100%;
    height: 50px;
    background: white;
    box-shadow: 0 0 2px #999999b3;
    position: fixed;
    z-index: 10;
    text-align: center;
}
.tab-choose{
    width: 30px;
    height: 20px;
    margin:0 15px 0 15px;
    font-size: 16px;
    line-height: 50px;
    text-decoration: none;
    font-weight: 500;

}
.comm-tab .tab-choose.mui-active {
    font-size: 20px;
    color: #e3ba60;
    border-bottom:3px solid #e3ba60;
    padding-bottom: 11px;
    
}
.mui-bar-tab .mui-tab-item.mui-active{
    color: #e2ad3a;
    text-decoration: none
}
.mui-bar{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 0 2px #999999b3;
    background-color: white;
}
.mui-bar .mui-icon{
    font-size: 22px;
}
.mui-search.mui-active:before {
    left: 30px;
    top: 28px;
    color: #e3ba60;
}
.mui-icon.mui-icon-chat{
    margin: auto;
    color: white;
    position: relative;
}
.mui-icon   .mui-badge {
    top: -6px;
    margin-left: -10px;
    position: absolute;
}
.mui-icon-compose{
    bottom: 80px;
    position: fixed;
    right: 30px;
    background: #ffbd2b;
    color:white;
    border-radius: 50%;
    width: 53px;
    height: 53px;
    font-weight: 600;
    font-size: 34px;
}
</style>