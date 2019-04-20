var position = 0;

// DEFAULT PHOTO IS FIRST PHOTO IN GALLERY

function updatePhoto() {
	var activeSrc = $('.gallery-images img')[position].attributes[0].nodeValue;
	var activeAlt = $('.gallery-images img')[position].attributes[1].value;
	var activeImgTag = "<img src='"+activeSrc+"' alt='"+activeAlt+"'>";
	$('.placeholder')[0].innerHTML = activeImgTag;
	$('.caption')[0].innerHTML = activeAlt;
}

updatePhoto(); //run function to set default image as first image in gallery



// PROCUCT GALLERY CONTROLS for cursor
$('.controls').click(function(e){

	var galleryLength = $('.gallery-images img').length -1;
	
	if (e.target.className == 'right-button') {
		if (position < galleryLength) {
			position += 1;	
		}
		else {
			position = 0;
		}
	}
	else {
		if (position <= galleryLength) {
			position -= 1;
		}
		if (position < 0) {
			position = galleryLength;
		}
	}
	updatePhoto();
});

// PROCUCT GALLERY CONTROLS for finger
$('.controls').on('touchend',function(e){

	var galleryLength = $('.gallery-images img').length -1;
	
	if (e.target.className == 'right-button') {
		if (position < galleryLength) {
			position += 1;	
		}
		else {
			position = 0;
		}
	}
	else {
		if (position <= galleryLength) {
			position -= 1;
		}
		if (position < 0) {
			position = galleryLength;
		}
	}
	updatePhoto();
});