<template>
    <div>
        <!-- 这是头部 -->
        <div class="headers">
            <div class="header-bg">
                <div class="header-op">
                    <p>安卓手Q242区|Lv30|·游戏离线</p>
                </div>
            </div>
        </div>
        <!-- 主体部分 -->
         <!-- 切换战绩、表现以及物品的选项卡 -->
        <div class="Tab">
            <div class="son">
                <router-link to="/military/combat">战绩</router-link>
                <router-link to="/military/expression">表现</router-link>
                <router-link to="/military/goods">物品</router-link>
            </div>
            <router-view></router-view> 
        </div>
    </div>
</template>
<script>
// import '../css/military.css'
export default{
    data(){
        return{

        }
    },
    methods:{
        per(e){
            e.preventDefault()
            console.log(1111);
        }
    }
}
</script>
<link src="../css/military.css"></link>

