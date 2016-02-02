// a function to wipe the carousel and then load in a new set of slides
function loadCarousel(slideData) {
	//clear out carousel slides
	$(".carousel-inner").empty();

	for( var i = 0; i < slideData.length; i++) {
		var leaf = slideData[i];
		var imgSrc = "img/" + leaf.img + ".PNG";
		var divItem = document.createElement("div");
		var divContainer1 = document.createElement("div");
		var divTitle = document.createElement("div");
		var h2 = document.createElement("h2");
		var img = document.createElement("img");
		//var divCaption = document.createElement("div");
		var divFooter = document.createElement("div");
		var para = document.createElement("p");

		//var slideNum = "first-slide";

		$(divItem).addClass("item").appendTo(".carousel-inner");
		if(i==0){$(divItem).addClass("active");}
		//$(divContainer1).addClass("container").appendTo(divItem);
		//$(divTitle).addClass("carousel-title").appendTo(divContainer1);
		$(divTitle).addClass("carousel-title").appendTo(divItem);
		$(h2).html(leaf.siteTitle).appendTo(divTitle);
		//used to have the variable slideNum added as a class. May help in future?
		$(img).addClass("slideImg").attr("src", imgSrc).attr("alt", "slideNum").appendTo(divItem);
		//left out carousel-caption
		$(divFooter).addClass("carousel-footer").appendTo(divItem);
		$(para).html(leaf.descrip).appendTo(divFooter);
	}

}


// a function to get the image names based on brPointer and the data
// also need to get titles and descriptions of leaves!

function getLeafData() {
	var slideData = [];
	var leafPlace = {};

	var gen = brPointer.generation();
	// Special case if small branch selected (gen = 2). Use a layer deeper than normal: treePos,
	// instead of treeDad.
	if(gen == 2) {
		leafPlace = treePos[smNum];
	} else if(gen == 0 || gen == 1) {
		// For when med or big branch is selected (gen = 0 or 1).
		leafPlace = treeDad;
	} else {
		//when gen == -1
		leafPlace = treeData.featured;
	}
	//count number of leaves under current treeDad
	var count=0;
	for(var prop in leafPlace.leaf) {
		if(leafPlace.leaf.hasOwnProperty(prop)) {
			count++;
		}
	}	

	for(var i = 0; i < count; i++) {
		var leaf = leafPlace.leaf[i+1];
		var leafData = {};
		leafData.siteTitle = leaf.siteTitle;
		leafData.url = leaf.url;
		leafData.img = leaf.img;
		leafData.descrip = leaf.descrip;
		slideData.push(leafData);
	}
	console.log("slideData[0].descrip " + slideData[0].descrip);
	return slideData;

}