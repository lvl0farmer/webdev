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
