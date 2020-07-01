const modelbase = require('../model/ModelBase');

let model = new modelbase('heros');
let smodel = new modelbase('skills');

exports.apiHeroDetail = function(req,res){
    console.log(req.url);
    let id = req.params.id
    console.log(id);
    let list = [];
    model.where({id:id}).select(function(result){
        if(result){
            list = result;
            smodel.where({pid:id}).select(function(result){
                if(result){
                    for(let i = 0;i<result.length;i++){
                        list.push(result[i])
                    }
                    // console.log(list);
                    // data = result;
                    // res.send(data);
                    let data = JSON.stringify(list);
                    res.send(data);
                    console.log(data);
                }else{
                    console.log('没有获取到数据');
                }
            })
        }else{
            console.log('没有获得数据');
        }
    })
}

// exports.apiSkill = function(req,res){
//     let id = req.params.id
//     let data = {};
//     model.where({pid:id}).select(function(result){
//         if(result){
//             data = result;
//             res.send(data);
//         }else{
//             console.log('没有获取到数据');
//         }
//     })
// }