function ftClicked() {
	var ele = this;
	// num is x in #ftx. 1 = science, 2 = technology, 3 = engineering, 4 = math
	var num = ele.id[2];

	$(".firstTpScreen").hide();
	$(".topTopic").show();

	// set pointer
	brPointer.bigNum = num;
	console.log("num: " + num);
	console.log("brPointer.bigNum: " + brPointer.bigNum);

	// run topics
	runPointers();
	headerTopic();
	topTopic();
	middleTopics();
	//load up carousel
	var slideData = getLeafData();
	loadCarousel(slideData);
}

function grandDadClicked() {
	var ele = this;
	// bring up STEM topics
	firstTpScreen();
}

function topTopicClicked() {
	var ele = this;
	var gen = brPointer.generation();

	switch (gen) {
		case 0:
			break;
		case 1:
			brPointer.medNum = "none";
			break;
		case 2:
			brPointer.smNum = "none";

	}

	//wipe canvas clean
	var canvas = document.getElementById('board');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0,0, canvas.width, canvas.height);

	// remove sub topic boxes
	$('.subTopic').remove();

	// refresh topics
	runPointers();
	headerTopic();
	topTopic();
	middleTopics();
	//load up carousel
	var slideData = getLeafData();
	loadCarousel(slideData);
}

function subTopicClicked() {
	/* When sub topic is clicked, query the branch locations and change brPointer accordingly.
	*  Changing brPointer will allow new sub topics and top topic to appear. Also carousel
	*  will change. 
	*  Parameter ele: refers to clicked element. */

	var ele = this;
	brPointer.bigNum = ele.dataset.bigbr;
	if(ele.dataset.medbr){
		console.log("inside if(ele.dataset.medbr)");
		brPointer.medNum = ele.dataset.medbr;
		if(ele.dataset.smbr) {
			/* if we select the same small branch that's already selected, deselect it and
			go back to the med branch. Gen will be 1 instead of 2 now. */
			if(ele.dataset.smbr == smNum) {
				brPointer.smNum = "none";
			} else {
			/* otherwise select it, set smNum to it. Gen will be 2.*/
				brPointer.smNum = ele.dataset.smbr;
			}
		} else {
			brPointer.smNum = "none";
		}
	} else {
		brPointer.medNum = "none";
		brPointer.smNum = "none";
	}

	//wipe canvas clean
	wipeCanvas();

	// remove sub topic boxes
	$('.subTopic').remove();

	// refresh topics
	runPointers();
	headerTopic();
	topTopic();
	middleTopics();
	//load up carousel
	var slideData = getLeafData();
	loadCarousel(slideData);
}

function wipeCanvas(){
	//wipe canvas clean
	var canvas = document.getElementById('board');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0,0, canvas.width, canvas.height);
}