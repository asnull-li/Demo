window.addEventListener('load', function() {
    var btn = document.querySelector('.btn').children[0];
    var userEle = document.querySelector('#user');
    var passwordEle = document.querySelector('#password');
    //判断是否有本地存储
    if (sessionStorage.getItem('user')) {
        // 自动写入账号密码
        userEle.value = sessionStorage.getItem('user');
        passwordEle.value = sessionStorage.getItem('pw');
        // 清除本地数据
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('pw');
    }

    // 绑定登录事件
    btn.addEventListener('click', function() {
        btn.innerHTML = '登录中...';
        if (userEle.value == '' || passwordEle.value == '') {
            alert('账号或密码不能为空！')
        } else {
            //发送登录请求
            dataSend('POST', 'login.php', {
                user: userEle.value,
                pw: passwordEle.value,
            }, function(res) {
                // 转换为json对象
                var jsonObj = JSON.parse(res);
                if (jsonObj.code == -1) {
                    btn.innerHTML = '登录';
                    alert(jsonObj.msg);
                } else {
                    btn.innerHTML = '登录成功！正在跳转主页...';
                    setTimeout(function() {
                        window.location.href = "index.html";
                    }, 1000)

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