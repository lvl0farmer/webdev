const add = function (x,y) {
	return x + y;
}


let square = function (x){
return x*x;
};

// ================================
function callTwice(func) {
	func();
	func();	
}

function callTenTimes(f) {
	for (let i = 0; i<10; i++){
		f()
	}	
}

function rolldie() {
	const roll = Math.floor(Math.random()*6) + 1	
	console.log(roll)
}


callTwice(rolldie);
callTenTimes(rolldie);
// ================================

function makeMysteryFunc() {
	const rand = Math.random();
	if(rand > 0.5){
		return function(){
			console.log("Congrats, I AM A GOOD FUNCTION")
			console.log("YOU WIN A MILLION DOLLARS!!")
		}
	} else {
		return function() {
			alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
			alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
			alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
			alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
		}
	}
}

const mystery = makeMysteryFunc();
mystery();

// ================================

function makeBetweenFunc(min,max){
	function isBetween(num){
		return num >= 50 && num <= 100;  
    }
}
const isChild = makeBetweenFunc(0,18);
isChild(17); //true 

// ================================

const myMath = {
	PI: 3.14159, 
	square: function (num) {
		return num * num;
	},
	cube: function (num){
		return num**3;
	}
}

// myMath.square 		//will return the format of the function and preview
// myMath.square();	    //to run...more popular 
// OR
// myMath["square"](4)	// to run as well 

// a new short hand is: 
const myMath = {
	square(num){
		return num * num; 
	},
	cube(num){
		return num**3;
	}
	
}

// ================================

const cat = {
	name: 'blue steele',
	color: 'grey', 
	breed: 'scottish fold', 
	meow(){
		console.log(`${this.name} says MEOWWW`);	}
}


// ie: const meow2 = cat.meow;  
cat.meow();
meow2(); //...will not print out blue steele...will just print out says MEOWWW...the default object to this is Window instead of cat
cat.meow2(); // it should be cat.meow2();  

// ================================

try {
	hello.toUpperCase();
} catch {
	console.log("Error");
}


function yell(msg){
	console.log(msg.toUpperCase().repeat(3));
}

yell(hello); 	//works
yell(123123);	//uncaught error  

// we can covert it to: 
function yell(msg){
	try{
		console.log(msg.toUpperCase().repeat(3));
	} catch (e) {
		console.log("Please enter a string next time!");
	}
}









