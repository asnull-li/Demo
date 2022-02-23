window.addEventListener('load', function() {
    // 定义一个全局变量
    var jsonObj = null;
    var ordertype = 0;

    //获取项目列表数据
    dataSend('GET', 'index.php', {
        type: 'project'
    }, function(res) {
        // 转换为对象数组
        jsonObj = JSON.parse(res);
        if (jsonObj.code == -1) {
            // 未登录
            alert(jsonObj.msg);
            window.location.href = "login.html";
        } else if (jsonObj.code == 0) {
            // 没有数据
            var nodata = document.querySelector('.noData');
            nodata.style.display = 'block';

        } else {
            var tbody = document.querySelector('tbody');
            // 遍历对象数组
            for (var i = 0; i < jsonObj.length; i++) {
                // var itemObj = JSON.parse(jsonObj[i]);
                // $(tbody).append(tr)[i].append(td);
                // 动态创建列表
                $(tbody).append(" <tr></tr>.");
                $(tbody.children[i]).append(" <td><a href=\"panel.php?id=" + jsonObj[i].id + "&title=" + jsonObj[i].title + "\">" + jsonObj[i].title + "</a></td>.");
                $(tbody.children[i]).append(" <td>" + jsonObj[i].department + "</td>.");
                $(tbody.children[i]).append(" <td>" + jsonObj[i].rep + "</td>.");
                $(tbody.children[i]).append(" <td>" + jsonObj[i].date + "</td>.");

            }
        }
    })

    // 获取用户昵称
    dataSend('GET', 'index.php', {
        type: 'uname'
    }, function(res) {
        // 转换为对象数组
        var jsonObj = JSON.parse(res);
        var uname = jsonObj.uname;
        var usernameEle = document.querySelector('.hiUser');
        usernameEle.innerHTML = 'Hi,' + uname;

    })

    // 排序事件
    var orderEle = document.querySelectorAll('.order');
    for (var i = 0; i < orderEle.length; i++) {
        // 循环绑定事件
        orderEle[i].addEventListener('click', function() {
            var orderValue = this.getAttribute('data-index');
            // 对象数组排序算法
            var compare = function(obj1, obj2) {
                if (ordertype == 0) {
                    ordertype = 1;
                    var val1 = obj1[orderValue];
                    var val2 = obj2[orderValue];
                    if (val1 > val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else {
                    ordertype = 0;
                    var val1 = obj1[orderValue];
                    var val2 = obj2[orderValue];
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }

            jsonObj = jsonObj.sort(compare);
            // console.log(jsonObj);

            var tbody = document.querySelector('tbody');
            // 清空原来的数据
            tbody.innerHTML = '';
            // 遍历对象数组
            for (var i = 0; i < jsonObj.length; i++) {
                // var itemObj = JSON.parse(jsonObj[i]);
                // $(tbody).append(tr)[i].append(td);
                // 动态创建列表
                $(tbody).append(" <tr></tr>.");
                $(tbody.children[i]).append(" <td><a href=\"panel.php?id=" + jsonObj[i].id + "&title=" + jsonObj[i].title + "\">" + jsonObj[i].title + "</a></td>.");
                $(tbody.children[i]).append(" <td>" + jsonObj[i].department + "</td>.");
                $(tbody.children[i]).append(" <td>" + jsonObj[i].rep + "</td>.");
                $(tbody.children[i]).append(" <td>" + jsonObj[i].date + "</td>.");

            }

        })
    }

    // 登出
    var exitEle = document.querySelector('.exit');
    exitEle.addEventListener('click', function() {
        // 发起登出请求
        dataSend('POST', 'login.php', {
            type: 'exit'
        }, function(res) {
            var resObj = JSON.parse(res);
            if (resObj.code == 1) {
                // 登出成功
                alert(resObj.msg);
                window.location.href = "login.html";
            } else {
                alert('登出失败！');
            }
        })

    })

    // 创建项目
    var createEle = document.querySelector('#create');
    createEle.addEventListener('click', function() {
        var title = prompt('请输入项目名称:');
        var dep = prompt('请输入所属部门:');
        var rep = prompt('请输入项目负责人:');
        if (title == '' || dep == '' || rep == '' || title == null || dep == null || rep == null) {
            alert('输入信息不能为空！');
        } else {
            // 发起创建请求
            dataSend('POST', 'createProj.php', {
                title: title,
                dep: dep,
                rep: rep
            }, function(res) {
                var resObj = JSON.parse(res);
                if (resObj.code == -1) {
                    // 未登录
                    alert(resObj.msg);
                    window.location.href = "login.html";
                } else if (resObj.code == 0) {
                    alert(resObj.msg);
                } else {
                    alert(resObj.msg);
                    location.reload();
                }
            })
        }
    })
})

// 发起数据请求
function dataSend(type, url, data, callback) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: callback
    })
}