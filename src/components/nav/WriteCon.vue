<template>
  <div>
    <div class="write-head">
       <router-link  to="social/Attention">
          <span class="write-choose">取消</span>
       </router-link>

          <span class="write-title">发动态</span>
        
       <router-link to="social/Attention">
          <button type="button" class="mui-btn mui-btn-warning" @click="postrequest">发布</button>
       </router-link>
    </div>
    <textarea class="form-control" rows="3" placeholder="分享这一刻的想法..." v-model="str" autofocus>

        
    </textarea>
    <button type="button" class="mui-btn mui-btn-outlined">＋选择主题</button>
    <div class="write-bottom">
         <span class="bottom-ico"><img src="../../images/social/picture.png" alt=""></span>
         <span class="bottom-ico"><img src="../../images/social/video.png" alt=""></span>
         <span class="bottom-ico"><img src="../../images/social/face.png" alt=""></span>
    </div>
  </div>
</template>
<script src="../vue-resource1.5.1.js">
</script>

<script>
import $ from 'jquery'
export default {
    data(){
        return {
            str:'',
        }
    },
    methods:{
        postrequest(){
                this.$http.get('http://127.0.0.1:8088/fabu?content='+this.str).then(function(result){
                  console.log(result)  
                })
        }
    }
}
</script>
<style scoped>

.write-head{
    top: 0;
    padding-left:10px;
    padding-right: 10px; 
    width: 100%;
    height: 50px;
    background: white;
    box-shadow: 0 0 2px #999999b3;
    position: fixed;
    z-index: 10;
    text-align: center;
}
.write-head a{
    display: inline;
}
.write-choose{

    margin-top: 13px;
    font-size: 17px;
    float: left;
    text-decoration: none;
    font-weight: 500;
    color: #f0ad4e;   
}
.write-title{
    margin-top: 8px;
    font-size: 20px;
    display: inline-block;
}
.mui-btn-warning{
    float: right;
    top: 7px;
    background: #cca78ced;
    border: 1px solid #cca78ced;
    font-size: 17px;
    height: 34px;
}
.form-control{
    padding-top:55px; 
    height: 620px;
    border: none;
 
}
.form-control:focus{
    box-shadow:none;
}
.mui-btn-outlined{
    border: none;
    background: #99999914;
    color: #cca78ced;
    margin-left: 30px;
}
.write-bottom{
    width: 100%;
    height: 50px;
    position: absolute;
    /* border-top:1px solid #999999b3    */
    overflow: hidden;
    bottom: 30px;
}
.bottom-ico{
    margin-top: 5px;
    margin-left:20px; 
}
</style>

