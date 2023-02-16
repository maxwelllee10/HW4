let ftemp;

function tempfunc(ftemp){
  return((ftemp - 32) * 5/9)
}

while(ftemp <-126 && ftemp > 136) {
  console.log(((+ftemp - 32) * 5) / 9)
console.log("Enter a new number");
}
tempfunc(prompt("Input degrees in Farenheit"))