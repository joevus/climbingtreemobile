//brPointer points to current branch
var brPointer = {
	granddad: 1, //bigbr of current branch
	dad: "none", //medbr of current branch.
	kid: "none" //current branch
};

brPointer.generation = function() {
	//2 means we're at kid, 1 means we're at dad, 0 we're at granddad
	if(this.kid !== "none") {
		return 2;
	} else (this.dad !== "none") {
		return 1;
	} else {
		return 0;
	}
};