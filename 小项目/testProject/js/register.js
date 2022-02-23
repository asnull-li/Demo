window.addEventListener('load', function() {
    var nameEle = document.querySelector('#name');
    var userEle = document.querySelector('#user');
    var pwEle = document.querySelector('#password');
    var btnEle = document.querySelector('.btn').children[0];

    // 绑定注册事件
    btnEle.addEventListener('click', function() {
        btnEle.innerHTML = '注册中...';
        setTimeout(function() {
            if (nameEle.value == '' || userEle.value == '' || pwEle.value == '') {
                alert('用户注册信息不能为空！');
                btnEle.innerHTML = '注册';
            } else {
                //发送注册请求
                dataSend('POST', 'register.php', {
                    name: nameEle.value,
                    user: userEle.value,
                    pw: pwEle.value,
                }, function(res) {
                    // 转换为json对象
                    var jsonObj = JSON.parse(res);
                    if (jsonObj.code == -1) {
                        btnEle.innerHTML = '注册';
                        alert(jsonObj.msg);
                    } else {
                        btnEle.innerHTML = '注册成功！正在跳转登录...';
                        setTimeout(function() {
                            window.location.href = "login.html";
                        }, 1000);

                        // 本地存储
                        sessionStorage.setItem('user', userEle.value);
                        sessionStorage.setItem('pw', pwEle.value);

                    }
                })
            }


        }, 500)

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