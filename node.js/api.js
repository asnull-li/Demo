// 路由模块

// 导入模块
const express = require("express");

// 创建路由对象
const router = express.Router();

// 挂载路由
router.get('/api/list', (req, res) => {
    console.log('你好，get list');
    // 响应客户端的请求
    res.send(req.query)
})

router.post("/api/add", (req, res) => {
    console.log('post')
        // res.send('post')
    res.send(req.query)
})

// 导出路由对象
module.exports = router;