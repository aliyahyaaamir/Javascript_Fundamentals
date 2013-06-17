function calculateAge(birth_year,current_year){

	var age = current_year - birth_year;
	console.log('You are either ' + age + ' or ' + (age-1));

}
calculateAge(1994, 2013);