//count number of branches under Science
var count=0;
for(var prop in treeData.bigBr[brPointer.granddad].medBr) {
	if(treeData.bigBr[1].medBr.hasOwnProperty(prop)) {
		++count;
	}
}

//** Topic boxes under Science **

//variables we need
var topTpL = 10; //left position of topTopic. Set same as left margin
var gap = 20; //30 px vertical gap between bottom of previous subtopic and top of next subtopic
var lftIndtA1 = 15; //left-indent from top topic left-edge to start of vertical line
var lftIndtA2 = 190; //left-indent for sub topics in 2nd column
var lftIndtB = 10; //length of horizontal line from vertical line
var lftIndt = topTpL + lftIndtA1 + lftIndtB;
//   bottom position of topTopic. Top is zero, so add margins, border, padding iwht outerHeight
var topTpB = $(".topTopic").outerHeight(true) - 1 /*-1 for canvas border, temporary*/;
//   Array to store how far from top each topic box starts
var topDown = [];
var brOHs = []; //Array to Store outer height of brs[i]

for(var i = 0; i < count; i++) {
	var brs = [];
	brs[i] = document.createElement("div");
	brs[i].classList.add("subTopic", "topic");
	var txt = treePos[i+1].name;
	var txtNode= document.createTextNode(txt);
	brs[i].appendChild(txtNode);
	$(brs[i]).appendTo('.wrap');

	//Store outer height of each brs[i]
	brOHs[i] = $(brs[i]).outerHeight(true)

	//store how far from top each topic box starts
	topDown[0] = topTpB + 20;
	if(i === count-1) {/*do nothing--avoids putting extra element in topDown array*/}
	//when i is 4 reset topDown[5] to same as topDown[0].
	else if(i === 3) {topDown[i+1] = topDown[0]}
	else {topDown[i+1] = topDown[i] + brOHs[i] + gap; }

	//lftIndt shifts to right colum when i > 3
	if(i > 3){lftIndt = topTpL + lftIndtA2 + lftIndtB}
	$(brs[i]).css('top', topDown[i]).css('margin-left', lftIndt);
	console.log("lftIndt: " + lftIndt + ", when i = " + i)
}