$( document ).ready(function() {
	$("#target").text(getRandomNumber(19, 120));

winCount = 0;
lossCount = 0;
numCount = 0;


function getRandomNumber(min, max) {
 return (Math.floor(Math.random() * (max-min) ) + min);
}


var numberOptions = {};

numberOptions.one = function getRandomNumber(min, max) {console.log(getRandomNumber(1,12))};
numberOptions.two = function getRandomNumber(min, max) {console.log(getRandomNumber(1,12))};
numberOptions.three = function getRandomNumber(min, max) {console.log(getRandomNumber(1,12))};
numberOptions.four = function getRandomNumber(min, max) {console.log(getRandomNumber(1,12))};

var i = 0;
for (one in numberOptions)
{
	numberOptions[i] = numberOptions[a];
	++i;
}

numberOptions[0]();
numberOptions[1]();
numberOption["one"]();
numberOption["two"]();

//for (var i = 0; i < numberOptions.length; i++) {

//}

});
//store results in an array?
//

//var jerryPhotos = {
//one: [1,12],
//two:[1,12],
//three:[1,12],
//four: [1,12]
//};

//for (var i = 0; i < jerryPhotos.length; i++) {
//for (var color in jerryPhotos)



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


