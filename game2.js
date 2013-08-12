//Variables

computerAnswer = ["rock","scissors","paper"];	//working

/////////////////////////////////////////////////
//Document Ready
//////////////////////////////////////////////////
$(document).ready(function(){
	$("#one").hide();
	$("#two").hide();
	$("#three").hide();
	
});


////////////////////////////////////////////////////////
//Play Button
////////////////////////////////////////////////////////

$('#playButton').click(function(){
	$('#choose').html('Please Choose').fadeIn(2000);
	$('#one').fadeIn(2000);
	$('#two').fadeIn(2000);
	$('#three').fadeIn(2000);
	//welcome();
});


//////////////////////////////////////////////////////// 
//Computer Deciding
///////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////
//Player decides
/////////////////////////////////////////////////////////
function rock(){
	answerone = computerFinalAnswer();
	//answerone = answerone.toUpperCase();

	if(answerone=="rock")
	{
		$('#winnerArea').html('DRAW. The computer Choose ' + answerone);
		//alert('Draw. The computer Choose ' + answerone);
	}
	else if(answerone == "paper")
	{
		$('#winnerArea').html('COMPUTER WINS. The computer Choose ' + answerone);
		//alert('Computer Wins. The computer Choose ' + answerone);
	}
	else
	{
		$('#winnerArea').html('PLAYER WINS. The computer Choose ' + answerone);
		//alert('Player Wins. The computer Choose ' + answerone);
	}
}

function paper(){
	answerone = computerFinalAnswer();
	//answerone = answerone.toUpperCase();

	if(answerone=="rock")
	{
		$('#winnerArea').html('PLAYER WINS. The computer Choose ' + answerone);
		//alert('Player Wins . The computer Choose ' + answerone);
	}
	else if(answerone == "paper")
	{
		$('#winnerArea').html('DRAW. The computer Choose ' + answerone);
		//alert('Draw. The computer Choose ' + answerone);
	}
	else
	{
		$('#winnerArea').html('COMPUTER WINS. The computer Choose ' + answerone);
		//alert('Computer Wins. The computer Choose ' + answerone);
	}
}

function scissors(){
	answerone = computerFinalAnswer();
	//answerone = answerone.toUpperCase();

	if(answerone=="rock")
	{
		$('#winnerArea').html('COMPUTER WINS. The computer Choose ' + answerone);
		//alert('Computer Wins. The computer Choose ' + answerone);
	}
	else if(answerone == "paper")
	{
		$('#winnerArea').html('PLAYER WINS. The computer Choose ' + answerone);
		//alert('Player Wins. The computer Choose ' + answerone);
	}
	else
	{
		$('#winnerArea').html('DRAW. The computer Choose ' + answerone);
		//alert('Draw. The computer Choose ' + answerone);
	}
}


//////////////////////////////////////////////////////////////////////////////////////////////
function welcome(){
	alert('Here are the rules');
}
