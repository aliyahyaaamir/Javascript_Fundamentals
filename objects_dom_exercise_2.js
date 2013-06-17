var reading_list = [

	{title: "Lord Loss",
	author: "Darren Shan",
	alreadyRead: false
	},

	{
		title: "I am Legend",
		author: "unknown",
		alreadyRead: true
	}];

	for (x = 0; x < reading_list.length; x++){
		var book = reading_list[x];
		if (book.alreadyRead){
			console.log("You have already read " + book.title);
		}
		else if (book.alreadyRead == false){
			console.log("You have not read " + book.title);
		}

	}

