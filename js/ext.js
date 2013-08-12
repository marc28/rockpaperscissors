
//document.ready is the most common

$(document).ready(function(){

	alert('Document is ready');

});

//Video 8 - load
$('#image').load(function(){

	alert('Image loaded');

});

$('#iframe').ready(function(){

	alert('iframe loaded');

});


//Video 9 - Window Load

$(window).load(function(){
	alert('iframe loaded');

});

//Video 10 - Window Unload - happens when you leave the page
$(window).unload(function() {

	alert('Your about to leave!!');
});
