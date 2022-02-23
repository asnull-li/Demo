<?php
// 引入配置文件
require 'config.php';

// 创建连接
$conn = new mysqli($database['servername'], $database['username'], $database['password'], $database['dbname']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

//判断登录状态
$res = $conn->query("select user,uname from user where token='{$_COOKIE["token"]}'");
if ($res->num_rows > 0) {
    $row = mysqli_fetch_array($res);
    $user = $row['user'];
    $uname = $row['uname'];
    if ($_GET['type'] == 'project') {
        // 读取项目列表
        $result = $conn->query("select * from project where user='{$user}'");
        if ($result->num_rows > 0) {
            $dataArray = array();
            while ($proRow = mysqli_fetch_array($result)) {
                // $item = json_encode($proRow);
                // array_push($dataArray, $item);
                array_push($dataArray, $proRow);
            }
            // 输出
            echo json_encode($dataArray);
        } else {
            exit('{"code":0,"msg":"No data！"}');
        }
    }
    if ($_GET['type'] == 'uname') {
        echo '{"code":1,"uname":"' . $uname . '"}';
    }
} else {
    exit('{"code":-1,"msg":"没有登录！"}');
}
