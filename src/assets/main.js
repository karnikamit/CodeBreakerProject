let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!answer && !attempt){
    	setHiddenFields();
    }
    if(validateInput(answer.vaue)){
    	attempt += 1;
    }else{
    	return false;
    }
    if(getResults(answer.value)){
    	setMessage("You Win! :)");
    }else{
    	if(attempt > 9){
    		setMessage("You Lose! :)");
    	}
    }
}

//implement new functions here
function setHiddenFields(){
	answer.value = Math.floor(Math.random() * 20);
	var stringAnswer = answer.toString();
	attempt = 0;
	while(stringAnswer.length <4){
		stringAnswer = "0"+stringAnswer;
	}
	answer.value = stringAnswer;
}

function setMessage(message){
	var messageValue = document.getElementById('message');
	messageValue.innerHTML = message;

}

function validateInput(input){
	var val, message="Guesses must be exactly 4 characters long.";
	val = input.length === 4;
	if(!val){
		setMessage(message);
		}
	return val;
}

function getResults(result){
	var div = document.getElementById('result');
	div.innerHTML = result;
	var count;
	if(answer.indexOf(result)>-1){
		count += 1;
	}
	return count == 4;
}