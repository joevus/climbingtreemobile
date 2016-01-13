//count number of branches under Science
var count=0;
for(var prop in treeData.bigBr[1].medBr) {
	if(treeData.bigBr[1].medBr.hasOwnProperty(prop)) {
		++count;
	}
}

//create topic boxes for med branches under Science
//	 variables we need

var topTpL = 10; //left position of topTopic. Set same as left margin
var gap = 30; //30 pixel vertical gap between topics
var lftIndtA = 15; //left-indent from top topic left-edge to start of vertical line
var lftIndtB = 10; //length of horizontal line from vertical line
var lftIndt = topTpL + lftIndtA + lftIndtB;
//   bottom position of topTopic. Top is zero, so add margins, border, padding iwht outerHeight
var topTpB = $(".topTopic").outerHeight(true) - 1 /*-1 for canvas border, temporary*/;
//Store how far from top each topic box starts
var topDown = [];

for(var i = 0; i < count; i++) {
	var medBrs = [];
	medBrs[i] = document.createElement("div");
	medBrs[i].classList.add("subTopic", "topic");
	var txt = treeData.bigBr[1].medBr[i+1].name;
	var txtNode= document.createTextNode(txt);
	medBrs[i].appendChild(txtNode);
	$(medBrs[i]).appendTo('.wrap');

	//outer height of preceeding topic box
	var previousHt;
	if(i > 0) {previousHt = $(medBrs[i]).outerHeight(true) - 1;} /*-1 for canvas border, temp*/
	else {previousHt = $(".topTopic").outerHeight(true) -1;} /*-1 for canvas border, temp*/
	console.log(previousHt);

	topDown[0] = topTpB + 20;
	topDown[i+1] = topDown[i] + $(medBrs[i]).outerHeight(true) + gap;

	$(medBrs[i]).css('top', topDown[i]).css('margin-left', lftIndt);
	console.log("topDown[" + i + "]: " + topDown[i]);
	console.log("outerHeight for i=" + i + ": " + $(medBrs[i]).outerHeight(true));
}