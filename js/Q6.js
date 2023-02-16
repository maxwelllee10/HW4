function countVowel(string) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let letter of string.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'and is not a palindrome';
        }
    }
    return 'and is a palindrome';
}
function myFunction() {
  let input = prompt("Enter a word", "Madam");
  if (input != null) {
    document.getElementById("demo").innerHTML =
    input+" contains " + countVowel(input)+" vowels "+ checkPalindrome(input.toLowerCase());
  }
}