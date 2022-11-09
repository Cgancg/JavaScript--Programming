console.log('Hello world')
//Use the let keyword to declare a variable of age​
//Set the variable age to your age​
//Console log the variable​
let myAge=30
console.log(myAge)
//Define a variable numberOfRabbits as 2​
//Set the variable to 3 * the previous number​
//Console log the result​
let numberOfRabbits=2
console.log(numberOfRabbits)
numberOfRabbits *= 3
console.log(numberOfRabbits)
//Assign a variable with a name bodmasExample to 3​
//Add 5 to the variable and divide the result by 6​
//Console.log the result
let bodmasExample=3
console.log(bodmasExample)
bodmasExample=(bodmasExample+5)/6
console.log(bodmasExample)
//Use the maths objects to create a random integer between 1 and 6​
//Console.log your result
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);
let ranInt=Math.floor(Math.random()*(6-1+1))+1
console.log(ranInt)
//Define a variable myCountry and give it a value of your country​
let myCountry='UK'
console.log(myCountry)
//Log the length of your country using the length property.
console.log(myCountry.length)
//Define a variable favouriteFood and give it a value of your name​
//Use a method to change favouriteFood to all upper case
let favouriteFood='pizza'
console.log(favouriteFood.toUpperCase())
//Change favouriteFood back to all lower case using a method and console.log the result
console.log(favouriteFood.toLowerCase())
//Set your name as a variable​​.Set your age as a variable​​
//Define a new variable, message using concatenation as “Hello my name is myName and I am myAge years old” to the console using concatenation.​​
//Try changing the variables and console logging​
//Append the string "What is your name?" To the message variable
let myName='Chandra'
console.log(myName)
console.log(myAge)
let concatVar='Hello my name is '+myName+' and I am ' +myAge+'years old.'
console.log(concatVar)
concatVar+=' what is your name?'
console.log(concatVar)

//Template Lierals
//Define Variables firstName and lastName​
//Use template literals to log the names with a space in between​
//Use a template literals to log a welcome message with a line break:​`Welcome firstName lastName, ​How can I help you?`

let firstName='Chandra'
let lastName='Ganesan'
console.log(`${firstName} ${lastName}`)

//Control Flow Exercise 1: Password Check
//Create a variable, password​
//Write an if statement which console logs true if the password is over 7 character or false otherwise.
let password='pass'
if(password.length>7)
{
    console.log(true)
}
else
{
    console.log(false)
}

//Height Test
//To go on the Super Dooper Looper roller coaster you have to be equal or above 150cm​.
//Use an if/else statement to log "You can go on the ride" if the variable height is equal or above 150 or "Sorry you are not tall enough" height is below 150​
//Modify your if statement so that if height is not a number the message "Please enter a number" is logged to the console​
let height='non-number'//change height to values of 100 and 200 to see other conditions execution.
if(isNaN(height))
//if(typeof(height!='number'))
{
    console.log('Please enter a number')
}
else if(height>=150)
{
    console.log("You can go on the ride")
}
else
{
    console.log("Sorry you are not tall enough")
}

//Project Dice
// In the game Dice Prize, you throw two dice:​
// If you throw two sixes you win a top prize: a bear​
// If you throw a double number, other than a six, you win three free throws​
// If you throw an even number, you win one free throw​
// If you throw any other combination, you lose the game

// Use Math.random, if, else, else if and template literals to create the game and console log what the player wins or whether they lose​
// Start by writing a flow chart on paper to plan out your code​
// If you finish early, you can incorporate alert and prompt into the game
let D1=Math.floor(Math.random()*(6-1+1))+1
console.log(D1)
let D2=Math.floor(Math.random()*(6-1+1))+1
console.log(D2)
if(D1==6 && D2==6)
{
    console.log('You win a top prize:Bear !! Congratz')
}
else if(D1===D2 && D1!=6 && D2!=6)
{
    console.log('You win three free throws !! Enjoy')
}
else if(((D1+D2)%2)==0)
{
    console.log('You win a free throw')
}
else
{
    console.log('Sorry you lose')
}
