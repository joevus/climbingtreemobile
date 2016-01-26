// a function to wipe the carousel and then load in a new set of slides
function loadCarousel(imgNames) {

imgNames = ["khanacademy"];
var imgSrc = "img/" + imgNames[0] + ".png";
var divItem = document.createElement("div");
var divContainer1 = document.createElement("div");
var divTitle = document.createElement("div");
var h2 = document.createElement("h2");
var img = document.createElement("img");
var divContainer2 = document.createElement("div");
//var divCaption = document.createElement("div");
var divFooter = document.createElement("div");
var para = document.createElement("p");

var slideNum = "first-slide"

$(divItem).addClass("item").appendTo(".carousel-inner");
$(divContainer1).addClass("container").appendTo(divItem);
$(divTitle).addClass("carousel-title").appendTo(divContainer1);
$(h2).appendTo(divTitle);
//make "first-slide" a variable
$(img).addClass(slideNum).attr("src", imgSrc).attr("alt", "slideNum").appendTo(divItem);
$(divContainer2).addClass("container").appendTo(divItem);
//left out carousel-caption
$(divFooter).addClass("carousel-footer").appendTo(divContainer2);
$(para).appendTo(divFooter);


}


// a function to get the image names based on brPointer and the data
// also need to get titles and descriptions of leaves!

function getImgNames() {
	var imgNames = [];
	var leafPlace = {};

	var gen = brPointer.generation();
	console.log("gen in carouselStuff: " + gen);
	// Special case if small branch selected (gen = 2). Use a layer deeper than normal: treePos,
	// instead of treeDad.
	if(gen == 2) {
		leafPlace = treePos;
	} else {
		// For when med or big branch is selected (gen = 0 or 1).
		leafPlace = treeDad;
	}
	//count number of leaves under current treeDad
	var count=0;
	for(var prop in leafPlace.leaf) {
		if(leafPlace.leaf.hasOwnProperty(prop)) {
			count++;
		}
	}	

	for(var i = 0; i < count; i++) {
		imgNames.push(leafPlace.leaf[i + 1].img);
	}

	return imgNames;
}