function subTopicClicked(ele) {
	/* When sub topic is clicked, query the branch locations and change brPointer accordingly.
	*  Changing brPointer will allow new sub topics and top topic to appear. Also carousel
	*  will change. 
	*  Parameter ele: refers to clicked element. */

	brPointer.bigNum = ele.dataset.bigBr;
	if(ele.dataset.medBr){
		brPointer.medNum = ele.dataset.medBr;
		if(ele.dataset.smBr) {
			brPointer.smNum = ele.dataset.smBr;
		} else {
			brPointer.smNum = "none";
		}
	} else {
		brPointer.medNum = "none";
		brPointer.smNum = "none";
	}

	// will need code after brPointer object is defined to rerun, turn it into a function and
	// invoke it here!

}