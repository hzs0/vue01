const modelBase = require('../model/ModelBase');
const urlModel = require('url');

let smodel = new modelBase('skins');
let model = new modelBase('heros');

exports.apiOfficial = function(req,res){
    let url = urlModel.parse(req.url,true);
    let page = url.query.page
    let begin = page *4 - 4;
    let offset = 4;
    let data ={};
    model.limit(begin,offset).select(function(result){
        if(result){
            data = result;
            smodel.limit(begin,offset).select(function(result){
                for(let i = 0;i<result.length;i++){
                    data.push(result[i]);
                }
                //把日期转为时间戳再从大到小排列
                data.sort(function(x,y){
                    let value1= new Date(x.updatetime);
                    let value2= new Date(y.updatetime);
                    return value2 - value1;
                });
                console.log(data);
                res.send(data);
                // console.log(data);
            })
        }else{
            console.log('没有获取到数据');
        }
    })
}