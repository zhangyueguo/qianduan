/**
 * Created by Administrator on 16-10-5.
 */
var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;

var r = width / 2;

function drawBrackground()
{
    ctx.translate(r,r);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(0,0,r-5,0,2*Math.PI,false);
    ctx.stroke();
}

drawBrackground();
