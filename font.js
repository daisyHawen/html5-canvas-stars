/**
 * Created by Administrator on 2015/12/3.
 */
window.onload=function(){
    var canvas=document.getElementById('canvas');
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext('2d');
    context.beginPath();
    context.font="bold 40px Arial";
    context.fillStyle="blue";
    context.fillText("canvas",500,100);

    context.font="italic bold 40px Arial ";
    context.fillStyle="blue";
    context.fillText("canvas",500,200);

    context.font="lighter small-caps bold 40px Arial ";
    context.fillStyle="blue";
    context.fillText("canvas",500,300);

    context.font="bolder small-caps bold 40px Arial ";
    context.fillStyle="blue";
    context.fillText("canvas",500,400);
}