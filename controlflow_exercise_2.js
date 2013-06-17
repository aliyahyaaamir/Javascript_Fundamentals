function helloWorld(lang_code){
	if (lang_code == 'fr'){
		return 'Bonjour';
	}
	else if (lang_code == 'es'){
		return 'Hola, Munda';
	}
	else{
		return 'Hello World';
	}
}
console.log(helloWorld('fr'));
console.log(helloWorld('es'));
console.log(helloWorld());