//Variables

//Hash Map - working
	map={
		'dublin':['dublinHint1','dublinHint2','dublinHint3'],
		'cork':['corkHint1','corkHint2','corkHint3'],
		'louth':['louthHint1','louthHint2','louthHint3'],
		'meath':['meathHint','meathHint','meathHint'],
		'donegal':['donegalHint1','donegalHint2','donegalHint3'],
		'kildare':['kildareHint1','kildareHint2','kildareHint3']

	};

//Array of counties
countyArray = ['dublin','cork','louth','meath','donegal','kildare']; 


//Event handler to start - working
$('#button').click(function(){
	//alert(returnRandomNumber());
	alert(returnCounty());
});


//function to return back key - working
function returnRandomNumber () {
	randomNumber = Math.floor((Math.random()*5.9)+0);
	return randomNumber;
}

//function to return county - working
function returnCounty () {
	countyKey=returnRandomNumber();
	return countyArray[countyKey]; 
}

////////////////////////////////////////////
/////Start of game
///////////////////////////////////////////
$('#start').click(function(){ //working
	//alert('works')
	
	welcome(); //works
	start();
});

function welcome() { //working
	//alert('Welcome to guess where I am. A game where you have to find where I am. 3 Hints will be displayed, from there you must find where I am, the less hints given the higher the points!!');	
	message = 'Welcome to guess where I am. A game where you have to find where I am.';
	$('#outputTextStart').html(message);
}

function start () {
	county = returnCounty(); //works
	
	i=0;
	
		//alert(map[county][i]);  //works
		$('#outputText').html(map[county][i]);

		
			$('#submit').click(function(){  //works
		//while(i<3) && $('#submit').val!=''){
			ans = $('#answer').val();
			//alert(ans);

			 if(ans==county)  //works
			{
				if(i<=2){
					//alert('Well Done');
					$('#outputText').html('Well Done!!');	
				}
				else{
					//alert('Sorry, GAME OVER, you must hit the "play Again" button');
					$('#outputText').html('Sorry, GAME OVER, you must hit the "play Again" button');	
				}
				
				//$('#rightWrong').html('Well Done');
				//i=4;
				//$("#box").css('-webkit-transform','rotate(360deg)');
				
			}
			

			else{
				//alert('Wrong');
				$('#outputText').html('Wrong');
				//$("#countyBox").addClass("changeCountyBox");
				//$('#rightWrong').html('Wrong I\'m afraid');//.fadeOut(1000);
				i++;
				//$('#answer').val()='';
					
				//$('#outputText').html(map[county][i]);
				if(i<=2)
				{
					//alert(map[county][i]);
					$('#outputText').html(map[county][i]);	
				}
				else{
					//alert('game over');
						$('#outputText').html('Game OVER');
				}
				
				
			}
			
			

		//}//End of Loop
	});
}

$('#playAgain').click(function(){
				location.reload();
			});