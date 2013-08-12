
/*$(document).ready(function(){

	alert()
});*/

$('#start').click(function(){

	start();

});

function start () {
	alert('Welcome to the game. You will be supplied with a hint, after the hint you must guess which county. Ready??');
}

$('#button').click(function(){
	//alert('working');
	
	//alert(fillHashmap());// - working
	//alert(answer ()); 
	
	
	/*if(answer()===check) //working
	{
		alert('Brill');
	}
	else
	{
		alert('wrong');
	}
	/*me=dublin();
	no = giveHints(me);
	alert(no);*/

	//alert(giveHints(dublin()));-working
	check=fillHashmap(); //working
	if(check==='dublin')
	{
		giveHints(dublin());
	}

	});


/*function welcomeMessage () {
	document.write('Welcome to: Where in Ireland am I??');
	document.write('I am going to give you 5 hints to guess where I am');
	document.write('The less hints I give you, the higher the points you will score');
	document.write('Ok, lets begin');
}*/

function fillHashmap () {

	var map ={}	//hahmap
	map[0] = 'dublin';
	//map[1] = 'cork';
	//map[2] = 'mayo';
	//map[3] = 'galway';
	var random = Math.floor((Math.random()*0.9)+0);

	return map[random];
}


function answer () {
	answer = $('#answer').val();
	return answer;
}


function dublin () {
	 hint1='Hint 1: Its a city on the coast';
	 hint2='Hint 2: The river Liffey flows enters the sea';
	 hint3='Hint 3: Molly Malone';

	clues =[hint1, hint2, hint3];

	return clues;
}

/*function cork () {
	var hint1='Hint 1: cork';
	var hint1='Hint 2: cork';
	var hint1='Hint 3: cork';

	var clues [] ={hint1, hint2, hint3};

	return clues;
}*/

function checkAnswer () {
		found=false;
		
		if($('#answer').equals(check))
		{

			found=true;
		}

		return found;
}

function submit () {
	submitAnswer=$('#sumbit').val();
	return submitAnswer;
}

function giveHints (array) {
	for (var i=0;i<array.length;i++)
	{
		alert(array[i]);
		//if($('#sumbit').click(submit))
		if(checkAnswer()===true)
		{
			alert("Winner");
		}
		else
		{
			alert("Wrong");
		}
	}

}