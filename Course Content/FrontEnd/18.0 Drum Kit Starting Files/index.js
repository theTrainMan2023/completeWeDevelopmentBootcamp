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
        //this method - triggers the .drum class to do something
        // this.style.color = "white"
        
        // SWITCH STATMENT
        // target the button in html
    var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        // See line 155 - function was created
        // switch (buttonInnerHTML) {
        //     case "w":
        //         /** Sound File Added**/
        //         var tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //         break;
        //     case "a":
        //         var tom2 = new Audio('sounds/tom-2.mp3');
        //         tom2.play();
        //         break;
        //     case "s":
        //         var tom3 = new Audio('sounds/tom-3.mp3');
        //         tom3.play();
        //         break;
        //     case "d":
        //         var tom4 = new Audio('sounds/tom-4.mp3');
        //         tom4.play();
        //         break;
        //     case "j":
        //         var crash = new Audio('sounds/crash.mp3');
        //         crash.play();
        //         break;
        //     case "k":
        //         var snare = new Audio('sounds/snare.mp3');
        //         snare.play();
        //         break;
        //     case "l":
        //         var kick = new Audio('sounds/kick-bass.mp3');
        //         kick.play();
        //         break;        
        //     default:
        //         console.log(buttonInnerHTML);
        // }
        //Construction Function here should look like
        // function Audio(fileLocation) {
        //     this.fileLocation = fileLocation;
        //     (Method)this.play = function () {
                //Tap into the audop hardware
                //Check file at fileLocation
                //check at fileLocation is sound file
                //play the file
        //     }
        // }
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

// OBJECTS - Properties with Data attached to it
//The old way of doing things
var maidServices1 = {
    name: "Princess",
    age: 28,
    experience: "true",
    yearsOfExpereince: 15,
    cleaningExperience: ["bedroom", "bathroom", "ballroom"],
    langauges: ["afrikaans", "french", "english", "german"],
    birthday: "13 May 1980"
}

// CONSTRUCTOR Fuctions - this replaces having to type out name, age etc - CREATES OBJECTS
function BellBoy(name, age, experience, yearsOfExpereince, cleaningExperience, languages, birthday) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.yearsOfExpereince = yearsOfExpereince;
    this.cleaningExperience = cleaningExperience;
    this.languages = languages;
    this.birthday = birthday;
    //Adding the fution into the Construction Function
    this.moveSuitcase = function() {
        alert("May I take your suitcase")
        pickUpSuitcase();//another function created
        move();//another function created
    }
}
//BellBoy1.moveSuitcase();

var houseKeeper1 = new HouseKeeper1("penny", 25, "true", 12, ["bedroom", hallroom], ["english", "afrikaans"], "13 May 1980")
//console.log(houseKeeper1.name or age or experience - dot property is used);

//METHODS
//this is the OBJECT
var maidServices1 = {
    name: "Princess",
    age: 28,
    experience: "true",
    yearsOfExpereince: 15,
    cleaningExperience: ["bedroom", "bathroom", "ballroom"],
    langauges: ["afrikaans", "french", "english", "german"],
    birthday: "13 May 1980",
    //Function associated with an OBJECT
    moveSuitcase: function() {
        alert("Cleaning is done")
        cleaning();
        
    }
}
//Calling the Method
//maidServices1.moveSuitcase();

//Listening to KEYBOARD Buttons
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    // alert("Key was pressed")
})

function makeSound(key) {
    switch (key) {
        case "w":
            /** Sound File Added**/
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;        
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}