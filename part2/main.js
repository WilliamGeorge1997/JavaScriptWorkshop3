//Part2 Lap1

  var tryAgain = true

while(true){

  if(!tryAgain){
    alert("Program ended.")
    break;
  }

var arrCount = prompt("How many numbers do you want to enter?");

var numbers = [];
var sum = 0;
var avg = 0;
if(arrCount === null || !arrCount){
  alert("Invalid value, Program ended.")
  break;
}
for (var i = 0; i < arrCount; i++) {
  var number = parseInt(prompt(`Enter your number (${i + 1}):`));
  numbers.push(number);
  sum += number;
}

avg = sum / numbers.length;
if(!isNaN(sum) || !isNaN(avg)){
alert(`The sum = ${sum}`);
alert(`The avg = ${avg}`);
}else{
  alert("Invalid value, Please try again.")
}

tryAgain = confirm("Do you wan to enter new numbers?")
}

// --------------------------------------------------------------------------------------
// Part2 Lap2

  var contacts = [];

  // Function to add a contact
  function addContact() {
    var name = prompt("Enter the name of the contact:");
    var phoneNumber = prompt("Enter the phone number:");


    var contact = {
      name: name,
      phoneNumber: phoneNumber
    };


    contacts.push(contact);

    alert(`Contact added successfully:\nName: ${name}\nPhone Number: ${phoneNumber}`);
  }

  // Function to search for a contact
  function searchContact() {
    var searchQuery = prompt("Enter the name or phone number to search:");


    var foundContacts = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phoneNumber.includes(searchQuery)
      );
    });

    if (foundContacts.length > 0) {
      
      foundContacts.forEach(contact => {
        alert(`Search Results: \nName: ${contact.name}\nPhone Number: ${contact.phoneNumber}`);
      });
    } else {
      alert("No contacts found.");
    }
  }


  while (true) {
    var operation = prompt("Enter operation ('add' or 'search', or 'exit' to end):")
    

    if (operation === 'add') {
      addContact();
    } else if (operation === 'search') {
      searchContact();
    } else if (operation === 'exit') {
      break;
    } else {
      alert("Invalid operation. Please enter 'add' or 'search' or 'exit' to end.");
    }
  }
//-------------------------------------------------------------------------------------------------
//Bonus 
let shape = (prompt("Enter the name of the shape you want to calculate the area for:")).toLocaleLowerCase();

if (shape === "circle") {
  let radius = parseFloat(prompt("Enter the radius of the circle:"));
  let area = Math.PI * radius * radius;
  alert("The area of the circle is: " + area);
} else if (shape === "triangle") {
  let base = parseFloat(prompt("Enter the base length of the triangle:"));
  let height = parseFloat(prompt("Enter the height of the triangle:"));
  let area = 0.5 * base * height;
  alert("The area of the triangle is: " + area);
} else if (shape === "square") {
  let side = parseFloat(prompt("Enter the length of a side of the square:"));
  let area = side * side;
  alert("The area of the square is: " + area);
} else if (shape === "rectangle") {
  let length = parseFloat(prompt("Enter the length of the rectangle:"));
  let width = parseFloat(prompt("Enter the width of the rectangle:"));
  let area = length * width;
  alert("The area of the rectangle is: " + area);
} else if (shape === "parallelogram") {
  let base = parseFloat(prompt("Enter the base length of the parallelogram:"));
  let height = parseFloat(prompt("Enter the height of the parallelogram:"));
  let area = base * height;
  alert("The area of the parallelogram is: " + area);
} else if (shape === "trapezium") {
  let base1 = parseFloat(prompt("Enter the length of the first base of the trapezium:"));
  let base2 = parseFloat(prompt("Enter the length of the second base of the trapezium:"));
  let height = parseFloat(prompt("Enter the height of the trapezium:"));
  let area = 0.5 * (base1 + base2) * height;
  alert("The area of the trapezium is: " + area);
} else if (shape === "ellipse") {
  let majorAxis = parseFloat(prompt("Enter the length of the major axis of the ellipse:"));
  let minorAxis = parseFloat(prompt("Enter the length of the minor axis of the ellipse:"));
  let area = Math.PI * majorAxis * minorAxis;
  alert("The area of the ellipse is: " + area);
} else {
  alert("Invalid shape entered!");
}
