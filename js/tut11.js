//Video 11
//var count = $('*').length;
//alert(count);


////////////////////////////////////////////////////////////////////
//video 12 - selecting certain eleements
/*var count = $('#area').find('*').length;
alert(count);

var count = $('#area').find('p').length; //selecting just a paragraph
alert(count);*/


////////////////////////////////////////////////////////////////////
//Video 13 - ID Selector
/*var name = $('#name').val();	//val= value of what in the box!!
alert(name);

var text = $('#text').text();	//text= Takes the text from inside the paragraph!!
alert(text);

var button = $('#button').click(function(){

	alert("Marc Grogan");

});	//click = When the button has been clicked!!*/


////////////////////////////////////////////////////////////////////
//Video 14 - Element Selector - <p> is an example of an element

/*$('p').text('Hello'); //.text puts actaul text inside the element. In this case the element is p.
						//it could another element like img or span

//we can atually select which paragraph we want by using ':'
$('p:first').text('First Paragraph');
$('#two').text('Second Paragraph');
$('p:last').text('Third Paragraph');
$('span').text('this is a span');*/

////////////////////////////////////////////////////////////////////
//Video 15 - Submit Selector
$(':button').click(function(){ //:button selects all buttons
	alert('hello');

});

/*$(':submit').click(function(){ //:button selects all buttons
	alert('This is a submit button!!');

});*/

					////////////////////
/*$(':submit').click(function(){ //:button selects all buttons
	$(':submit').attr('value','Please wait'); //attr = attribute of the function

});*/	//but what if you only want to chane one button's value??
$(':submit').click(function(){ //:button selects all buttons
	$(this).attr('value','Please wait'); //attr = attribute of the function

});

////////////////////////////////////////////////////////////////////
//Video 16 - Text Selector - Selects all input types with value text
$(':text').focusin(function() { //focusin means a text box will keep appearing 
	$(this).css('background-color', 'yellow'); //changes the colour of the text box to yellow
});

$(':text').blur(function() { //.blur changes it to red when you click out
	$(this).css('background-color', 'red'); //changes the colour of the text box to yellow
});

////////////////////////////////////////////////////////////////////
//Video 17 - A Selector example with CSS

