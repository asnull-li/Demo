// 导入数据库操作模块
const mysql = require('mysql');

// 建立连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'my_db'
})

// const db = mysql.createPool({
//     host: '119.29.99.32',
//     user: 'scancode',
//     password: 'GJCrxP2Ba3zNmpWP',
//     database: 'scancode'
// })

//测试是否连接正常
/* db.query('select * from users', (err, result) => {
    if (err) return err.message;
    console.log(result)
}) */

//插入数据

// 需插入的数据
const user = { username: 'Asnull', password: '001322ss' }

// 插入的sql语句
const sql = 'insert into users (username,password) values (?,?)';

// 执行sql语句
db.query(sql, [user.username, user.password], (err, res) => {
    if (err) return console.log(err.message);
    if (res.affectedRows === 1) {
        console.log('数据插入成功！')
    }
})