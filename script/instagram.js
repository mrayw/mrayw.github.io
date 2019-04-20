// https://www.instagram.com/developer/

var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=3506929506.44ba231.0359f88756f143eea78293f5a9dc9cc4";

$.ajax({
	url: url,
	success: function(result){

		var activeSrc = result.data[0].images.standard_resolution.url;
		var activeAlt = result.data[0].caption.text;
		var activeImgTag = "<img src='"+activeSrc+"' alt='"+activeAlt+"'>";
		$('.instagram')[0].innerHTML = activeImgTag;
	
	}
});

