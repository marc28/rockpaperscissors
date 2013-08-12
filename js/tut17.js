//Video 17 - A selector example with CSS
/*$(':button').click(function () {
	
	$('p').css('background-color','black').css('color','white');
	//When the button is pressed, the background of <p> will change black and font white
});*/


///////////////////////////////////////////////////////////////
//Video 18 - Mulitple selectors - can add as many elements as you like
/*$('#button,#paragraph').click(function(){

	alert('Something was clicked');

});

			//Another example below
$('input:button, p,x,x,x,x,x,x ').click(function(){

	alert('Something was clicked');

});*/

///////////////////////////////////////////////////////////////
//Video 19 - This selector
//Below is the longer way to right the code, not using (this). 
//Have a look below this block of code 
/*$('#button2').click(function(){
	//alert('clicked');
	$('#button2').attr('value','Please wait . . .'); 	//.attr changes the value in the button

});*/

$('#button2').click(function(){
	//alert('clicked');
	$(this).attr('value','Please wait . . .'); 	//this picks on the current element so you dont need to keep referencing the same element

});

///////////////////////////////////////////////////////////////
//Video 20 - Even/Odd Selectors - .table tr:even or .table tr:odd
$('#changeTable').click(function(){ //or $('document').ready(function(){});

	$('.table tr:even').addClass('highlight'); //addClass() will use the 'highlight' class we created in our main.css'
	$('.table tr:odd').addClass('highlight2');
});

//Below is an example on other elements
$(document).ready(function(){ //or $('document').ready(function(){});

	$('#area p:odd').addClass('highlight'); //addClass() will use the 'highlight' class we created in our main.css'
	
});

///////////////////////////////////////////////////////////////
//Video 21 - Attribute Selectors - example will show all E-mail
$('document').ready(function(){
	var email = 'Enter your Email address ...';//text that apperas in the email bar	

	// Another example: $('a[href="www.facebook.com"]')
	$('input[type="email"]').attr('value',email).focus(function(){
		if($(this).val()== email){//want to get rid of contetn when start writing
			$(this).attr('value','');
		}
	}).blur(function(){
		if($(this).val()==''){
			$(this).attr('value',email);
		}

	});	//when user moves away from box
});



