const modelbase = require('../model/ModelBase');

let model = new modelbase('news');
exports.apiIndexdetail = function(req,res){
    console.log(req.url);
    let id = req.params.id
    console.log(id);
    model.where({id:id}).select(function(result){
        if(result){
            let data = JSON.stringify(result);
            res.send(data);
            console.log(data);
        }else{
            console.log('没有获得数据');
        }
    })
}