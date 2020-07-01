<template>
    <div class="col-10 bottominput">
        <form class="mui-input-group">
            <div class="mui-input-row">
                <!-- <label>Input</label> -->
                <input type="text" placeholder="发表评论...">
                <button type="submit">发表</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.bottominput{
    height: 40px;
    position: fixed;
    bottom: 0px;
    background: rgb(240, 240, 240);
}
.mui-input-group{
    background: rgb(240, 240, 240);
}
.mui-input-group input{
    width: 75%;
    height: 25px;
    margin: 7.5px 0 7.5px 15px;
    border-radius: 20px;
    background: white;
}
.mui-input-row button{
    height:27px;
    line-height: 16px;
    margin: 6.5px 0 0 10px;
    border-radius: 20px;
    font-size: 10px;
    color: white;
    background: -ms-linear-gradient(top, rgb(253, 211, 73),  #d6a400);        /* IE 10 */
    background:-moz-linear-gradient(top,rgb(253, 211, 73),  #d6a400);/*火狐*/ 
    background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(rgb(253, 211, 73)), to(#d6a400));/*谷歌*/ 
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(253, 211, 73)), to(#d6a400));      /* Safari 4-5, Chrome 1-9*/
    background: -webkit-linear-gradient(top, rgb(253, 211, 73), #d6a400);   /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top, rgb(253, 211, 73), #d6a400);  /*Opera 11.10+*/
    border: none;
}
::-webkit-input-placeholder{
    font-size: 10px;
    color: rgb(168, 168, 168);
}
.mui-input-group:before{
    background:none;
}
</style>



    