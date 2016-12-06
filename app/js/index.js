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
	var canvas = document.createElement('canvas');
	canvas.width = v.videoWidth;
	canvas.height = v.videoHeight;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
	var img = canvas.toDataURL("image/png");

	var fragment = "<div class=\"no-margin-or-padding photo-thumbnail\"><a><img class=\"thumbnail\" style=\"background-image: url('" + img + "');\"></a></div>";
	var div = document.getElementById("photos-content");
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
}

// HTML
function resetCameraButtons() {
	$(document.getElementById("new")).show();
	$(document.getElementById("video")).hide();
	$(document.getElementById("snap")).hide();
	$(document.getElementById("switch")).hide();
}

/**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 

$(document).ready(function() {

    var table = $('#table');

    // Table bordered
    $('#table-bordered').change(function() {
        var value = $( this ).val();
        table.removeClass('table-bordered').addClass(value);
    });

    // Table striped
    $('#table-striped').change(function() {
        var value = $( this ).val();
        table.removeClass('table-striped').addClass(value);
    });
  
    // Table hover
    $('#table-hover').change(function() {
        var value = $( this ).val();
        table.removeClass('table-hover').addClass(value);
    });

    // Table color
    $('#table-color').change(function() {
        var value = $(this).val();
        table.removeClass(/^table-mc-/).addClass(value);
    });
});

// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

	jQuery.fn.removeClass = function( value ) {
		if ( value && typeof value.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					var classNames = elem.className.split( /\s+/ );

					for ( var n = classNames.length; n--; ) {
						if ( value.test(classNames[n]) ) {
							classNames.splice(n, 1);
						}
					}
					elem.className = jQuery.trim( classNames.join(" ") );
				}
			}
		} else {
			removeClass.call(this, value);
		}
		return this;
	}

})(jQuery.fn.removeClass);
*/
