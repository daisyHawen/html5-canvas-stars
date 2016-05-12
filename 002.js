/**
 * Created by Administrator on 2015/11/30.
 */
window.onload=function(){
    var canvas=document.getElementById("canvas");
    var contex=canvas.getContext('2d');
    canvas.height=800;
    canvas.width=800;
    var grd=contex.createLinearGradient(0,0,800,800);
    grd.addColorStop(0.0,'#fff');
    grd.addColorStop(1.0,'#000');
    contex.fillStyle=grd;
    contex.fillRect(0,0,800,800);

    contex.arc(400,400,300,0.5*Math.PI,1.5*Math.PI,true);
    contex.moveTo(400,100);
    contex.arcTo(1200,400,400,700,(400-100)*dis(400,100,1200,400)/(1200-400));
    contex.stroke();
}
function dis(x1,y1,x2,y2){
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}