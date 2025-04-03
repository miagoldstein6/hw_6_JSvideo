var video;

window.addEventListener("load", function() {
	console.log("good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("played Video");
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("paused videeo");
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate*=0.9;
	console.log("new speed is " + video.playbackRate.toFixed(2)); 
	// used chatgpt to get the fixed decimal
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate/=0.9; 
	// need to divide by 0.9 because it is the reciprocal of multiplying by 0.9
	console.log("new speed is " + video.playbackRate.toFixed(2));
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;

	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("video restarted");
	} else {
		console.log("current video time: " + video.currentTime);
	}
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
		console.log("unmuted video");
	} else {
		video.muted = true;
		this.textContent = "Unmute";
		console.log("muted video");
	}
})

var volumeSlider = document.querySelector("#slider");
volumeSlider.addEventListener("input", function(){
	video.volume = volumeSlider.value / 100;

	var volumeDisplay = document.querySelector("#volume");
	volumeDisplay.textContent = volumeSlider.value + "%";

	console.log("volume set to: " + volumeSlider.value + "%");
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("old school syled");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log("original styled")
})