function assignGrade(score){
	if (score >= 80){
		return "A";
	}
	else if (score < 80 && score >= 70){
		return "B";
	} 
	else if (score < 70 && score >= 60){
		return "C";
	}
	else if (score < 60 && score <= 50){
		return "D";
	}
	else{
		return "F";
	}
}


console.log(assignGrade(80));
console.log(assignGrade(50));
console.log(assignGrade(75));