function drawRect() {
    var c=document.getElementById("myCanvas");
    var cxt=c.getContext("2d");
    var grd=cxt.createLinearGradient(0,0,175,50);
    grd.addColorStop(0,"#FF0000");
    grd.addColorStop(1,"#00FF00");
    cxt.fillStyle=grd;
    cxt.fillRect(0,0,175,50);

}

function drawImg() {
    var img=new Image();
    img.src="./img/huaji.png";
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    window.onload = function (){
        ctx.drawImage(img,0,0,300,300);
    }
}


function drawLine() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath(); //新建一条path
    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke();
}


