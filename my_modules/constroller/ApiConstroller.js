const modelBase = require('../model/ModelBase');
const urlModel = require('url');

let model = new modelBase('news');
let vmodel = new modelBase('videos');

exports.apiIndex = function(req,res){
    //获取路径内的所有参数
    let url = urlModel.parse(req.url,true);
    let page = url.query.page
    let begin = page *10 - 10;
    let offset =10;
    /*
    1   0,10
    2   10,10
    3   20,10
    */
    console.log(url.query);
    console.log(req.url);
    let data ={};
    model.limit(begin,offset).select(function(result){
        if(result){
            data = result;
            let videobegin = page * 2 - 2;
            let videooffset = 2;
            vmodel.limit(videobegin,videooffset).select(function(result){
                for(let i = 0;i<result.length;i++){
                    data.push(result[i]);
                }
                data.sort(function(){
                    return (0.5-Math.random());
                })
                console.log(data);
                res.send(data);
                // console.log(data);
            })
        }else{
            console.log('没有获取到数据');
        }
    })
}


