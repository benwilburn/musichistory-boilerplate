'use strict';

$("#listMusic").on("click", function () {
    $("#listMusicView").show();
    $("#addMusicView").hide();
});

$("#addMusic").on("click", function () {
	$("#listMusicView").hide();
	$("#addMusicView").show();
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
