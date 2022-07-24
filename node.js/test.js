// var arr = [1,2,4,5,6];
// arr.forEach(function(item){
// 	console.log(item);
// })

const fs = require("fs")

/* fs.readFile('test.txt', 'utf-8', function(err, data) {
    console.log(data)
}) */


// // 写入文件
// const wirtePro = new Promise((resolve, reject) => {
//     let filename = "testTow.txt";
//     fs.writeFile(filename, 'hello Asnull!', function(err) {
//         if (!err) {
//             resolve(filename)
//         }
//     })
// })

// // 读取文件
// const readPro = new Promise((resolve, reject) => {
//     let filename = "testTow.txt";
//     fs.readFile(filename, 'utf-8', function(err, data) {
//         if (!err) {
//             resolve(data)
//         }
//         resolve(data)
//     })
// })

// async function read() {
//     let result = await wirtePro;
//     let res = await readPro;
//     console.log(res)
// }

// read()

// const http = require('http');
// const server = http.createServer()
// server.on('request', (req, res) => {
//     console.log("接收到客户端访问");
//     let str = `你好，你正在访问：${req.url}`;
//     res.setHeader("Content-Type", 'text/html; charset=utf-8');
//     res.end(str);
// })
// server.listen('85', () => {
//     console.log("服务器已启动！")
// })

// console.log(module)

// const http = require('http');

// console.log(http)

const express = require('express');
// 导入路由模块
const userRouter = require('./api');

// 创建服务器
const app = express();

const host = '192.168.43.235';

// 注册路由
app.use(userRouter);

// 启动服务器
app.listen(8080, () => {
    console.log('服务器已启动.！http://' + host + ':80');
})