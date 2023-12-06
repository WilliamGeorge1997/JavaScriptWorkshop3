// Part1 Lap1 Login

function login() {
    var isLogin = false;

  while (!isLogin) {
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");
    

    if (username === "admin" && password === "421$$") {
      alert("Welcome login success!");
      isLogin = true;
      break
    } 

    else {
      if (username !== "admin" && password !== "421$$") {
        alert(
          "Both username and password are incorrect, Please enter correct username and password."
        );
      } else if (username !== "admin") {
        alert("Username is incorrect, Please enter correct username.");
      } else {
        alert("Password is incorrect, Please enter correct password.");
      }
    }
  }
}
login();

//--------------------------------------------------------------------------------------------------
//Part1 Lap2 Calc 

var firstNumber = parseFloat(prompt("Enter the first number:"));
var operation = prompt("Enter the one of the following operations (+ , - , * , / , %):");
var secondNumber = parseFloat(prompt("Enter the second number:"));

var result;

switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  case "%":
    result = firstNumber % secondNumber;
    break;
  default:
    result = "Invalid operation";
}


alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
//------------------------------------------------------------------------------------------------
//Bouns lap2

var continueOperations = true;

while (continueOperations) {
  var newOperation = prompt("Enter the one of the following operations (+ , - , * , / , %) to be performed on the result or 'exit' to quit:");

  if (newOperation === "exit") {
    continueOperations = false;
    break;
  }else if(newOperation === null){
    continueOperations = false;
    break;
  }

  var newNumber = parseFloat(prompt("Enter the number:"));

  switch (newOperation) {
    case "+":
      result += newNumber;
      break;
    case "*":
      result *= newNumber;
      break;
    case "-":
      result -= newNumber;
      break;
    case "/":
      result /= newNumber;
      break;
    case "%":
      result %= newNumber;
      break;
    default:
      alert("Invalid operation");
  }

  alert(`The new result is: ${result}`);
}

alert("Calculator program ended.");


