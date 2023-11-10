/** Normal or Named Function toClick a Button**/
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert(" I got Clicked!");
// }

/** Anonymous Function for the same Code above **/
// document.querySelector("button").addEventListener("click", function () {
//     alert(" I got Clicked!");
// });

/** Code to ensure Responds from all button when Clicking on it**/
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert(" I got Clicked!");
        /** Sound File Added**/
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

        this.style.color = "white"
    });
}

/*** CALCULATOR CODE ***/

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2)
// }

// console.log(calculator(50, 5, divide));