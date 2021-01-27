// default params 
function rollDie(numSides) {
	return Math.floor(Math.random() * numSides)+1
}

// in the past we would check if it pass in empty argument which is undefined we would check underfine 
// ie: if numSides === underfined numSides = 6;

//new way 
function rollDie(numSides = 6) {
	return Math.floor(Math.random() * numSides)+1
}

function greet(person, msg="Hey there", punc = '!'){			//it's recommended to leave the default parameter last 
	console.log(`${msg}, ${person}${punc}`)
}
// ---------------------------------------------------

// spread 			//expanding
// we can expand argument/array 
// ie: 
Math.max(1,2,3,4,5,6,7,8,9,55,00,799,221,79,33) 			//it doesn't matter 
Math.min(2,5,1)

// so if 
const nums = [1,2,3,4,5,6,7,8,9,55,00,799,221,79,33]
Math.max(nums)													//this will print back an array 

// is the same as 

Math.max(...nums)												//this will print the same but actual value seperate by space


// ALSO 
console.log('hello')											// will print hello 
console.log('...hello')											// will print h e l l o 