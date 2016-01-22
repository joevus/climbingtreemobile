// Make header topic. Shows top-level topic no matter how far drill down.
function headerTopic() {
	
}


// Make top topic--from which middle topics immediately descend. It is located immediately above
// middle topics.
function topTopic() {
	var txt = treeDad.name;
	console.log("treePos in topTopic: " + treePos);
	console.log("txt in topTopic: " + txt);
	$(".topTopic").html(txt);
}


//Makes middle topics, includes drawLines function.

function middleTopics() {
	//count number of branches under Science
	var count=0;
	for(var prop in treePos) {
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

	//draw lines connecting topics on canvas.
	drawLines();



	/***					---	FUNCTIONS ---							***/



	//** Calculate points for topic lines
	function drawLines(){
		//Get canvas context
		var canvas = document.getElementById('board');
		var ctx = canvas.getContext('2d');

		//starting point
		var startX;
		var startY = topTpB;

		//line endpoints
			//every time, the line turns at topDown[i] + .5*brOHs[i]
		for(var i = 0; i < topDown.length; i++) {
			ctx.beginPath();
			if(i === 0) {
				//startX starts out using lftIndtA1
				startX = topTpL + lftIndtA1;
				ctx.moveTo(startX,startY);
			}
			else if(i <= 3 || i > 4) {
				ctx.moveTo(startX,topDown[i-1] + 0.5 * brOHs[i-1]);
			}
			else if(i === 4) {
				//startX shifts to right column when i = 4
				startX = topTpL + lftIndtA2;
				ctx.moveTo(startX, startY);
			}
			console.log("y line to: " + (topDown[i] + 0.5 * brOHs[i]));
			ctx.lineTo(startX, topDown[i] + 0.5 * brOHs[i]);
			ctx.lineTo(startX + lftIndtB, topDown[i] + 0.5 * brOHs[i])
			ctx.stroke();
		}
	}
}