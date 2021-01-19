// we use let because what if user enter in that is a non number
// so we use parseInt which only recognize int
// let maximum = parseInt(prompt("Enter the maximum number"));
// //Because if a user enter in string, it will return NaN 
// //and since NaN is falsey this is why we use if not falsey or empty
// while(!maximum) {
//     maximum = parseInt(prompt("Enter the maximum number"));
// }

// const targetNum = Math.floor(Math.random()*maximum) + 1; 
// console.log(targetNum)

// let guess = parseInt(prompt("enter your first guess!"));
// let attempt = 1; 

// while (parseInt(guess) !== targetNum){
//     if(guess === 'q') break;
//     attempt++;
//     if (guess > targetNum){
//         guess = prompt("Too high, try again");
//     } else {
//         guess = prompt("Too low, try again");
//     }
// }
// if(guess === 'q'){
//     console.log("quitting...")
// } else {
//     console.log(`you got it! it took you ${attempt} guesse`);
// }


// ========================================================


// console.log("hello")
// let maxRange = parseInt(prompt("enter your max range")); 
// console.log(`max range: ${maxRange}`)

// while(!maxRange) {
//     maxRange = parseInt(prompt("something wrong, enter your max range again"));
// }

// let numGen = Math.floor(Math.random()* maxRange)+ 1;
// console.log(`secret number: ${numGen}`)

// let guess = prompt("Guess the number");
// let attempt = 0;
// while(parseInt(guess) != numGen){
//     if(guess === 'q') break; 
//     attempt++;
//     if(guess > numGen) {
//         guess = prompt("Too high, try again"); 
//     } else {
//         guess = prompt("Too low, try again");
//     }
// }
// if(guess == 'q') {
//     alert(`you chose quit...quitting`);
// } else {
//     alert(`You guessed it in ${attempt} tries`);
// }
    

// ========================================================

// for of loop new and IE does not support
const subreddits = ['cringe', 'books', 'chicken', 'funny'];

for (let i = 0; i< subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// kinda like python 
// ie: for boob in ass: 
//         print(boob)
for(let sub of subreddits) {
    console.log(sub)
}


























