'use strict';

//////////////////// ORIGINAL PAGE POPULATION FUNCTIONALITY ////////////////////////
$.ajax({
  url: "jsons/songs.json"
}).done((data) => {
	populateContainer(data);
});


let containerContent = "";

function populateContainer(data) {
	for(let songNumberName in data.songs){
		let song = data.songs[songNumberName];
		let songName = song.name.replace(/[^-\|\w\s\&]/gi, "");
		let songArtist = song.artist.replace(/[^-\|\w\s\&]/gi, "");
		let songAlbum = song.album.replace(/[^-\|\w\s\&]/gi, "");
		containerContent += `<div class="row songcolor">${songName} | <strong>${songArtist}</strong> | ${songAlbum} <button class="delete btn btn-danger" type="button">Delete</button></div>`;
	}

	containerContent += `<div><button type="button" id="more" class="btn btn-default">More</button></div>`;



	$("#musicContent").html(containerContent);

	$(".delete").on("click", () => {
		event.target.closest(".row").remove();
	});




/////////////////// ADD SONG FUNCTIONALITY ////////////////////
	$("#addSong").on("click", () => {
		let song = $("#song").val();
		let artist = $("#artist").val();
		let album = $("#album").val();
		$("#more").remove();
		$("#musicContent").append(`<div class="row songcolor"> ${song} | <strong>${artist}</strong> | ${album} <button class="delete btn btn-danger" type="button">Delete</button><div><div><button type="button" id="more" class="btn btn-default">More</button></div>`);
		$("#addMusicView").hide();
		$("#listMusicView").show();
		$("#add").toggleClass("active");
		$("#list").toggleClass("active");

		$(".delete").on("click", () => {
			event.target.closest(".row").remove();
		});


			$("#more").on("click", () => {
		$("#more").closest("div").remove();
		$.ajax({
			url: "jsons/moreSongs.json"
		}).done((data) => {
			console.log(data);
			repopulateContainer(data);
			$(".delete").on("click", () => {
				event.target.closest(".row").remove();
			});
		});
	});
	});







/////////////////////// MORE BUTTON FUNCTIONALITY /////////////////////////
	$("#more").on("click", () => {
		$("#more").closest("div").remove();
		$.ajax({
			url: "jsons/moreSongs.json"
		}).done((data) => {
			repopulateContainer(data);
			$(".delete").on("click", () => {
				event.target.closest(".row").remove();
			});
		});
	});

	function repopulateContainer(data) {
		let moreSongsContent = "";
		for(let songNumberName2 in data.songs){
			let song2 = data.songs[songNumberName2];
			console.log("song2", song2);
			let songName2 = song2.name.replace(/[^-\|\w\s\&]/gi, "");
			console.log("songName2", songName2);
			let songArtist2 = song2.artist.replace(/[^-\|\w\s\&]/gi, "");
			console.log("songArtist2", songArtist2);
			let songAlbum2 = song2.album.replace(/[^-\|\w\s\&]/gi, "");
			console.log("songAlbum2", songAlbum2);
			moreSongsContent += `<div class="row songcolor">${songName2} | <strong>${songArtist2}</strong> | ${songAlbum2} <button class="delete btn btn-danger" type="button">Delete</button></div>`;
		}

		moreSongsContent += `<div><button type="button" id="more" class="btn btn-default">More</button></div>`;
		$("#musicContent").append(moreSongsContent);

		$(".delete").on("click", () => {
			event.target.closest(".row").remove();
		});
	}

}




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
