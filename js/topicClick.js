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
			brPointer.smNum = ele.dataset.smbr;
		} else {
			brPointer.smNum = "none";
		}
	} else {
		brPointer.medNum = "none";
		brPointer.smNum = "none";
	}

	// will need code after brPointer object is defined to rerun, turn it into a function and
	// invoke it here!

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
}