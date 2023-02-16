let word;
let words;

words = prompt('Enter a word'); 

words = []
while(word.toLowerCase() != "stop") {
	words.push(word); 
	word = prompt("Enter another word"); 
}
if(words.length > 0)
	console.log("You entered the following words: "+words.join(" "));
else 
	console.log("No words to display, Stop was the first word entered.");