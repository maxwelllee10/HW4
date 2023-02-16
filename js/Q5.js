let read = require('readline-sync'); 
words = []
console.log("Enter words one by one (Enter \"stop\" to exit the input):");
word = read.question("");
while(word.toLowerCase() != "stop") {
	words.push(word); 
	word = read.question(""); 
}
if(words.length > 0)
	console.log("You entered the following words: "+words.join(" "));
else 
	console.log("No words to display, Stop was the first word entered.");