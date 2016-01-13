//count number of branches under Science
var count=0;
for(var prop in treeData.bigBr[1].medBr) {
	if(treeData.bigBr[1].medBr.hasOwnProperty(prop)) {
		++count;
	}
}

//** Topic boxes under Science **

//variables we need
var topTpL = 10; //left position of topTopic. Set same as left margin
var gap = 20; //30 px vertical gap between bottom of previous subtopic and top of next subtopic
var lftIndtA = 15; //left-indent from top topic left-edge to start of vertical line
var lftIndtB = 10; //length of horizontal line from vertical line
var lftIndt = topTpL + lftIndtA + lftIndtB;
//   bottom position of topTopic. Top is zero, so add margins, border, padding iwht outerHeight
var topTpB = $(".topTopic").outerHeight(true) - 1 /*-1 for canvas border, temporary*/;
//   Array to store how far from top each topic box starts
var topDown = [];
var medBrOHs = []; //Array to Store outer height of each medBrs[i]

for(var i = 0; i < count; i++) {
	var medBrs = [];
	medBrs[i] = document.createElement("div");
	medBrs[i].classList.add("subTopic", "topic");
	var txt = treeData.bigBr[1].medBr[i+1].name;
	var txtNode= document.createTextNode(txt);
	medBrs[i].appendChild(txtNode);
	$(medBrs[i]).appendTo('.wrap');

	//Store outer height of each medBrs[i]
	medBrOHs[i] = $(medBrs[i]).outerHeight(true)

	//store how far from top each topic box starts
	topDown[0] = topTpB + 20;
	if(i === count-1) {/*do nothing--avoids putting extra element in topDown array*/}
	else {topDown[i+1] = topDown[i] + medBrOHs[i] + gap;}


	$(medBrs[i]).css('top', topDown[i]).css('margin-left', lftIndt);
}