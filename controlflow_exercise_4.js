function pluralize(noun, num){
	if (num == 1){
		return num + ' ' + noun;
	}
	else if (num > 1){
		return num + ' ' + noun + 's';
	}
}

console.log(pluralize('dog',1));
console.log(pluralize('cat',5));