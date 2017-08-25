$( document ).ready(function() {

winCount = 0;
lossCount = 0;
numCount = 0;
scoreCount =0;


function getRandomNumber(min, max) {
 return (Math.floor(Math.random() * (max-min) ) + min);
}

$("#target").text(getRandomNumber(19, 120));

var numberOptions = {};

numberOptions.one = getRandomNumber(1, 12);
numberOptions.two = getRandomNumber(1, 12);
numberOptions.three = getRandomNumber(1, 12);
numberOptions.four = getRandomNumber(1, 12);


$( "#jerry-one" ).click(function() {
  console.log(numberOptions.one);
});

$( "#jerry-two" ).click(function() {
  console.log(numberOptions.two);
});

$( "#jerry-three" ).click(function() {
  console.log(numberOptions.three);
});

$( "#jerry-four" ).click(function() {
  console.log(numberOptions.four);
});


});
//$("#testing").on("click", function()) {}

//4. Add onto the the counter with each click of the 4 photos
	//Click handler jquery on.click

//5. Create a score counter and insert in global space
	//winCount: 0
	//lossCount: 0
	//numCount: 0

//6. Create a destination for the score counter
	//Function: jquery .text to dump the variables onto the counter and display using jquery .text

//7. Create and if/then:
	//if counter is = the random number
	// alert win 
	// add 1 to win count
	// reset num.count = 0 
	// call generate a new random number function

	//Else If the counter is > the random number 
	// alert loss
	// add 1 to loss count
	// reset num.count =0 
	// call generate a new random number funtion. 





//	$("<div class='crystal'>")
//		.addClass(color)
//		.data('value', getRandomNumberTarget(crystalColors[0], crystalColors[1]))
//		.appendTo("#crystals");
//}


