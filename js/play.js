var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

//query position of topTopic
console.log($(".topTopic").position().left);
console.log($(".topTopic").outerHeight(true));

//** Calculate points for topic lines **

//starting points
var startX = topTpL + lftIndtA;
var startY = topTpB;
//line endpoints
	//every time, the line turns at topDown[i] + .5*medBrOHs[i]
for(var i = 0; i < topDown.length; i++) {
	ctx.beginPath();
	if(i === 0) {
		ctx.moveTo(startX,startY);
	}
	else{
		ctx.moveTo(startX,topDown[i-1] + 0.5 * medBrOHs[i]);
	}
	ctx.lineTo(startX, topDown[i] + 0.5 * medBrOHs[i]);
	ctx.lineTo(startX + lftIndtB, topDown[i] + 0.5 * medBrOHs[i])
	ctx.stroke();
}

//** Draw lines **
// ctx.beginPath();
// ctx.moveTo(startX,startY);
// ctx.lineTo(startX,startY + firstJump);
// ctx.lineTo(startX + lftIndtB,startY + firstJump);
// ctx.stroke();
