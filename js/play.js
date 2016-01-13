var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

//query position of topTopic
console.log($(".topTopic").position().left);
console.log($(".topTopic").outerHeight(true));

//calculate points for topic lines
var startX = topTpL + lftIndtA;
var startY = topTpB;

//Draw lines
ctx.beginPath();
ctx.moveTo(startX,startY);
ctx.lineTo(startX,88);
ctx.lineTo(startX + lftIndtB,88);
ctx.stroke();
