const modelBase = require('../model/ModelBase');
const urlModel = require('url');

let model = new modelBase('heros');
exports.apiHero = function(req,res){
    let url = urlModel.parse(req.url,true);
    let page = url.query.page
    let begin = page *10 - 10;
    let offset = 10;
    let data = {};
    model.limit(begin,offset).select(function(result){
        if(result){
            data = result;
            res.send(data);
        }else{
            console.log('没有获取到数据');
        }
    })
}