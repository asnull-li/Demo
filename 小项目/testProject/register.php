<?php
/*  用户注册 */

// 引入配置文件
require 'config.php';
$name = $_POST['name'];
$user = $_POST['user'];
$pw = $_POST['pw'];

// 创建连接
$conn = new mysqli($database['servername'], $database['username'], $database['password'],$database['dbname']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

//判断账号是否重复
$result = $conn->query("select id from user where user='{$user}'");
if($result->num_rows > 0){
    exit('{"code":-1,"msg":"此账号已存在！"}');
}

// 写入账号信息
if($conn->query("INSERT INTO `user` (`id`,`uname`, `user`, `pw`)
VALUES (null,'{$name}', '{$user}', '{$pw}')") === true){
    exit('{"code":1,"msg":"账号注册成功！"}');
}else{
    exit('{"code":-1,"msg":"注册失败！"}');
}