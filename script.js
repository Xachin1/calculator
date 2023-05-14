/*HINTS FOR CALCULATOR 

1. GRAB ALL THE BUTTONS FIRST
2. GRAB THE DISPLAY ELEMENT and make display element as 0(zero)
3. LOOP THROUGH ALL THE BUTTONS 
4. ADD CLICK EVENT LISTNER TO THE BUTTON (inside the lopp)
5. GET THE CONTENT OF THE BUTTON and CHECK WHAT BUTTON IS BEING PRESSED
6. EX: IF USER PRESSED THE AC BUTTON, CLEAR THE CONTENT OF THE DISPLAY
7. EX: IF USER PRESSED THE DEL BUTTON, REMOVE THE LAST CHARACTER FROM THE DISPLAY TEXT
8. TRICKY: TO CONTROL THE POINT AND EQUALS TO OPERATOR 
9. CREATE A FUNCTION THAT CALCULATES THE TOTAL VALUE OF THE OPERATION
10. CREATE A FUNCTION THAT HANDLES THE DISPLAY OF THE ELEMENT ON THE SCREEN

*/

// const btns = document.querySelectorAll(".btn");

// const displayElem = document.querySelector(".display");
// let stringtoDisplay = "";

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("click");
//     let clickedButton = btn.innerText;

//     if (clickedButton === "AC") {
//       stringtoDisplay = "";
//       return displayResult("");
//     }
//     if (clickedButton === "←") {
//       stringtoDisplay = stringtoDisplay.slice(0, -1);
//       return displayResult(stringtoDisplay);
//     }
//     stringtoDisplay = stringtoDisplay + clickedButton;

//     if (clickedButton === "=") {
//       return onTotal();
//     }

//     let operators = ["+", "-", "/", "*", "%"];

//     if (operators.includes(clickedButton) && !stringtoDisplay.length) {
//       return;
//     }

//       if (operators.includes)

//     displayResult(stringtoDisplay);
//   });
// });

// const displayResult = (value) => {
//   displayElem.innerText = value || 0;
// };

// const onTotal = () => {
//   const total = eval(stringtoDisplay);
//   stringtoDisplay = "";
//   displayResult(stringtoDisplay);
// };
const btns = document.querySelectorAll(".btn");
const displayElem = document.querySelector(".display");
let stringToDisplay = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let clickedButton = btn.innerText;

    if (clickedButton === "AC") {
      stringToDisplay = "";
      return displayResult("");
    }

    if (clickedButton === "←") {
      stringToDisplay = stringToDisplay.slice(0, -1);
      return displayResult(stringToDisplay);
    }

    if (clickedButton === "=") {
      return onTotal();
    }

    if (clickedButton === ".") {
      // Check if decimal point already exists in the string
      if (stringToDisplay.includes(".")) {
        return;
      }
      // If not, append the decimal point
      stringToDisplay += clickedButton;
      return displayResult(stringToDisplay);
    }

    // Check if an operator button is clicked
    let operators = ["+", "-", "/", "*", "%"];
    if (operators.includes(clickedButton)) {
      // Check if the string is empty or ends with an operator
      if (
        !stringToDisplay.length ||
        operators.includes(stringToDisplay.slice(-1))
      ) {
        return;
      }
      stringToDisplay += clickedButton;
      return displayResult(stringToDisplay);
    }

    // Append the clicked button to the string
    stringToDisplay += clickedButton;
    displayResult(stringToDisplay);
  });
});

const displayResult = (value) => {
  displayElem.innerText = value || 0;
};

const onTotal = () => {
  // Check if the string ends with an operator
  let operators = ["+", "-", "/", "*", "%", "="];
  if (operators.includes(stringToDisplay.slice(-1))) {
    return;
  }
  const total = eval(stringToDisplay);
  stringToDisplay = total.toString();
  displayResult(total);
};
