//brPointer points to current branch
var brPointer = {
	//options: "none" or number
	bigNum: "none", //track which big branch we're on.
	medNum: "none", //track which med branch we're on.
	smNum: "none" //track which small branch we're on.
};

brPointer.generation = function() {
	//2 means smallest branch selected is a small branch,
	//1 means smallest branch selected is a med branch,
	//0 means smallest branch selected is a big branch (Science, Tech, Eng, or Math),
	//-1 we're haven't selected any branch
	if(this.smNum !== "none") {
		return 2;
	} else if(this.medNum !== "none") {
		return 1;
	} else if(this.bigNum !== "none") {
		return 0;
	} else if(this.bigNum == "none") {
		return -1;
	}
};

/* Determine where pointer is. If Pointer is "none" on granddad, make STEM topics appear.
*  If pointer is on grandad, make med branch topics appear. If pointer is on dad, make small
*  branch topics appear. If pointer is on kid, perhaps leave that topic highlighted and keep
*  small branch topics there.
*/

/* topics.js depends on which level of treeData we're on. Make a variable that stores the object
*  at the current level of treeData. This can be indicated by brPointer.generation(). Once that
*  is done, we can run the loop to get a value for count and we can use the object and run it in
*  a loop with the limit being count and add topics with that object[i+1].name. Will add subTopic
*  and topic classes to all these.
* 
*  Will need to make the medBrOHs array into a more generic name. Same array should work for
*  different levels, because we're making the topics appear the same.
*/

// Variables outside of functions
var treePos = {};
var treeDad = {};
var grandDad = {};
var bigNum = 0;
var medNum = 0;
var smNum = 0;

function runPointers(){
	var gen = brPointer.generation();

	switch(gen){
		case -1:
			// no topic selected, show Science, Technology, Engineering, Math
			break;
		case 0:
			bigNum = brPointer.bigNum;
			console.log("brPointer.bigNum: " + brPointer.bigNum);
			medNum = 0;
			smNum = 0;
			grandDad = treeData.bigBr[bigNum];
			treeDad = treeData.bigBr[bigNum];
			treePos = treeDad.medBr;
			
			break;
		case 1:
			bigNum = brPointer.bigNum;
			medNum = brPointer.medNum;
			smNum = 0;
			grandDad = treeData.bigBr[bigNum];
			treeDad = treeData.bigBr[bigNum].medBr[medNum];
			treePos = treeDad.smBr;
			break;
		case 2:
			bigNum = brPointer.bigNum;
			medNum = brPointer.medNum;
			smNum = brPointer.smNum;
			grandDad = treeData.bigBr[bigNum];
			treeDad = treeData.bigBr[bigNum].medBr[medNum];
			treePos = treeDad.smBr;
			// Add something here for highlighting the smBr we're on.
			break;
	}

	console.log("medNum: " + medNum);
}

/* Make this process into a function.
*  Make a different process for when the brPointer.generation() returns -1 (or
*  granddad == "none"). Then make a switch statement where the different cases are
*  different return values of brPointer.generation(). Run different parameters of the topics.js
*  function depending on where in the treeData we're in and run a different function when
*  brPointer.generation() returns -1.
*  These functions determine what shows up in the bottom topic area. Top of the topic area
*  may be determined by another function or by modifying these functions.
*/