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
if(isNaN(height))//if height != typeof 'number'
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
//method1
let D1=Math.floor(Math.random()*6)+1
console.log(D1)
let D2=Math.floor(Math.random()*6)+1
console.log(D2)
if(D1==6 && D2==6)
{
    console.log('you rolled $(D1) & $(D2). You win a top prize:Bear !! Congratz')
}
else if(D1===D2 && D1!=6 && D2!=6)
{
    console.log('you rolled $(D1) & $(D2). You win three free throws !! Enjoy')
}
else if(((D1+D2)%2)==0)
{
    console.log('you rolled $(D1) & $(D2). You win a free throw')
}
else
{
    console.log('you rolled $(D1) & $(D2). Sorry you lose')
}
//method2
console.log('*************')
let diceGame=prompt('play? yes/no')
if(diceGame==='yes')
{
    let D1=Math.floor(Math.random()*6)+1
    console.log(D1)
    let D2=Math.floor(Math.random()*6)+1
    console.log(D2)
    if(D1==6 && D2==6)
    {
  //      console.log('you rolled', $(D1), '&' $(D2)' You win a top prize:Bear !! Congratz')
    }
    else if(D1===D2 && D1!=6 && D2!=6)
    {
        console.log('you rolled ${D1} & ${D2}. You win three free throws !! Enjoy')
    }
    else if(((D1+D2)%2)==0)
    {
        console.log('you rolled $(D1) & $(D2). You win a free throw')
    }
    else
    {
        console.log('you rolled $(D1) & $(D2). Sorry you lose')
    }
}
else if(diceGame==='no')
{
    console.log('Tough Luck')
}
else if(diceGame!=='yes'|| diceGame!=='no')
{
    console.log("please enter only either 'yes' or 'no'")
}

//Strings II exercise: Find and Replace
//Create a function called findAndReplace. It should take in three parameters. A string of text to search, a string to find and another string to replace it with.​The function should return a new string of text with all the instances of the word searched for replaced with the new word.​
//For example: findAndReplace("Hi, how are you?", "Hi", "Hello") should return: "Hello, how are you?"

function findAndReplace(a,b,c)
{
    let rs=text.replace(b,c)
    console.log(rs)
}

console.log(findAndReplace("Hi, how are you?", "Hi", "Hello"))


function findAndReplace(a,b,c)
{
    let text = a;  
    return text.replace(b, c);
}
console.log(findAndReplace("Hi, how are you?", "Hi", "Hello"))

//Functions Exercise 1: Simple Function
//Write a function with no parameters that returns the string “Hello World”​.Try console logging the function
function helloString()
{
    return ("Hello world")
}

console.log(helloString())

//Function Exercise 2: Quadrupler
//Create a function called “quadrupler”​.
//The function should take in one parameter​
//The function should return 4 times the parameter​.
//Try console logging the function with different numbers as parameters
let z=prompt("Which number's quadruple do you want?")
if(isNaN(z))
{
    console.log('please enter a valid number')
}
else
{
    function quadrupler(z)
    {
        let qrs = (4*z);
        return qrs;
    }
    console.log(quadrupler(z))
}

//Function Exercise 3: Welcome Message​
//Create a function called welcome. The function should take two parameters: firstName and lastName​
//The function should return the string `Hello firstName lastName, how can I help you?`​
//Try console logging the function with your name as a parameter​
//Finally modify the function so that the firstName is in lower case but the lastNames is in all capital letters​




//Function Exercise 4: Temperature Converter​
//Create a function called temperatureConverter​
//The function should take in one parameter called Fahrenheit​
//The function should return the temperature in Celsius using the following formula: ​
//    Celsius = (Fahrenheit - 32) × 5/9​
//Try console logging the function with different numbers as parameters​
let fah=prompt("Enter the Fahrenheit to be converted to celsius?")
if(isNaN(fah))
{
    console.log('please enter a valid number')
}
else
{
    function temperatureConverter(fah)
    {
        let celsius = ((fah-32)*5/9);
        return celsius;
    }
    console.log(temperatureConverter(fah))
}


//Function Exercise 5: Dog Years​
//Information​
//The first year of a dog's life is equal to 15 human years​
//The second year of a dog's life is equal to nine human years​
//Each additional year is equal to about five human years​
//Instructions​
//Use your age and name variables​​
//Calculate your age in dog years using JavaScript maths operators​​
//Console log your age in dog years using template literals​



//Function Exercise 6: Calculator
//Create a function called calculator which takes three arguments​
//Check the first and third arguments are numbers. If they are not numbers, log an error to the console​
//Check the second argument is a string of either +, -, * or  /. If it is not log an error to the console.​
//Use if and else statement to perform the correct calculation and return the correct answer depending on the second argument​.Try Console logging your calculator function with different arguments and see what happens.​



//Function Exercise 7: Less than
//Write a function “min(a, b)” which returns the lesser of the two numbers “a” and “b”.​
//For instance:​
//  min(1, 2) == 1​
//  min(10, 100) == 10​
//  min(1, 1) == 1​



//Function Exercise 8: To the power of​
//Write a function “pow(x, n)” that returns “x” in power “n”. In other words, it will multiply “x” by itself “n” times (xⁿ) and returns the result.​
//  pow(2, 2) = 2 * 2 = 4​
//  pow(2, 3) = 2 * 2 * 2 = 8​
//  pow(1, 100) = 1 * 1 * …x97 * 1 = 1​



