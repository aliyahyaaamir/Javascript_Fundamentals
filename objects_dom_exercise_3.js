var movies = {
	title: "I am Legend",
	duration: 127,
	stars: ['Will Smith', 'Some other people']
};

function printMovie(movie){

	var stars = 'Stars: ';
	for (var x = 0; x < movies.stars.length; x++){

	stars += movies.stars[x] + ', ';
	}
	console.log(movies.title + ' lasts for ' + movies.duration + ' minutes. ' + stars);
};

printMovie(movies);