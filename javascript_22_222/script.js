numbers.forEach(function (el){
	console.log(el)
});

// OR more commonly use now 

for (let el of numbers){
	console.log(el);
}



movies.forEach(function(movie){
	console.log(`${movie.title}-${movie.score}/100`)
});
// ==================================

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

numbers.map(function (num){
	return num * 2; 
})

//creating [2,4,6,8,10,12,14,16,18,20...]    //generate new array 





function cleanNames(names){
    const fixed = names.map(function(name){
        return name.trim();
    })
    return fixed;
}
