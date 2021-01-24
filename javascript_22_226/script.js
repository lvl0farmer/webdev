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