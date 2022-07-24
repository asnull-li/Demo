// 封装一个动画函数
function animateX(obj, target, speed, callback) {
    // 防止重复点击造成定时器叠加
    clearInterval(obj.timer);
    // 设置一个定时器来执行动画 
    obj.timer = setInterval(function() {
        // console.log(box.offsetLeft);
        // 步长算法
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 到达目标之后停止定时器
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 动画结束之后执行回调函数
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, speed)
}

// 文档对象加载完后再执行
document.addEventListener('load', function() {


})