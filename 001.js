/**
 * Created by Administrator on 2015/11/25.
 */
window.onload=function(){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    canvas.width=1200;
    canvas.height=800;
    //drawStar(ctx,400,400,300,150,20);
    ctx.fillStyle="black";


    for(var i=0;i<50;i++){
       var r=Math.random()*10+10;
        var x=Math.random()*canvas.width;
        var y=Math.random()*canvas.height;
        var a=Math.random()*360;
       drawStar(ctx,x,y,r,r/2,a);
    }

}

function drawStar(ctx,x,y,outerR,innerR,rot){
    ctx.beginPath();
    for(var i=0;i<=5;i++){
        ctx.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*outerR+x,
            -Math.sin((18+i*72-rot)/180*Math.PI)*outerR+y);//外圆半径为300，偏移值400
        ctx.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*innerR+x,
            -Math.sin((54+i*72-rot)/180*Math.PI)*innerR+y);
    }
    ctx.closePath();
    ctx.fillStyle='#fb3';
    ctx.strokeStyle='#fd5';
    ctx.lineJoin='round';
    ctx.lineWidth=2;
    ctx.fill();
    ctx.stroke();
}
