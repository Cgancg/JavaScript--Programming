console.log('Arrays Exercises')
console.log('-----------------')

//Arrays Exercise 1: Breakfast
//----------------------------
//Create an array of your breakfast​
//Add an item to the end with push​
//Add another item to the start​
//Console.log the length of the array
const breakfastArr=['Scrambledeggs', 'Mushrooms', 'Bacon', 'Sausage', 'Hashbrown']
console.log(breakfastArr);
console.log(`Initial Breakfast array is ${breakfastArr}`)
console.log(`Length of Breakfast Array is ${breakfastArr.length}`)
breakfastArr.push('Toamtoes')
console.log(breakfastArr);
console.log(`After adding Tomatoes to the last, Breakfast array is ${breakfastArr}`)
console.log(`Length of Breakfast Array is ${breakfastArr.length}`)
breakfastArr.unshift('Toast')
console.log(breakfastArr);
console.log(`After adding Toast to the start, Breakfast array is ${breakfastArr}`)
console.log(`Length of Breakfast Array is ${breakfastArr.length}`)
breakfastArr[1]=['Beans']
console.log(breakfastArr);
console.log(`After changing second elemnt of index1 from Scrambledeggs to Beans, Breakfast array is ${breakfastArr}`)
console.log(`Length of Breakfast Array is ${breakfastArr.length}`)
console.log('-----------------')


//Arrays Exercise 2: Last Value
//-----------------------------
//Create a function that takes in an array as a parameter​
//Return the last item of the array (This should work for an array of any length)
function functionArr1()
{
    let l=breakfastArr.length;
    let indexl=breakfastArr[l-1];
    return indexl;
}
console.log(`The last element of the array is ${functionArr1(breakfastArr)} at index ${breakfastArr.length-1}`)

function functionArr1(lastArr)
{
    let l=lastArr.length;
    let indexl=lastArr[l-1];
    return indexl;
}
console.log(`The last element of the array is ${functionArr1(breakfastArr)} at index ${breakfastArr.length-1}`)

function functionArr2(last2Arr)
{
    let index2=last2Arr[(last2Arr.length)-2];
    return index2;
}
console.log(`The second last element of the array is ${functionArr2(breakfastArr)} at index ${breakfastArr.length-2}`)
console.log('-----------------')



//Arrays Exercise 3: Music
//------------------------
//Create an array “musicGenres”, with items “Rock” and “Rap”.​
//Append(add to the end) “Jazz” to the end.​
//Replace the value in the middle of the array with “Classical”. Your code for finding the middle value should work for any arrays with an odd number of items.​
//Prepend(add to start) “Blues” and “Reggae” to the array.

const musicGenres=["Rock", "Rap"]
console.log(`Music genres are ${musicGenres}`)
musicGenres.push("Jazz")
console.log(`Appended Music genres are ${musicGenres}`)
oddArrayReplaceMiddle(musicGenres)
function oddArrayReplaceMiddle()
{
    if(((musicGenres.length)%2)===1)
    {
        let middleGenre=((((musicGenres.length)+1)/2)-1);
        musicGenres[middleGenre]="Classical";
        console.log(`Music genres after replacing middle element are ${musicGenres}`)
    }
    else
    {
        console.log('Sorry, your array is not odd')
    }
}
musicGenres.unshift("Blues")
console.log(`Prepended Music genres are ${musicGenres}`)
oddArrayReplaceMiddle(musicGenres)
musicGenres.unshift("Reggae")
console.log(`Prepended Music genres are ${musicGenres}`)
oddArrayReplaceMiddle(musicGenres)
console.log(`Now the new Music genres are ${musicGenres}`)
console.log(`The last element of the array is ${functionArr1(musicGenres)} at index ${musicGenres.length-1}`)
console.log(`The second last element of the array is ${functionArr2(musicGenres)} at index ${musicGenres.length-2}`)
console.log('-----------------')




//Arrays Exercise 4: Sort
//-----------------------
//Create a function that takes in an array and sorts it into alphabetical order.​
//Try sorting your breakfast array
function alphaSort(sortArr)
{
    console.log(`The array before sorting alphabetically is ${sortArr}`)
    sortArr.sort();
    console.log(`The array after sorting alphabetically is ${sortArr}`)
    
}
alphaSort(breakfastArr)
alphaSort(musicGenres)
