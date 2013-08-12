//Video 23/24 - Contains selector
$(document).ready(function() {
	$('#searchName').keyup(function(){
		searchName = $(this).val();

		//This makes sure when you delete anything from the box it stops the highlight
		$('#names li').removeClass('highlight');



		if(jQuery.trim(searchName) !=''){
		$("#names li:contains('" + searchName + "')").addClass('highlight');
			
		}
	});

});

//Video 25/26 - Basic form field selection
$(':text').focusin(function(){
	$(this).css('background-color','yellow'); //changes the box yellow

});

$(':text').blur(function(){ //blur is the opposite of focusin. When you click outside the box it kicks in
	$(this).css('background-color','white');

});

$(':button').click(function(){
	$(this).attr('value','Please wait ...');
	$(this).attr('disabled',true);	//disable button
});


//Video 27/28 Font Size Switcher
function change_size(element, size){
	var current = parseInt(element.css('font-size'));//finding and storing the currnet font-size
	//parseInt changes the font size from pixel to int
	if(size =='smaller'){
		var newSize = current-2;
	}
	else if(size =='bigger'){
		var newSize = current+2;
	}
	//now to change the elements to change. In this case its <p>
	element.css('font-size',newSize + 'px');

}


$('#smaller').click(function(){
	change_size($('p'),'smaller');


});
$('#bigger').click(function(){
	change_size($('p'),'bigger');

});

//Video 29 - Enable Submit button after file selected - Upload a file
$(document).ready(function(){
	$('#file').change(function(){
		value = $(this).attr('value');
		alert(value);

	});

});