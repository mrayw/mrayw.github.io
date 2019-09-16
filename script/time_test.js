var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
function getMonthName(month){
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return monthNames[month];
}
var day = date.getDate();
var returnDate = getMonthName(month)+" "+day+", "+year;
console.log(returnDate)