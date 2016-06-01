'use strict';
var container = document.getElementById("listMusicView");
var userInput = document.getElementById("addMusicView");

document.getElementById("listMusic").addEventListener("click", function () {
    userInput.classList.add("displayNone");
    container.classList.remove("displayNone");
});

document.getElementById("addMusic").addEventListener("click", function () {
	container.classList.add("displayNone");
	userInput.classList.remove("displayNone");
});






// THIS FUNCTION DOESNT WORK BUT IT HELPED ME WRITE THE CALLBACK FUNCTIONS
// function toggleDiv () {
//   if (musicList.clicked == true) {
//   	userInput.classList.add("displayNone");
//   	container.classList.remove("displayNone");
//   } else if (musicAdd.clicked == true){
//     container.classList.add("displayNone");
//     userInput.classList.remove("displayNone");
//   } else {
//   	userInput.classList.add("displayNone");
//   }
// }
