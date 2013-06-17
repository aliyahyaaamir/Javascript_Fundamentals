function calculateSupply(age, amount_per_day){
	var total_amount = (105-age)*amount_per_day;
	console.log('You will need ' + total_amount + ' to last you until the ripe old age of ' + 105);
}

calculateSupply(20,5);
calculateSupply(30,1);
calculateSupply(29,69);