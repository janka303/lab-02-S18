
function onWindowLoaded(event){
	// preload(); 
	var myButton = document.getElementById("myButton");
	myButton.addEventListener("click", onButtonClick);
	console.log("loaded"); 

	loadImages(images);

}

// var images = [
// "assets/0.jpg",
// "assets/1.jpg",
// "assets/2.jpg"
// ];

// function preload() {
// 	for (i = 0; i < images.length; i++) {
// 		images[i] = new Image();
// 		images[i].src = preload.arguments[i];
// 	}
// }
var images = [
	"assets/0.png",
	"assets/1.png",
	"assets/2.jpg",
	"assets/3.jpg",
];

function loadImages(imgArr, targetId){
    for(var i=0; i< imgArr.length; i++) {
        console.log(imgArr[i]);
        var img = new Image();
            img.src = imgArr[i];
        // document.getElementById('output').appendChild(img);
    }
}


function onButtonClick(event){
	//update the value of our dice roll
	if(!diceRollElement){
		createdDiceElement();
	} 
	updateDiceValue(); 
}
var diceRollElement; 

function createdDiceElement(){
	diceRollElement = document.createElement("img");
	diceRollElement.style.color = "blue"; 
	diceRollElement.style.fontSize = "24px"; 
	document.body.appendChild(diceRollElement); 
}

function updateDiceValue(){
	var diceRollValue = Math.random()*6;
	diceRollValue = Math.floor(diceRollValue); 
	// diceRollValue ++; 

	for(var i = 1; i<4; i++){
		diceRollElement.src = images[diceRollValue]; 
	}
	// if(diceRollValue === 1 || diceRollValue=== 4){
	// 	diceRollElement.src = images[0];  
	// }else{
	// 	diceRollElement.src = images[1];  
	// }
}

window.addEventListener("load", onWindowLoaded);