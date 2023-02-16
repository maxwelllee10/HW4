
n1 = prompt("Enter a number")
n2 = prompt("Enter second number")
operator = prompt("Enter an operation(*,+,-,/)")

const myFunc = (n1, n2) => {
  if (operator === "+") {
  console.log(+n1 + +n2)
}else if (operator === "-"){
  console.log(+n1 - +n2)
} else if (operator === "*"){
  console.log(+n1 * +n2)
} else {
  console.log(+n1 / +n2)
}
}

myFunc(n1, n2)
