// 公共事件
window.addEventListener('load', function() {
    var nav = document.querySelector('.nav');
    var userStatusEle = document.querySelector('.right');

    // 注册一个鼠标经过事件
    for (var i = 0; i < nav.children.length; i++) {
        nav.children[i].addEventListener('mouseover', function() {
            this.children[1].style.visibility = 'visible';
            this.children[1].style.transition = 'opacity 0.3s';
            this.children[1].style.opacity = '1';
        })
        nav.children[i].addEventListener('mouseout', function() {
            this.children[1].style.visibility = 'hidden';
            this.children[1].style.opacity = '0';
        })
    }

    // 登出
    userStatusEle.addEventListener('mouseover', function() {
        this.children[0].style.display = 'none';
        this.children[1].style.display = 'inline-block';
    })
    userStatusEle.addEventListener('mouseout', function() {
        this.children[1].style.display = 'none';
        this.children[0].style.display = 'inline-block';
    })

})