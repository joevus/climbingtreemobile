var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

//query position of topTopic
console.log($(".topTopic").position().left);
console.log($(".topTopic").outerHeight(true));

//calculate left position of topTopic. Just equal to left margin
var topTpL = 10;
//bottom position of topTopic. Top is zero, so add margins, border, padding iwht outerHeight
var topTpB = $(".topTopic").outerHeight(true) - 1 /*-1 for canvas border, temporary*/;

//calculate points for topic lines
var lftIndtA = 15; //15 pixel left-indent from top topic left-edge
var gap = 30; //30 pixel vertical gap between topics
var startX = topTpL + lftIndtA;
var startY = topTpB;
var lftIndtB = 10;

//Draw lines
ctx.beginPath();
ctx.moveTo(startX,startY);
ctx.lineTo(startX,88);
ctx.lineTo(startX + lftIndtB,88);
ctx.stroke();
