var videoSources = [];
var selectedVideoSourceIndex = null;
var context = null;
var video = null;
var cameraSetup = false;
var photos = [];
var entries = [];

// Camera
function sortOutSources() {
	MediaStreamTrack.getSources(function (sourceInfos) {
		for (var i = 0; i != sourceInfos.length; ++i) {
			var sourceInfo = sourceInfos[i];
			if (sourceInfo.kind === 'video') {
				videoSources.push(sourceInfo.id);
			}
		}
	});
}

sortOutSources();

function setupCamera() {
	// Grab elements, create settings, etc.
	video = document.getElementById("video");
	var videoObj = {
		video: { optional: [{ sourceId: videoSources[selectedVideoSourceIndex] }] }
	};

	var errBack = function (error) {
		console.log("Video capture error: ", error.code);
	};

	// Put video listeners into place
	if (navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoObj, function (stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoObj, function (stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	else if (navigator.mozGetUserMedia) { // Firefox-prefixed
		navigator.mozGetUserMedia(videoObj, function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
}

function cycleCameras() {
	selectedVideoSourceIndex++;
	if (selectedVideoSourceIndex === videoSources.length) {
		selectedVideoSourceIndex = 0;
	}
	setupCamera();
}

function takePhoto() {
	resetCameraButtons();

	var v = document.getElementById("video");
        var v2 = document.getElementById("video2");
        var v3 = document.getElementById("video3");
        var v4 = document.getElementById("video4");
        var v5 = document.getElementById("video5");
        var v6 = document.getElementById("video6");
        var v7 = document.getElementById("video7");
	var canvas = document.createElement('canvas');
	canvas.width = v.videoWidth;
        canvas.width = v2.videoWidth;
        canvas.width = v3.videoWidth;
        canvas.width = v4.videoWidth;
        canvas.width = v5.videoWidth;
        canvas.width = v6.videoWidth;
        canvas.width = v7.videoWidth;
	canvas.height = v.videoHeight;
        canvas.height = v2.videoHeight;
        canvas.height = v3.videoHeight;
        canvas.height = v4.videoHeight;
        canvas.height = v5.videoHeight;
        canvas.height = v6.videoHeight;
        canvas.height = v7.videoHeight;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(v2, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(v3, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(v4, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(v5, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(v6, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(v7, 0, 0, canvas.width, canvas.height);
	var img = canvas.toDataURL("image/png");

	var fragment = "<div class=\"no-margin-or-padding photo-thumbnail\"><a><img class=\"thumbnail\" style=\"background-image: url('" + img + "');\"></a></div>";
	var div = document.getElementById("photos-content");
        var div = document.getElementById("photos-content2");
        var div = document.getElementById("photos-content3");
        var div = document.getElementById("photos-content4");
        var div = document.getElementById("photos-content5");
        var div = document.getElementById("photos-content6");
        var div = document.getElementById("photos-content7");
	div.innerHTML = div.innerHTML + fragment;

	photos.push(img.replace(/^data:image\/(png|jpg);base64,/, ""));
}

function openCamera() {
	if (!cameraSetup) {
		selectedVideoSourceIndex = videoSources.length - 1;
		setupCamera();
		cameraSetup = true;
	}
	$(document.getElementById("new")).hide();
	$(document.getElementById("video")).show();
	$(document.getElementById("snap")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch")).show();
	}
        	$(document.getElementById("new2")).hide();
	$(document.getElementById("video2")).show();
	$(document.getElementById("snap2")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch2")).show();
	}
        	$(document.getElementById("new3")).hide();
	$(document.getElementById("video3")).show();
	$(document.getElementById("snap3")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch3")).show();
	}
        	$(document.getElementById("new4")).hide();
	$(document.getElementById("video4")).show();
	$(document.getElementById("snap4")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch4")).show();
	}
        	$(document.getElementById("new5")).hide();
	$(document.getElementById("video5")).show();
	$(document.getElementById("snap5")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch5")).show();
	}
        	$(document.getElementById("new6")).hide();
	$(document.getElementById("video6")).show();
	$(document.getElementById("snap6")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch6")).show();
	}
        	$(document.getElementById("new7")).hide();
	$(document.getElementById("video7")).show();
	$(document.getElementById("snap7")).show();
	if (videoSources.length > 1) {
		$(document.getElementById("switch7")).show();
	}
}

// HTML
function resetCameraButtons() {
	$(document.getElementById("new")).show();
	$(document.getElementById("video")).hide();
	$(document.getElementById("snap")).hide();
	$(document.getElementById("switch")).hide();
        	$(document.getElementById("new2")).show();
	$(document.getElementById("video2")).hide();
	$(document.getElementById("snap2")).hide();
	$(document.getElementById("switch2")).hide();
        	$(document.getElementById("new3")).show();
	$(document.getElementById("video3")).hide();
	$(document.getElementById("snap3")).hide();
	$(document.getElementById("switch3")).hide();
        	$(document.getElementById("new4")).show();
	$(document.getElementById("video4")).hide();
	$(document.getElementById("snap4")).hide();
	$(document.getElementById("switch4")).hide();
        	$(document.getElementById("new5")).show();
	$(document.getElementById("video5")).hide();
	$(document.getElementById("snap5")).hide();
	$(document.getElementById("switch5")).hide();
        	$(document.getElementById("new6")).show();
	$(document.getElementById("video6")).hide();
	$(document.getElementById("snap6")).hide();
	$(document.getElementById("switch6")).hide();
        	$(document.getElementById("new7")).show();
	$(document.getElementById("video7")).hide();
	$(document.getElementById("snap7")).hide();
	$(document.getElementById("switch7")).hide();
}


