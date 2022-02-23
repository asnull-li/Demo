<?php
// 引入配置文件
require 'config.php';
$id = $_POST['id'];
$status = $_POST['status'];

// 创建连接
$conn = new mysqli($database['servername'], $database['username'], $database['password'], $database['dbname']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$res = $conn->query("select user from user where token='{$_COOKIE["token"]}'");
if ($res->num_rows > 0) {
    // 插入数据
    $res = $conn->query("UPDATE planstep SET planStatus='{$status}'
    WHERE id='{$id}'");
    if ($res) {
        exit('{"code":1,"msg":"成功！"}');
    }
} else {
    exit('{"code":-1,"msg":"没有登录！"}');
}