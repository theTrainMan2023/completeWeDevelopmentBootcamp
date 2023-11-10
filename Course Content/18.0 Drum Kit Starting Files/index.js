/** Normal or Vanilla Function toClick a Button**/
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
        alert(" I got Clicked!");
    });
}
