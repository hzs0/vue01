const ApiConstroller = require('../my_modules/constroller/ApiConstroller');
const specialApiConstroller = require('../my_modules/constroller/specialApiConstroller');
const videoApiConstroller = require('../my_modules/constroller/videoApiConstroller');
const heroApiConstroller = require('../my_modules/constroller/heroApiConstroller');
const officialApiConstroller = require('../my_modules/constroller/officialApiConstroller');
const ApiIndDetailConstroller = require('../my_modules/constroller/ApiIndDetailConstroller');
const ApiVideoConstroller = require('../my_modules/constroller/ApiVideoConstroller');
const ApiHeroDetailConstroller = require('../my_modules/constroller/ApiHeroDetailConstroller');
const ApiSkinConstroller = require('../my_modules/constroller/ApiSkinConstroller');
const userConstroller = require('../my_modules/constroller/userConstroller');
const competitionController = require('../my_modules/constroller/competitionController');
const dynamic = require('../my_modules/constroller/dynamic');
const remark = require('../my_modules/constroller/remark');
const userform = require('../my_modules/constroller/userformConstroller');

module.exports = function(app){
    //主页新闻数据接口
    //这是虚拟页面的真实路径，不能直接在页面上生成数据
    app.get('/index',ApiConstroller.apiIndex);
    app.get('/special',specialApiConstroller.apiSpecial);
    app.get('/playervideo',videoApiConstroller.apiPlayervideo);
    app.get('/hero',heroApiConstroller.apiHero);
    app.get('/official',officialApiConstroller.apiOfficial);
    app.get('/newsdetail/:id',ApiIndDetailConstroller.apiIndexdetail);
    app.get('/livevideo/:id',ApiVideoConstroller.apiVideo);
    app.get('/herodetail/:id',ApiHeroDetailConstroller.apiHeroDetail);
    app.get('/newskin/:id',ApiSkinConstroller.apiSkinDetail);
    
    //登陆注册
    app.get('/login',userConstroller.login);
    app.post('/adduser',userConstroller.adduser); //用户注册

    //赛事页数据
    app.get('/competition',competitionController.get);
    app.get('/video',competitionController.video);

    //社区页数据
    app.get('/send',remark.send)
    app.get('/show',remark.show)
    app.get('/users',remark.users)
    app.get('/user',userform.user)
    app.get('/fabu',dynamic.fabu)
    app.get('/refer',dynamic.refer)
}