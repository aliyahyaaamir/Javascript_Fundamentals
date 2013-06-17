var recipe_card = {
	title: "Cupcakes",
	servings: 5,
	ingredients: ["flower", "eggs", "frosting"]
};

console.log(recipe_card.title);
console.log('Servings ' + recipe_card.servings);
console.log('Ingredients:');
for (i = 0; i <recipe_card.ingredients.length; i++){
	console.log(recipe_card.ingredients[i]);
}

