function subTopicClicked() {
	/* When sub topic is clicked, query the branch locations and change brPointer accordingly.
	*  Changing brPointer will allow new sub topics and top topic to appear. Also carousel
	*  will change. 
	*  Parameter ele: refers to clicked element. */

	var ele = this;
	brPointer.bigNum = ele.dataset.bigbr;
	if(ele.dataset.medbr){
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

}