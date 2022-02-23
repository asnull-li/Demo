<?php
// 引入配置文件
require 'config.php';
$id = $_GET['id'];
$title = $_GET['title'];
// 创建连接
$conn = new mysqli($database['servername'], $database['username'], $database['password'], $database['dbname']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script crossorigin="anonymous" integrity="sha512-n/4gHW3atM3QqRcbCn6ewmpxcLAHGaDjpEBu4xZd47N0W2oQ+6q7oc3PXstrJYXcbNU1OHdQ1T7pAP+gi5Yu8g==" src="https://lib.baomitu.com/jquery/3.6.0/jquery.js"></script>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/panel.css">
    <script src="js/common.js"></script>
    <script src="js/panel.js"></script>
    <title>管理面板</title>
</head>

<body>
    <div class="header">
        <div class="left">
            <svg t="1644991745427" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1252" width="200" height="200">
                <path d="M302.307556 339.285333a93.969067 93.969067 0 0 0-24.940089 184.593067c-69.700267 11.684978-123.073422 71.520711-124.757334 144.133689l-0.034133 3.527111v38.1952h85.7088c0-75.320889 35.282489-142.415644 90.225778-185.639822l-1.251556-0.227556 2.480356-0.728178c8.738133-6.792533 17.976889-12.970667 27.625244-18.488888l2.525867 2.8672a137.898667 137.898667 0 0 1-35.612445-92.683378c0-24.302933 6.257778-47.138133 17.248712-66.980978a93.411556 93.411556 0 0 0-39.207823-8.567467z" fill="#6195FF" fill-opacity=".397" p-id="1253"></path>
                <path d="M721.692444 339.285333a93.969067 93.969067 0 0 1 24.940089 184.593067c69.700267 11.684978 123.073422 71.520711 124.757334 144.133689l0.034133 3.527111v38.1952h-85.7088c0-75.320889-35.282489-142.415644-90.225778-185.639822l1.251556-0.227556-2.480356-0.728178a236.487111 236.487111 0 0 0-27.625244-18.488888l-2.525867 2.8672a137.898667 137.898667 0 0 0 35.612445-92.683378c0-24.302933-6.257778-47.138133-17.248712-66.980978a93.411556 93.411556 0 0 1 39.207823-8.567467z" fill="#6195FF" fill-opacity=".404" p-id="1254"></path>
                <path d="M558.683022 516.744533c102.855111 21.242311 180.565333 111.274667 182.875022 219.875556l0.056889 4.994844a58.561422 58.561422 0 0 1-58.561422 58.561423H340.946489a58.561422 58.561422 0 0 1-58.561422-58.561423l0.056889-4.994844c2.309689-108.600889 80.031289-198.644622 182.897777-219.875556l45.647645 45.659023-54.226489 139.457422L512 757.100089l55.239111-55.239111-54.226489-139.457422 45.6704-45.659023zM512 223.823644c79.576178 0 144.088178 64.512 144.088178 144.088178S591.576178 512 512 512s-144.088178-64.512-144.088178-144.088178S432.423822 223.823644 512 223.823644z" fill="#6195FF" p-id="1255"></path>
            </svg>
            <h1><a href="">Asnull Software</a></h1>
            <ul class="nav">
                <li>
                    <a href="">项目</a>
                    <div class="project">
                        <h2>收藏项目</h2>
                        <ul>
                            <li>骑手管理</li>
                            <li>骑手管理</li>
                        </ul>
                        <a href="">创建项目</a>
                    </div>

                </li>
                <li>
                    <a href="">组员</a>
                    <div class="user">
                        <h2>组员列表</h2>
                        <ul>
                            <li>张三</li>
                            <li>李四</li>
                            <li>小明</li>
                            <li>老王</li>
                            <li>马云</li>
                            <li>马化腾</li>
                        </ul>

                    </div>
                </li>
            </ul>
        </div>
        <div class="right">
            <a class="hiUser" href="">hi,Asnull</a>
            <a class="exit" href="javascript:;">登出</a>

        </div>
    </div>

    <div class="main">
        <div class="side">
            <a class="current" href="javascript:;">看板</a>
            <a href="javascript:;">任务组</a>
        </div>
        <div class="content">
            <!-- 看板 -->
            <div class="kanban">
                <div class="head">
                    <h2><?php echo $title;?>看板</h2>
                </div>
                <div class="list">
<?php
//判断登录状态
$res = $conn->query("select user from user where token='{$_COOKIE["token"]}'");
if ($res->num_rows > 0) {
    $row = mysqli_fetch_array($res);
    $user = $row['user'];

    // 读取列表
    $result = $conn->query("select * from plan where user='{$user}' and project='{$id}'");
    if ($result->num_rows > 0) {
        while ($planRow = mysqli_fetch_array($result)) :
            $plan_id = $planRow['id'];
            $plan_title = $planRow['title'];
            $result_step = $conn->query("select * from planstep where user='{$user}' and uid='{$plan_id}'");
        ?>         
                    <section>
                        <div class="title">
                            <h3><?php echo $plan_title;?></h3>
                            <p>...</p>
                        </div>

                        <ul>
                        <?php
                        if ($result_step->num_rows > 0) :
                            while ($planstepRow = mysqli_fetch_array($result_step)) :
                                $planStatus = $planstepRow['planStatus'];
                                $stepTitle = $planstepRow['title'];
                                $stepId = $planstepRow['id'];
                        ?>
                            <li>
                                <h4><?php echo $stepTitle;?></h4>
                                <input id="planStatus" <?php echo $planStatus;?> plan-index='<?php echo $plan_id;?>' step-index='<?php echo $stepId;?>'  type="checkbox">
                            </li>                            
                        <?php 
                            endwhile;
                        endif;
                        ?>
                        </ul>
                        <a id="createStep" data-index='<?php echo $plan_id;?>' href="javascript:;">+创建事物</a>
                    </section>
        <?php endwhile;
    } else {
        // exit('{"code":0,"msg":"No data！"}');
    }
} else {
    exit('<script>alert("没有登录");window.location.href = "login.html";</script>');
}
?>           
                    <section>
                        <input class="edit" type="text" placeholder="新建面板名称">
                        <button id="createplan" data-index="<?php echo $id;?>">确定</button>
                    </section>

                </div>
            </div>
            <!-- 任务组 -->
            <div class="rwz">
                <div class="head">
                    <h2>xxx任务组</h2>
                </div>
                <div class="list">
                    <ul>
                        <li>
                            <div class="info">
                                <div class="title">骑手地图开发</div>
                                <div class="bgtime">开始时间：2022-01-01</div>
                                <div class="endtime">结束时间：2022-02-19</div>
                                <a href="" class="other">单元测试UI开发</a>
                            </div>
                            <a href="" class="delete">删除</a>
                        </li>
                        <li>
                            <div class="info">
                                <div class="title">骑手地图开发</div>
                                <div class="bgtime">开始时间：2022-01-01</div>
                                <div class="endtime">结束时间：2022-02-19</div>
                                <a href="#" class="other">单元测试UI开发</a>
                            </div>
                            <a href="" class="delete">删除</a>
                        </li>
                        <li>
                            <div class="info">
                                <div class="title">骑手地图开发</div>
                                <div class="bgtime">开始时间：2022-01-01</div>
                                <div class="endtime">结束时间：2022-02-19</div>
                                <a href="#" class="other">单元测试UI开发</a>
                            </div>
                            <a href="" class="delete">删除</a>
                        </li>
                        <li>
                            <div class="info">
                                <div class="title">骑手地图开发</div>
                                <div class="bgtime">开始时间：2022-01-01</div>
                                <div class="endtime">结束时间：2022-02-19</div>
                                <a href="#" class="other">单元测试UI开发</a>
                            </div>
                            <a href="" class="delete">删除</a>
                        </li>
                        <li>
                            <div class="info">
                                <div class="title">骑手地图开发</div>
                                <div class="bgtime">开始时间：2022-01-01</div>
                                <div class="endtime">结束时间：2022-02-19</div>
                                <a href="#" class="other">单元测试UI开发</a>
                            </div>
                            <a href="" class="delete">删除</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>



</body>

</html>