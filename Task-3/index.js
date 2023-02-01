const video = document.getElementById('video');
const timer = document.getElementById('video-timer');

video.addEventListener('click', function () {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
});

video.addEventListener('timeupdate', function () {
	const minutes = Math.floor(video.currentTime / 60);
	const seconds = Math.floor(video.currentTime % 60);
	const milliseconds = Math.floor(video.currentTime * 1000) % 1000;

	timer.innerHTML =
		`${minutes < 10 ? '0' + minutes : minutes}:` +
		`${seconds < 10 ? '0' + seconds : seconds}:` +
		`${milliseconds < 100 ? '0' + milliseconds : milliseconds < 1000 ? milliseconds : '999'}`;
});

video.addEventListener('ended', function () {
	video.currentTime = 0;
	video.pause();
});
