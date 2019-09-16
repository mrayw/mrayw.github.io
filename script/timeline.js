
// TIMELINE SCROLL / DESCRIPTION BOX
//			SET DEFAULT STYLES
$('.desc-display')[0].innerHTML = $('.story-scroll li')[0].children[0].innerHTML;
$('.story-scroll li')[0].style.backgroundColor = "rgba(250,250,240,1)";
$('.story-scroll li')[0].style.paddingLeft = "25%";

// ON-CLICK, UPDATE TIMELINE TEXT AND CHANGE DATE STYLING
$('.story-scroll li').click(function(e) {
	var all = $('.story-scroll li');
	$.each(all, function() {
		this.style.backgroundColor = "rgba(240, 126, 113, 1)";
		this.style.paddingLeft = "10%";
	});
	
	e.target.style.backgroundColor = "rgba(250,250,240,1)";
	e.target.style.paddingLeft = "25%";
	e.target.style.transition = "all .5s";

	var newText = e.target.children[0].innerHTML;
	$('.desc-display')[0].innerHTML = newText;
});

// ON-TAP (TOUCH-END), UPDATE TIMELINE TEXT AND CHANGE DATE STYLING

$('.story-scroll li').on('touchend',function(e) {
	var all = $('.story-scroll li');
	$.each(all, function() {
		this.style.backgroundColor = "rgba(240, 126, 113, 1)";
		this.style.paddingLeft = "10%";
	});
	
	e.target.style.backgroundColor = "rgba(240, 126, 113, 1)";
	e.target.style.paddingLeft = "2%";
	e.target.style.transition = "all .5s";

	var newText = e.target.children[0].innerHTML;
	$('.desc-display')[0].innerHTML = newText;
});


