// x新闻列表控制器

//加载用到的模块
// const model=require('../model/model');
const Base=require('../model/ModelBase');

// 资讯
exports.get=function(req,res){
    console.log(1);
    let model=new Base('list');
    model.select(function(result){
        // console.log(result)
         res.send(result);
    })
}
// 视频
exports.video=function(req,res){
    let model=new Base('comvideo');
    model.select(function(result){
        console.log(result)
         res.send(result);
    })
}