//加载需要用到的模块
const urlModel = require('url');

const utility = require('utility'); //加密

const modelbase = require('../model/ModelBase');
const fs = require('fs');           // 加载文件处理模块

// // 用户登录页面的方法
// exports.loginPage = function(req, res) {
//     res.render('login');
// }

let model = new modelbase('user');
exports.login = function(req, res) {
    // console.log(123);
    var url = urlModel.parse(req.url,true)  //get  传
    // const {pathname:url,query} = urlModel.parse(req.url,true)
    // console.log(url)
    // console.log(req.url)
    // console.log(url.query.password)
    // let post = {username:req.body.name,password:req.body.password}
    let post= {username:url.query.username,password:url.query.password}//get 传

    model.where(post)
    model.select(function(result) {
        if (result.length > 0) {
            // console.log(req.body)
                // 登录成功把数据存放到session中进行用户验证
            // req.session.user = { id: result[0].id, name: result[0].username };
            // console.log(req.session);
            // 判断用户是否启用了记住我,如果启动的话则需要设置对应的COOKIE
            // 登录成功进行跳转
            let data = {};
            data.msg = '登录成功';
            data.status='200';     
            data.list=result;
            data = `${url.query.callback}(${JSON.stringify(data)})` 
            res.send(data)   
        } else {
            // console.log(url.query)
            // 登录失败
            let data = {
                'msg':'登录失败，你的账号或密码有误，请重新输入'
            };
        data = `${url.query.callback}(${JSON.stringify(data)})`
        res.send(data)
        }
    })

}

// //用户注册功能
exports.adduser = function(req, res) {
    console.log(req.query)
    let post = { username: req.query.username, password: req.query.password, iphone: req.query.iphone, email: req.query.email }
    let where1 = { username: req.query.username };
    let where2 = { email: req.query.email };
    let where3 = { iphone: req.query.iphone }
    model.where(where1)
    model.select(function(result) {
        if (result != '') {
            console.log(result);
            res.send('用户名已被占用,请重新输入')
        } else {
            model.where(where2)
            model.select(function(result) {
                if (result != '') {
                    console.log(result);
                    res.send('邮箱已被占用，请重新输入')
                } else {
                    model.where(where3)
                    model.select(function(result) {
                        if (result != '') {
                            console.log(result)
                            res.send('手机号已存在，请重新输入')
                        } else {
                            var myDate = new Date();
                            post.c_time = myDate.toLocaleString();
                            post.status = 1;
                            model.insert(post, (result) => {
                                if (result) {
                                    res.send('注册成功')
                                } else {
                                    res.send('注册失败')
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}