//Variables

computerAnswer = ["rock","scissors","paper"];	//working


$('#playButton').click(function(){
	//welcome();
	//$('#choose').html('Please Choose');

	
	//alert(computerChoice);
	//playerChoose();
	//alert("computer: " + computerFinalAnswer()); //works
	playerAnswer();
	alert(playerAnswer());
	//winner(answerone, answertwo);
	
});
/////////////////////////////////////////////////////////
answerone =computerFinalAnswer();
answertwo = playerAnswer();

//////////////////////////////////////////////////////// 
function computerFinalAnswer(){

	computerChoice=returnCounty();
	return computerChoice;	
}


/**Functions to determine the computers choice**/
function returnRandomNumber () {	//working
	randomNumber = Math.floor((Math.random()*2.9)+0);
	return randomNumber;
}

//function to return county - working
function returnCounty() {
	countyKey=returnRandomNumber();
	return computerAnswer[countyKey]; 
}




/**Players choice**/ // works
/*function playerAnswer(){
	if($('#one').click(function(){
			playerChoice="rock";
			//alert(playerChoice);
			
		}))

	if($('#two').click(function(){
			playerChoice="scissors";
			//alert(playerChoice);
			
		}))	
	if($('#three').click(function(){
			playerChoice="paper";
			//alert(playerChoice);
			
		}))

		return playerChoice;
}*/

function winner(answerone, answertwo){
	if((playerChoice=="rock" && computerChoice=="rock"))// || (playerChoice=="scissors" && computerChoice=="scissors")||(playerChoice=="paper" && computerChoice=="paper"))
	{
		alert('Draw');
	}	
	else if(playerChoice =="rock" && computerChoice =="scissors")
	{
		alert('Player Wins');
	}
	else if(playerChoice =="paper" && computerChoice =="rock")
	{
		alert('Player Wins');
	}
	else if(playerChoice =="scissors" && computerChoice =="paper")
	{
		alert('Player Wins');
	}
	else
	{
		alert('Computer Wins!!')
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////
function welcome(){
	alert('Here are the rules');
}

//////////////////////////////////////////////////////////////////////////////////////////////
function playerAnswer(){
	if($('#one').click(function(){
			playerChoice="rock";
			return playerChoice;
		}));

	if($('#two').click(function(){
			playerChoice="scissors";
			//alert(playerChoice);
			return playerChoice;
		}));	
	if($('#three').click(function(){
			playerChoice="paper";
			//alert(playerChoice);
			return playerChoice;
		}));

		//return playerChoice;
}
