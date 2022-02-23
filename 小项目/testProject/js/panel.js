window.addEventListener('load', function() {
    var kanbanEle = document.querySelector('.kanban');
    var rwzEle = document.querySelector('.rwz');
    var sideEle = document.querySelector('.side');

    // 看板
    sideEle.children[0].addEventListener('click', function() {
        this.setAttribute('class', 'current');
        sideEle.children[1].setAttribute('class', '');
        kanbanEle.style.display = 'block';
        rwzEle.style.display = 'none';
    });

    // 任务组
    sideEle.children[1].addEventListener('click', function() {
        this.setAttribute('class', 'current');
        sideEle.children[0].setAttribute('class', '');
        kanbanEle.style.display = 'none';
        rwzEle.style.display = 'block';

    });

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

    // 创建事物
    var createStepEle = document.querySelectorAll('#createStep');
    for (var i = 0; i < createStepEle.length; i++) {
        // 循环绑定事件
        createStepEle[i].addEventListener('click', function() {
            var planId = this.getAttribute("data-index");
            var planStepTitle = prompt('请输入事物的名称：');
            if (planStepTitle == '' || planStepTitle == null) {
                alert('输入不能为空！');
            } else {
                // 发起创建请求
                dataSend('POST', 'createStep.php', {
                    title: planStepTitle,
                    id: planId
                }, function(res) {
                    var resObj = JSON.parse(res);
                    if (resObj.code == -1) {
                        alert(resObj.msg);
                        window.location.href = "login.html";
                    } else if (resObj.code == 0) {
                        alert(resObj.msg);
                    } else if (resObj.code == 1) {
                        // 登出成功
                        alert(resObj.msg);
                        location.reload();
                    }
                })
            }
        })
    }

    // 设置为完成状态
    var statusEle = document.querySelectorAll('#planStatus');
    for (var index = 0; index < statusEle.length; index++) {
        // 循环绑定事件

        statusEle[index].addEventListener('click', function() {

            var pstatus = !this.checked ? '' : 'checked';
            var stepid = this.getAttribute('step-index');
            dataSend('POST', 'changeStatus.php', {
                status: pstatus,
                id: stepid
            }, function(res) {
                var resObj = JSON.parse(res);
                console.log(pstatus);
                if (resObj.code == -1) {
                    alert(resObj.msg);
                    window.location.href = "login.html";
                }
            })

        })
    }

    //创建新计划
    var createplanEle = document.querySelector('#createplan');
    var textEle = document.querySelector('.edit');
    createplanEle.addEventListener('click', function() {
        console.log(111);
        if (textEle.value == '') {
            alert('输入不能为空！');
        } else {
            dataSend('POST', 'createPlan.php', {
                title: textEle.value,
                uid: this.getAttribute('data-index')
            }, function(res) {
                var resObj = JSON.parse(res);
                if (resObj.code == -1) {
                    alert(resObj.msg);
                    window.location.href = "login.html";
                } else if (resObj.code == 1) {
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