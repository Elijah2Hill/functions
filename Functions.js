const fullName1 = "Noah";
const fullName2 = "Jackson";
const fullName3 = "Elijah"
const getInitials = (name) => {
  let initials = name.split(' ');
  
  if(initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 1);
  }
  
  return initials.toUpperCase();
}

console.log(getInitials(fullName1)) // N
console.log(getInitials(fullName2)) // J
console.log(getInitials(fullName3)) // E
console.log("The name " + fullName3 + " starts with the letter " + getInitials(fullName3))
alert("The name " + fullName3 + " starts with the letter " + getInitials(fullName3))

// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}