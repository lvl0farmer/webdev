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
// ---------------------------------------------------

//spread object literal 
const feline = {leges: 4, family: 'Felidae'};
const canine = {family: 'Cainae', furry: true};


const dog = {...canine, isPet: true}; 
// same property, the last one will be set 
const doggie = {...canine, ...feline}; 						     // this will be {leges: 4, family: 'Cainae', furry: true}
// ---------------------------------------------------
const dataFromForm = {
	email: 'something@gmail.com', 
	password: 'soemthing', 
	username: 'something2'
}

const newUser = {...dataFromForm, id: 01, isAdmin: true}
// ---------------------------------------------------
// Rest Params 

function print(){									//this would work 
	console.log(arguments)
}

print(1,2,3,4) 											//1 2 3 4 

// BUT this does not work, since arguments is technically not an array 
function print(){	
	return arguments.reduce((total, el) => total + el)	
}

// so we use this spread 
function print(...num){	
	return num.reduce((total, el) => total + el)	
}

// OR
function raceResults(gold, silver, ...everyoneElse){
	console.log(`Gold medal goes to: ${gold}`)
	console.log(`Silver medal goes to: ${silver}`)
	console.log(`Thanks for participating: ${everyoneElse}`)
}

raceResults('amy','tod', 'tina', 'trevor', 'travis')				//first parameter, second parameter, and everyone else

//the builtin `arguments` object does not work in arrow function 
//spread is collecting things into a single parameter 
// ---------------------------------------------------

// destructuring from array 
const score = [123,564,7,45,22,31,11]
const highScore = score[0]
const lowScore = score[2]

// but we can also do 
const [high, low] = score; 										//high = 123, low = 7

// we can also deconstruruing from object 
const user = {
	email: 'harvey@email.com', 
	pass: 'sjfkdsjklf', 
	firstname: 'fjdksajkfl', 
	lastN: 'kjk',
	born: '12314'
}


const email = user.email; 
const born  = user.born; 
// VS
const {email, born } = user; 	
// we can also rename var 
const {email, born: birthYear} = user; 						
// this is the same as 
const birthYear = user.born; 
// ---------------------------------------------------



// destructuring params 
function fullName(user)
	return `${user.firstName} ${user.lastName}`
// we can do 
function fullName(user)
	const {firstName, lastName} = user; 						//deconstruct user object once it is inside the function 
	return `${firstName} ${lastName}`
// but we can also deconstructure on the way in 
function fullName({firstName, lastName})						//this function is expecting firstName and lastName 
	return `${firstName} ${lastName}`
// use it with addtional default value 
function fullName({firstName, lastName = 'smith'})						
	return `${firstName} ${lastName}`


// so basically it comes down to 
movies.filter((movie)) => movie.score >=90);
// VS
movies.filter({ score }) => score >= 90)

// another example 

movies.map(movie => {
	return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

VS
 
movies.map(({title, socre, year}) => {				//still need parentices since it's a destructuring in a function call 
	return `${title} (${year}) is rated ${score}`
})


