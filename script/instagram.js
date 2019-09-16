// https://www.instagram.com/developer/

var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=3506929506.44ba231.0359f88756f143eea78293f5a9dc9cc4";

$.ajax({
	url: url,
	success: function(result){
		console.log(result)
		var activeSrc = result.data[0].images.standard_resolution.url;
		var activeAlt = result.data[0].caption.text || "No caption provided. An image from the Tracklements instagram account";
		var activeCaption = result.data[0].caption.text || "Stop by the shop. We would love to see you!";

		var time = result.data[0].caption.created_time;
		var date = new Date(time*1000);
		var year = date.getFullYear();
		var month = date.getMonth();
		function getMonthName(month){
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			return monthNames[month];
			}
		var day = date.getDate();
		var returnDate = getMonthName(month)+" "+day+", "+year;
	
		var activeImgTag = "<img src='"+activeSrc+"' alt='"+activeAlt+"'><p class='lead-quote' id='instagram-caption'>"+activeCaption+"</p><p id='instagram-timestamp'>updated "+returnDate+"</p>";
		$('.instagram')[0].innerHTML = activeImgTag;		

	}
});

