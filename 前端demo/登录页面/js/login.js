window.addEventListener('load', function() {
    var btn = document.querySelector('.btn');
    var userEle = document.querySelector('#user');
    var passwordEle = document.querySelector('#password');
    btn.addEventListener('click', function() {
        if (userEle.value == '' || passwordEle.value == '') {
            alert('账号或密码不能为空！')
        } else {
            // location.href = 'E:/Web/demo/testDemo/index.html';
            window.location.href = "index.html";
        }

    })
})