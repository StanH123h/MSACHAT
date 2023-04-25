// 引入MySQL模块
const mysql = require('mysql');

// 建立数据库连接
const connection = mysql.createConnection({
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库用户名
    password: 'Hc20070521', // 数据库密码
    database: 'msachatdatabase' // 数据库名称
});

// 执行查询
connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('The result is:aaa ', results);
});

// 关闭数据库连接
connection.end();