const express = require('express');
const app = express();

const bodyparser = require('body-parser');                      // 这个模块是用于简化网页提交方法的模块
const session = require('express-session');                     // 加载session调用模块
const cookieParser = require('cookie-parser');                  // 加载COOIKE调用模块
const multer = require('multer');                               // 加载文件上传的模块
const api = require('./routes/api');                    // 加载处理数据模块

// const port = require('../my-web/my_modules/model/SeverConf');                            //加载api借口模块


//设置port变量，访问端口号
app.set('port',process.env.PORT || 8088);

app.use(bodyparser.json());                                         // 使用boddyparser中间件
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    secret:'secret',                                                //对session id 相对应cookie 的签名
    resave:true,
    saveUninitialized: false,                                       // 是否保存未初始化的会话
    cookie: {
        maxAge: 60 * 3000 * 1000,                                   // 设置session的有效时长，单位为毫秒
    },
}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie");
    res.header("Access-Control-Allow-Methods", "POST,GET");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

api(app);                                                           //调用数据接口模块

const singstr = 'dsaghugiasd';
app.use(cookieParser(singstr));                                     //加入cookie;

app.use(multer({dest:'/tmp/'}).array('image'));                     //加入文件上传的中间件

app.listen(app.get('port'),(err)=>{
    console.log('服务器已经开启，端口号为:8088');
})