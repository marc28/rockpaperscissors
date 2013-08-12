
//31 Click JQuery. Click is an EventHandler -  to hide a paragraph
$('#hideMessage').click(function(){
	$('#message,#hideA').fadeOut(800); //hides the link and paragraph
	//$('#message').hide();

});

$('#hideDivs').click(function(){
	$('div').fadeOut(500);

});


////////////////////////////////////////////////////////////////////
//32 - Double Click - Double click on an image to open it up is an example
$('#menuLink').dblclick(function(){
	$('#menu').show();
});


////////////////////////////////////////////////////////////////////
//33 - Key up/down
$('#userText').keyup(function(){
	//alert('key down');
	var user_text = $('#userText').val();
	$('#userTextFeedback').html(user_text);
});


////////////////////////////////////////////////////////////////////
//34 - Change
$('#list').change(function(){
	var list_value = $('#list').val();
	$('#list_feedback').html('You have selected ' + list_value);
});


////////////////////////////////////////////////////////////////////
//35 - Submit Event Handler
$('#signup_form').submit(function(){
	var user_email = $('#user_email').val();
	$('#signup_feedback').html('Thanks, ' + user_email + ' has been signed up');

});


////////////////////////////////////////////////////////////////////
//36 - Toggle Event Handler - shows us something then reverts back to the first
$('#click_me').toggle(function() {	
	$('#click_event').html('Yes');

}, function(){
	$('#click_event').html('No');

});


////////////////////////////////////////////////////////////////////
//37 - Hover Event handler
$('#menu_videos').hover(function(){
	$('#menu_feedback').html('Free Video Tutorials');

});
$('#menu_code').hover(function(){
	$('#menu_feedback').html('Free Code Tutorials');

});
$('#menu_forum').hover(function(){
	$('#menu_feedback').html('Free Forum Tutorials');

});


////////////////////////////////////////////////////////////////////
//38 - Scroll Event handler - tells you where you are in the scroll box
$('#some_text').scroll(function(){
	var scroll_pos = $('#some_text').scrollTop();
	$('#some_feedback').html('You have scrolled and are at position ' + scroll_pos);

});

////////////////////////////////////////////////////////////////////
//39 - Select Event handler
/*$('#some_text_select').select(function(){
	$('#some_feedback_span').html('Something has been selected');

});*/
$('#some_text_select').select(function(){	
	var selected_text =﻿ document.getSelection().toString(); 
	$('#some_feedback_span').html('You have selected->' + selected_text);
});

////////////////////////////////////////////////////////////////////
//40 - Focusin Event handler

