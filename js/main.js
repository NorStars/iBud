// var c=document.getElementById("myCanvas");
// var cxt=c.getContext("2d");
// var grd=cxt.createLinearGradient(0,0,175,50);
// grd.addColorStop(0,"#FF0000");
// grd.addColorStop(1,"#00FF00");
// cxt.fillStyle=grd;
// cxt.fillRect(0,0,175,50);

// function drawIll() {
//     let img=new Image();
//     img.src="./img/illya.png";
//     // let c=document.getElementById("myCanvas");
//     let c=document.querySelector("#myCanvas");
//     let ctx=c.getContext("2d");
//     img.onload=function(){
//         ctx.drawImgae(img,0,0,100,100);
//     }
//
// }
// drawIll();



let sun;
let earth;
let moon;
let ctx;
function init(){
    sun = new Image();
    earth = new Image();
    moon = new Image();
    sun.src = "./img/huaji.png";
    earth.src = "./img/huaji.png";
    moon.src = "./img/huaji.png";

    let canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    sun.onload = function (){
        draw()

    }

}
init();
function draw(){
    ctx.clearRect(0, 0, 300, 300); //清空所有的内容
    /*绘制 太阳*/
    ctx.drawImage(sun, 100, 100, 100, 100);

    ctx.save();
    ctx.translate(150, 150);

    //绘制earth轨道
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,0,2)";
    ctx.arc(0, 0, 100, 0, 2 * Math.PI)
    ctx.stroke()

    let time = new Date();
    //绘制地球
    ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
    ctx.translate(100, 0);
    ctx.drawImage(earth, -12, -12,20,20)

    //绘制月球轨道
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,255,.3)";
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.stroke();

    //绘制月球
    ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
    ctx.translate(40, 0);
    ctx.drawImage(moon, -3.5, -3.5,5,5);
    ctx.restore();

    requestAnimationFrame(draw);

}
