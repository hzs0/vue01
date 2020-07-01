const modelBase = require('../model/ModelBase');

let model = new modelBase('videos');
exports.apiPlayervideo = function(req,res){
    let data ={};
    model.limit(0,20).select(function(result){
        if(result){
            data = result;
            // vmodel.limit(0,2).select(function(result){
            //     for(let i = 0;i<result.length;i++){
            //         data.push(result[i]);
            //     }
            //     console.log(data);
                res.send(data);
                // console.log(data);
            // })
            // console.log(result);
            // console.log(JSON.stringify(result));
        }else{
            console.log('没有获取到数据');
        }
    })
}