let str = "重复ddjfkdjf打开的速度 2222 555s  下";
for (single_world of str) {
    console.log(single_world)
}
生成手写(str);

function 生成手写(s) {
    let box = []
    for (var i in s) {
        //   if (Math.random() < 0.06) {
        //     box.append('<span>&#xFFE' + Math.floor(Math.random() * 4.0 + 6.0) + ';</span>');
        //   }
        let cur = $('<span>' + s[i] + '</span>');
        if (Math.random() < 0.2) cur.addClass('r');
        else if (Math.random() < 0.2) cur.addClass('l');
        if (Math.random() < 0.2) cur.addClass('lg');
        else if (Math.random() < 0.2) cur.addClass('sm');
        if (Math.random() < 0.2) cur.addClass('up');
        else if (Math.random() < 0.2) cur.addClass('dwm');
        box.append(cur);
    }
    $('#print').show();
}