const modelBase = require('../model/ModelBase');
const urlModel = require('url');

let model = new modelBase('column');
exports.apiSpecial = function(req,res){
    let url = urlModel.parse(req.url,true);
    let page = url.query.page
    let begin = page *8 - 8;
    let offset =8;
    let data ={};
    model.limit(begin,offset).select(function(result){
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