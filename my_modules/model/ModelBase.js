// 加载模块
const mysql = require('mysql');

// 当前模块返回的是一个构造函数
module.exports = ModelBase;

// 让本模块继承mysql这个模块
ModelBase.prototype.__proto__ = mysql;
// console.log(Base.prototype.constructor);

// 创建一个大的数据库类。使用面向对象的方法来实现
function ModelBase(table){
    // 设置需要的属性
    this.table = table;                     // 当前对象需要操作的表名
    this.where_str = '';                    // 用于拼接当前操作的where条件字符串
    this.field_str = '*';                   // 用于拼接当前操作显示字段的字符串
    this.order_str = '';                    // 用于拼接当前操作排序的字符串
    this.limit_str = '';                    // 用于拼接当前操作限制行输出的字符串
    this.join_str = '';                     // 用于联表查询的字符串                 

    // 创建NODE连接数据库方法
    this.connection = this.createConnection({
    	host: "localhost", 			// 服务器地址
    	user: "root", 				// 登录名
    	password: "root", 		// 登录密码
    	port: "3306", 				// 服务器端口
    	database: "kings_honner" 			// 连接的数据库名
    });

    // 进行连接
    this.connection.connect((err)=>{
    	if(err){
    		console.log(err);
    		return ;
    	}
    	console.log('	数据库连接成功!');
    });
}


/**
 * where Object|Array|String   设置需要搜索条件,这是一个中间方法
 * where有三种写法。
 * 1、是最简单的 = 的且多个条件使用and来连接。
 *      例子： {username:'alex', password:'123'}=>where `username`='alex' and `password`='123'
 * 2、数组与对象的组合
 *      例子：[{age:'18', lim:'<'}, {status:0, lim:'>'}] => where `age`<'18' and `status`>'0'
 * 3、直接写入搜索条件。对于更加复杂的条件可以直接写入完整的搜索条件
 */
ModelBase.prototype.where = function(where){
    if(typeof where == 'object'){
        let where_arr = [];
        if(Array.isArray(where)){
            where.forEach((val)=>{
                let i=0
                for( key in val){
                    if(i==0){
                        where_arr.push("`"+key+"` "+val.lim+" '"+val[key]+"'");
                    }
                    i++;
                }
            });
        }else{
            for(key in where){
                where_arr.push("`"+key+"`='"+where[key]+"'");
            }
        }
        this.where_str = 'where '+ where_arr.join(' and ');
    }

    if(typeof where == 'string'){
        this.where_str = 'where '+ where;
    }

    return this;        // 为了实现方法的连写，可以直接把当前对象返回
}

/**
 * 设置搜索的字段方法
 * field Array|String   可以使用数组或才直接写入字符来设置需要搜索的字段
 * 数组的例子：['username', 'email'] = > `username`, `email`
 */
ModelBase.prototype.field = function(field){
    if(Array.isArray(field)){
        for(let i=0; i<field.length; i++){
            field[i] = '`'+field[i]+'`';
        }
       this.field_str = field.join(' , ');
    }

    if(typeof field == 'string'){
        this.field_str = field;
    }
    return this;
}

/**
 * 设置搜索的排序方法
 * field Object|String   可以使用数组或才直接写入字符来设置需要搜索的字段
 * 数组的例子：{id:'desc'} = > order by `id` desc
 */
ModelBase.prototype.order = function(order){
    if(typeof order == 'object' ){
        for( key in order){
            this.order_str = ' order by '+key+' '+order[key]+' '
        }
    }

    if(typeof field == 'string'){
        this.order_str = order;
    }
    return this;
}

/**
 * 设置搜索结果输出限制的方法
 * offset Number   开始输出的偏移量
 * number Number    输出的条数
 * 数组的例子： 10, 10 = > limit 10, 10
 */
ModelBase.prototype.limit = function(offset, number){
    this.limit_str = ' limit '+offset+', '+number;
    return this;
}

//连表查询
// {table:'category', on:['news.category_id', 'category.id']}
ModelBase.prototype.join = function(join_data){
    this.join_str = ' inner join `'+join_data.table+'` on '+join_data.on[0]+' = '+join_data.on[1]+' ';
    return this;
}

// 数据库搜索方法，是终结方法之一
ModelBase.prototype.select = function(fun){
    // 连接数据库
    // this.connect();
    let sql = 'select '+this.field_str+' from `'+this.table+'` '+ this.join_str +this.where_str + this.order_str+this.limit_str;
    console.log(sql);
    let that = this;
    this.connection.query(sql, (err, result)=>{
        that.initValue();   // 每一次执行完成一个终结方法把属性初始化
        // console.log(result);
        // 关闭数据连接
        // that.close();
        fun(result);        // 调用参数函数
    });
}

// 得到按搜索条件的总数据数的方法
ModelBase.prototype.count = function(fun){
    // 连接数据库
    // this.connect();
    let sql = 'select count(*) as count from `'+this.table+'` '+this.where_str;
    console.log(sql);
    let that = this;
    this.connection.query(sql, (err, result)=>{
        that.initValue();   // 每一次执行完成一个终结方法把属性初始化
        // 关闭数据连接
        // that.close();
        fun(result[0].count);        // 调用参数函数
    });
}

// 为数据库插入新的数据的方法
/**
 * data Object    需要插入数据库的数据
 * 例子：   {title:'明明爱你', content: '明明是谁'}
 */
ModelBase.prototype.insert = function(data, fun){
    let field_arr = [];
    let value_arr = [];
    for( k in data){
        field_arr.push('`'+k+'`');
        value_arr.push('"'+data[k]+'"');
    }
    let field_str = field_arr.join(' , ');
    let value_str = value_arr.join(' , ');

    let sql = 'insert into `'+this.table+'` ('+field_str+') values ('+value_str+')';
    console.log(sql);
    this.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err);
            fun(null);
        }

        fun(result.insertId);
    });
}

// 数据更新的方法
/**
 * data Object    需要插入数据库的数据

 * fun  callback  回调函数
 * all  boolean   代表是否全部数据执行更改，当值为true时即使没有更新条件也能执行更新操作。
 */
ModelBase.prototype.update = function(data,fun,all){

    //判断不可以在没有条件的情况下删除数据
    if(this.where_str == '' && !all){
        fun(null)
    }else{
        let update_arr = []; 
        for(key in data){
            update_arr.push( ""+key+" = '"+data[key]+"' ")
        }
        let update_str = update_arr.join(' , ')
        let sql = 'update '+this.table + ' set ' + update_str + this.where_str;
        console.log(sql);
        let that = this;
        this.connection.query(sql,(err,result)=>{
            that.initValue();                       //把where条件初始化
            if(err){
                console.log(err);
                fun(null);
            }
            fun(result);
        });
    }
}

//假删除方法把新闻的status的状态值改为-1
ModelBase.prototype.delete = function(fun,call){
    
    //判断不可以在没有条件的情况下删除数据
    if(this.where_str == '' && !call){
        fun(null)
    }else{
        let sql = 'update '+this.table + ' set ' + 'status = -1 ' + this.where_str;
        console.log(sql)
        let that = this;
        this.connection.query(sql,(err,result)=>{
            that.initValue();                       //把where条件初始化
            if(err){
                console.log(err)
            }
            fun(result);
        });
    }
}

//真正删除数据库语句
ModelBase.prototype.deleteData = function(fun){
    let sql = 'delete from `'+this.table+'` ' + where_str;
    let that = this;
    this.connection.query(sql,function(err,result){
        that.initValue();                       //把where条件初始化
        if(err){
            console.log(err);
        }
        fun(result);
    })
}

ModelBase.prototype.initValue = function(){
    this.where_str = '';                    // 用于拼接当前操作的where条件字符串
    this.field_str = '*';                   // 用于拼接当前操作显示字段的字符串
    this.order_str = '';                    // 用于拼接当前操作排序的字符串
    this.limit_str = '';                    // 用于拼接当前操作限制行输出的字符串

    // 
}

// 连接数据库的方法
ModelBase.prototype.connect = function(){
    // 进行连接
    this.connection.connect((err)=>{
    	if(err){
    		console.log(err);
    		return ;
    	}
    	console.log('	数据库连接成功!');
    });
}

//闭数据库连接
// ModelBase.prototype.close = function (){
    
//     this.connection.end(function(err){
//         console.log('	数据库连接已经关闭')
//     }); 
// }

