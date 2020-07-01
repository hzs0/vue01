// 加载需要用到的模块
// const model = require('../model/model');
const Base = require('../model/ModelBase');
const fs = require('fs');           // 加载文件处理模块


const querystring = require('querystring'); 

let username = '';

exports.user = function(req,res){
    let model = new Base('user');
    model.select(function(result){
        res.send(result);
    })
}

// 验证用户登录方法
// function checkLogin(req, res){
//     console.log('session:',req.session.user);
//     console.log('cookie:',req.cookies.user_id);
//     if(!req.session.user){
//         if(req.cookies.user_id > 0){
//             let user_id = req.cookies.user_id;
//             let model = new Base('user');

//             // 通过cookie中的用户ID在数据库中搜索该用户
//             model.where({id:user_id, status:1}).select(function(result){
//                 console.log(result);
//                 // 如果数据中该用户是正常的话
//                 if(result.length>0){
//                     // 如果搜索到有用户则重新设置SESSION凭证
//                     req.session.user = {id: result[0].id, name: result[0].username};
//                 }else{
//                     // 如果没有该用户的话，则把COOKIE删除
//                     res.cookie('user_id', null, { maxAge: 0});

//                     let data = {};
//                     data.msg = '未登录无法进入，请登录后再进行操作！！';
//                     data.url = 'http://localhost:8888/login';
//                     data.time = 3000;
//                     res.render('redirect', data); 
//                 }
//                 // checkLogin(req,res);
//             });
//         }else{
//             let data = {};
//             data.msg = '未登录无法进入，请登录后再进行操作！！';
//             data.url = 'http://localhost:8888/login';
//             data.time = 3000;
//             res.render('redirect', data);
//         }
//     }else{
//         username = req.session.user.name;
//     }
// }

