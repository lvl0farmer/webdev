const greet = (name) => {
    return `Hey ${name}!`;
 }

// --------------------

// FROM
const newMovies = movies.map(function(movie){
	return `${movies.title} - ${movies.rating/10}`;
});

// TO 
const newMovies = movies.map(movie => {
	return `${movies.title} - ${movies.rating/10}`;
});
// OR
const newMovies = movies.map(movie => (
	`${movies.title} - ${movies.rating/10}`
));
// OR 
const newMovies = movies.map(movie => `${movies.title} - ${movies.rating/10}`);
// --------------------
function validUserNames(userArr) {
    return userArr.filter(name => name.length < 10)
}
// --------------------
const goodMovies = movies.filter(m => m.score > 80)
const goodMovies = movies.map(m => m.title)			// we just want the title 
// OR
const goodMovies = movies.filter(m => m.score > 80).map(m => m.title);
// OR
const goodMovies = movies
					.filter(m => m.score > 80)
					.map(m => m.title);
					const number = [1,2,3,4,5,6]
// --------------------
number.filter(n => {
	return n === 4
}) 

const fixedNumber = number.filter(n => {
	return n === 4
}) 
// OR 
const fixedNumber = number.filter(n => {
	return n === 4
}) 
// --------------------

function allEvens(singleArr){
    if(singleArr.every(num => num % 2 === 0)){
        return true;
    } else {
        return false; 
    }
}
// --------------------

const prices = [9.99,1.50,19.99,49.99,30.50];

let total = 0; 
for(let price of prices){
	total += price 
}
console.log(total)

// IS THE SAME AS 

const total = prices.reduce((total, price) => total + price);

// also great for finding max and min 

const minPrice = prices.reduce((min, price)=>{
	if(price < min){
		return price; 								//remember function can only have one return, and it will exit out the function altogether 
	} 
	return min; 
});
// --------------------
const evens = [2,4,6,8];						//we can initialize where to start accumalator
evens.reduce((sum,num) => sum+num, 100) 		//the second parameter inside reduce() is the starting point for accumlator 

// so evens.reduce((sum,num) => sum+num, 100) 		//2+4+6+8 = 20 + 100 = 120

// --------------------
// arrow function & this: 

//'this' will print Viggo Mortensen, because this refers to everything to the left of the function
//'this' related to how it is execute not how it is created
const person = {
	firstName: 'Viggo',
	lastName: 'Mortensen',
	fullName: function(){
		return `${this.firstName} ${this.lastname}`		
	}
}

// BUT arrow function term 'this' is referring to the scope that it was created in...in this case it's most likely be Windows object   

const person = {
	firstName: 'Viggo',
	lastName: 'Mortensen',
	fullName: () => {
		return `${this.firstName} ${this.lastname}`		//this will print Viggo Mortensen 
	}
}


// ALSO let say if we do another function regarding 'this' context
//AGAIN remember because fullName function was created in the scope context belongs to object Window, 'this' refers to setTimeOut() which is a method belongs to Window object  

const person = {
	firstName: 'Viggo',
	lastName: 'Mortensen',
	fullName: () => {
		return `${this.firstName} ${this.lastname}`		
	}, 
	shoutName: function(){
		setTimeout(function(){
			console.log(this.fullName());				
		}, 3000)
	}
}

// TO FIX IT 
//we change it to arrow function, to use scope level context
//so now 'this' is the same throughout shoutName function() 

const person = {
	firstName: 'Viggo',
	lastName: 'Mortensen',
	fullName: function() {							//change it back, because we want 'this' to refer it to person object
		return `${this.firstName} ${this.lastname}`		
	}, 
	shoutName: function(){
		setTimeout(() => {								  
			console.log(this.fullName());				
		}, 3000)
	}
}
