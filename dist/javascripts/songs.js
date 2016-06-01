'use strict';



$.ajax({
  url: "jsons/songs.json"
}).done((data) => {
	populateContainer(data);
});



function populateContainer(data) {
	let containerContent = "";
	for(let songNumberName in data.songs){
		let song = data.songs[songNumberName];
		let songName = song.name.replace(/[^-\|\w\s\&]/gi, "");
		let songArtist = song.artist.replace(/[^-\|\w\s\&]/gi, "");
		let songAlbum = song.album.replace(/[^-\|\w\s\&]/gi, "");
		containerContent += `<div class="row">${songName} | <strong>${songArtist}</strong> | ${songAlbum} <button class="delete btn btn-danger" type="button">Delete</button></div>`;
	}



	$("#container").html(containerContent);

	$(".delete").on("click", () => {
		event.target.closest(".row").remove();

	});

	$("#addSong").on("click", () => {
		localSongObject.newSong
		let containerContent = "";
		let song = $("#song").val();
		let artist = $("#artist").val();
		let album = $("#album").val();
		$("#container").append(`<div class="row"> ${song} | <strong>${artist}</strong> | ${album} <button class="delete btn btn-danger" type="button">Delete</button><div>`);
		$("#addMusicView").hide();
		$("#listMusicView").show();
	});
}

let localSongObject = {};





// // Each student must add one song to the beginning and the end of the array.
// // Loop over the array and remove any words or characters that obviously don't belong.
// // Students must find and replace the > character in each item with a - character.
// // Must add each string to the DOM in index.html in the main content area.

// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Back In Black > by ACDC on the album Back In Black");
// songs.push("Little Red Corvette > by Price on the album 1999");

// var content = document.getElementById("container");

// songs = songs.map(function(cleaner) {
//   cleaner = cleaner.replace("by", "");
//   cleaner = cleaner.replace(">", "|");
//   cleaner = cleaner.replace("on the album", "|");
//   cleaner = cleaner.replace(/[^-\|\w\s]/gi, "");
//   return cleaner;
// });

// for (var i = 0; i < songs.length; i++) {
// 	var newSongs = songs[i];
// 	content.innerHTML +=  '<div class="songname"><p class="songcolor">' + newSongs + '</p></div>';
// }
