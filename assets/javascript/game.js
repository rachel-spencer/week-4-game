winCount = 0;
lossCount = 0;
numCount = 0;


//Break down of what needs to be done:

//1. Generate a random number between 19 - 120 
	//Function: math.random, math.floor
randomNumber = Math.floor(Math.random() * (120-19) ) + 19;
console.log(randomNumber)
$("#target").text(randomNumber);


//2. Display that random number to the user
	//Funtion: Jquery .text (need to link in jquery CDN to my index.html)



//3. Assign each of the 4 photos a unique number between 1 - 12.
	//Function: math.random, math.floor that can be run 4 times and store each output in a variable to be called later

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



