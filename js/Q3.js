const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circumference: function() {
    let circumcircle = 2 * Math.PI * r;
    return circumcircle;
  },

area: function(){
    let areacircle = Math.PI * r * r;
    return areacircle
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
