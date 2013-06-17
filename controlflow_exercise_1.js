function greaterNum(a, b){
	if (a > b){
		return a;
	}
	else if (b > a){
		return b;
	}
	else
		return "They are the same";
}

console.log(greaterNum(2,3));
console.log(greaterNum(4,4));
console.log(greaterNum(5,1));