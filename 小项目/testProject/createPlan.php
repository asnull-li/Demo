<?php
// 引入配置文件
require 'config.php';
$title = $_POST['title'];
$uid= $_POST['uid'];

// 创建连接
$conn = new mysqli($database['servername'], $database['username'], $database['password'], $database['dbname']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

//判断登录状态
$res = $conn->query("select user from user where token='{$_COOKIE["token"]}'");
if ($res->num_rows > 0) {
    $row = mysqli_fetch_array($res);
    $user = $row['user'];
    // 插入数据
    if ($conn->query("INSERT INTO `plan` (`project`, `user`, `title`)
VALUES ('{$uid}','{$user}','{$title}')") === true) {
        exit('{"code":1,"msg":"创建成功！"}');
    } else {
        exit('{"code":0,"msg":"创建失败！"}');
    }
} else {
    exit('{"code":-1,"msg":"没有登录！"}');
}
