function clock(el) {
    var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //不足10前面补0
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);

    // el.innerHTML = h + ":" + m + ":" + s;
    el.innerHTML = today.toDateString();
    // setTimeout(function () {
    //     my_clock(el)
    // }, 1000);
}

var my_clock = document.getElementById("timeClock");
clock(my_clock)