/*** First Topics Screen **/

function firstTpScreen(){
	// hide top topics
	$(".topTopic").hide();
	// hide sub topics if they exist
	if($(".subTopic")) {
		$(".subTopic").hide();
	}
	// wipe canvas clean
	wipeCanvas();

	//show topics on first topic screen
	$(".firstTpScreen").show();

	//below could be in its own function, only needs to run once.
	for(var i = 1; i < 5; i++) {
		var ftEle = document.getElementById("ft" + i);
		var down = i * 50 + "px";
		$(ftEle).css("top", down).text(treeData.bigBr[i].name);

		ftEle.addEventListener("click", ftClicked, false);
	}
	
}


/*** Header Topic ***/

// Make header topic. Shows top-level topic no matter how far drill down.
function headerTopic() {

	var txt = grandDad.name;
	txt = txt.toUpperCase();
	// split string into an array
	var arr = txt.split("");
	// turn array back to string, adding two spaces between each character
	txt = arr.join("&nbsp");
	$(".grandDadTopic").html(txt);

	// When header topic (grandDad topic) clicked, show STEM topics
	$(".grandDadTopic").on("click", grandDadClicked);
}


/*** Top Topic ***/

// Make top topic--from which middle topics immediately descend. It is located immediately above
// middle topics.
function topTopic() {
	var txt = treeDad.name;
	$(".topicTxt").text(txt);

	// Add event listener to top topic
	var topArr = document.getElementsByClassName("topTopic");
	var topTopicEl = topArr[0];
	topTopicEl.addEventListener("click", topTopicClicked, false);
}




//Makes middle topics, includes drawLines function.

function middleTopics() {
	//count number of branches under current treePos
	var count=0;
	for(var prop in treePos) {
		if(treePos.hasOwnProperty(prop)) {
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
		$(brs[i]).appendTo('.wrap1');
		console.log("middleTopics i: " + i);
		/* store branch location data.
		*  For gen:
		*  2 means smallest branch selected is a small branch,
		*  1 means smallest branch selected is a med branch,
		*  0 means smallest branch selected is a big branch (Science, Tech, Eng, or Math),
		*  -1 we haven't selected any branch
		*/
		var gen = brPointer.generation();
		brs[i].dataset.bigbr = bigNum;
		switch(gen) {
			case 0:
				brs[i].dataset.medbr = i + 1;
				break;
			case 1:
				brs[i].dataset.medbr = medNum;
				brs[i].dataset.smbr = i + 1;
				break;
			case 2:
				brs[i].dataset.medbr = medNum;
				brs[i].dataset.smbr = i + 1;
				// Show which small branch is selected
				if(i+1 == smNum) {$(brs[i]).toggleClass("selected");}
				break;
		}
		/*
		if(medNum !== 0) {
			brs[i].dataset.medbr = medNum;
			brs[i].dataset.smbr = i + 1;
		} else {
			brs[i].dataset.medbr = i + 1;
		}
		*/

		// add event listener
		brs[i].addEventListener("click", subTopicClicked/*function(){subTopicClicked()}*/, false);

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
			ctx.lineTo(startX, topDown[i] + 0.5 * brOHs[i]);
			ctx.lineTo(startX + lftIndtB, topDown[i] + 0.5 * brOHs[i])
			ctx.stroke();
		}
	}
}