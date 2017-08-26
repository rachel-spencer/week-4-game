$( document ).ready(function() {

winCount = 0;
lossCount = 0;
numCount = 0;
scoreCount =0;

var scoreCount=0;

function getRandomNumber(min, max) {
 return (Math.floor(Math.random() * (max-min) ) + min);
}

function reset() {
	scoreCount =0;
	$("#player-total").text(scoreCount);
}

var numberOptions = {};

numberOptions.one = getRandomNumber(1, 12);
numberOptions.two = getRandomNumber(1, 12);
numberOptions.three = getRandomNumber(1, 12);
numberOptions.four = getRandomNumber(1, 12);
numberOptions.five = getRandomNumber(19, 120);

$("#target").text(numberOptions.five);


$( "#jerry-one" ).click(function() {
  console.log(numberOptions.one);
	var score= document.getElementById("player-total")
            scoreCount += (numberOptions.one);  
            score.innerHTML = (scoreCount); 

  		if (scoreCount === numberOptions.five){
			alert("Winning feels almost as good as notarizing");
            winCount += 1; 
       		$("#wins").text(winCount);
			reset();
}

		else if (scoreCount >= numberOptions.five){
			alert("Awe shucks! You didn't get it but don't worry, there's always next time");
			lossCount += 1;
			$("#loss").text(lossCount);
			reset();
}

});

$( "#jerry-two" ).click(function() {
  console.log(numberOptions.two);
  	var score= document.getElementById("player-total")
            scoreCount += (numberOptions.two);  
            score.innerHTML = (scoreCount); 

       	  	if (scoreCount === numberOptions.five){
				alert("Winning feels almost as good as notarizing");
            	winCount += 1; 
       			$("#wins").text(winCount);
				reset();
}

			else if (scoreCount >= numberOptions.five){
			alert("Awe shucks! You didn't get it but don't worry, there's always next time");
			lossCount += 1;
			$("#loss").text(lossCount);
			reset();
}
	
});

$( "#jerry-three" ).click(function() {
  console.log(numberOptions.three);
  	var score= document.getElementById("player-total")
            scoreCount += (numberOptions.two);  
            score.innerHTML = (scoreCount);

          	 if (scoreCount === numberOptions.five){
				alert("Winning feels almost as good as notarizing");
            	winCount += 1; 
       			$("#wins").text(winCount);
       			reset();
}

			else if (scoreCount >= numberOptions.five){
				alert("Awe shucks! You didn't get it but don't worry, there's always next time");
				lossCount += 1;
				$("#loss").text(lossCount);
				reset();
} 

});

$( "#jerry-four" ).click(function() {
  console.log(numberOptions.four);
  	var score= document.getElementById("player-total")
            scoreCount += (numberOptions.two);  
            score.innerHTML = (scoreCount); 

                if (scoreCount === numberOptions.five){
					alert("Winning feels almost as good as notarizing");
            		winCount += 1; 
       				$("#wins").text(winCount);
       				reset();
}

				else if (scoreCount >= numberOptions.five){
					alert("Awe shucks! You didn't get it but don't worry, there's always next time");
					lossCount += 1;
					$("#loss").text(lossCount);
					reset();
}
});


});



