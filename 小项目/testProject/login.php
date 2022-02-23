<?php
// 引入配置文件
require 'config.php';
$user = $_POST['user'];
$pw = $_POST['pw'];

// 如果为登出
if($_POST['type'] == 'exit'){
    // 清除cooki
    setcookie("token", "", time()-3600);
    exit('{"code":1,"msg":"登出成功！"}');
}

// 创建连接
$conn = new mysqli($database['servername'], $database['username'], $database['password'], $database['dbname']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$result = $conn->query("select * from user where user='{$user}'");

if ($result->num_rows > 0) {
    $row = mysqli_fetch_array($result);
    if ($row['pw'] == $pw) {
        // 返回一个cookie
        $token = md5($user . $pw);
        setcookie("token", $token, time() + 3600);
        // 插入token
        $res = $conn->query("UPDATE user SET token='{$token}'
    WHERE user='{$user}'");
        if ($res) {
            exit('{"code":1,"msg":"登录成功！"}');
        }
    }else{
        exit('{"code":-1,"msg":"账号或密码错误！"}');
    }
} else{
    exit('{"code":-1,"msg":"账号或密码错误！"}');
}
