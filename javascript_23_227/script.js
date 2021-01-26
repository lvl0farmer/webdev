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
