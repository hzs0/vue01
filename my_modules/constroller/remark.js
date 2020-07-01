const Base = require('../model/ModelBase');
//  const model = require('../model/model');

const querystring = require('querystring'); 


 let model = new Base('remark');
exports.send = function(req,res){
    // console.log(req.query)
   

    let data = {};
    data.content =req.query.content;
    // data.c_time = new Date().toLocaleTimeString();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let y = new Date().getMonth()+1;
    let r = new Date().getDate();
    if(y<10){
        y = '0' +y
    }
    if(m<10){
        m = '0' +m
    }
    if(h<10){
        h = '0' +h
    }
    if(r<10){
        r = '0' +r
    }
    data.c_time =y+'-'+r+' '+ h+':'+m
    data.status = 0;
    // console.log(data.c_time)
    
    model.insert(data,function(id){
            if(!id){
                res.send('no')
            }else{
                res.send('OK')
            }
             

    })

}

// exports.addNews = function(req,res){{
//     let id = req.params.id;
//     let model = new Base('dynamics')
//      model.where({id:1}).select(function(result){
        
//      })
// }}

// exports.select(function(result){
//     console.log(result)
// })
    

exports.show=function(req,res){
        model.select(function(result){
            // console.log(result)
            res.send(result)
        });
}
exports.users =function(req,res){
    let models = new Base('user')
    models.select(function(results){
        // console.log(result)
        res.send(results)
    });
}