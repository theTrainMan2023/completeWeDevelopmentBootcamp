/*var message = "Hello";
var name = "Frank!"
alert(message + " " + name)
name.length*/

// var essay = prompt("Compose your Tweet")
// var count = 280
// var charactersLeft = count - essay.length
// alert(name + ", " + "you have " + charactersLeft + " characters left." )

// var name = "Frankenstein";
// name.slice(0,5)

// var tweet = prompt("Compose your Tweet");
// var tweetUnder140 = tweet.slice(0,140);
// alert(tweetUnder140)
/*Alternatively - alert(prompt("Compose your tweet: ").slice(0,140));*/

// var dude = prompt("What is your name?");
// var firstLetter = dude.slice(0,1);
// var firstChar = firstLetter.toUpperCase();
// var restOfName = dude.slice(1, dude.length)
// restOfName = restOfName.toLowerCase();
// var realName = firstChar + restOfName
// alert("Hello " + realName + " thanks for participating!")

// var dogAge = prompt("What is your dog's age?");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert(humanAge);
// alert("Congratulations you are " + (newHumanAge + 21) + " years old!")

/*function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottles + " bottles of Milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(10);*/

// function lifeInWeeks(age) {
//     var yearsRemaining = 90- age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
// }
// lifeInWeeks(1);

//Function # 2
//   function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveRight");
//   var numberOfBottles = Math.floor(money / 1.5);
//   console.log("buy " + numberOfBottles + " bottles of Milk")
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   return money % 1.5; //Out put of getMilk function}
// }
// var change = getMilk(4) //outpt assigned to the variable change
// console.log(change);


//Function #3
//   function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveRight");
// //   var numberOfBottles = Math.floor(money / 1.5); Created a calcBottles Function
//   console.log("buy " + calcBottles(money/*startingMoney*/, 1.5/*costPerBottle*/) + " bottles of Milk")
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   return money % 1.5; //Out put of getMilk function}
// }

// function calcBottles(startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle); //Cost is stored in numberOfBottles
//   return numberOfBottles; //return as an output
// }

// getMilk(30);

// //Function #3 Created FUNCTIONS outside the original code
//   function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveRight");
// //   var numberOfBottles = Math.floor(money / 1.5); Created a calcBottles Function
//   console.log("buy " + calcBottles(money/*startingMoney*/, 1.5/*costPerBottle*/) + " bottles of Milk")
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   // return money % 1.5; //Out put of getMilk function}
//     return calcChange(money, 2)
// }

// function calcBottles(startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle); //Cost is stored in numberOfBottles
//   return numberOfBottles; //return as an output
// }

// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change
// }

// console.log("Hello Sir, here is your " + "R" + getMilk(30) + " change!");

// //Function #3 - Having TWO PARAmeters
// function getMilk(money, costPerBottle) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveRight");
//   //   var numberOfBottles = Math.floor(money / 1.5); Created a calcBottles Function
//     console.log("buy " + calcBottles(money/*startingMoney*/, costPerBottle) + " bottles of Milk")
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     // return money % 1.5; //Out put of getMilk function}
//       return calcChange(money, costPerBottle)
//   }
  
//   function calcBottles(startingMoney, costPerBottle) {
//       var numberOfBottles = Math.floor(startingMoney / costPerBottle); //Cost is stored in numberOfBottles
//     return numberOfBottles; //return as an output
//   }
  
//   function calcChange(startingAmount, costPerBottle) {
//     var change = startingAmount % costPerBottle;
//     return change
//   }
  
//   console.log("Hello Sir, here is your " + "R" + getMilk(10, 3) + " change!");

//BMI Calculator
// function bmiCalulator(weight, height) {
//     var bmi = weight / Math.pow(height, 2); //(height * height)
//     return Math.round(bmi);
// }

// console.log("Excuse me Sir!, your BMU score is: " + bmiCalulator(99, 1.8));

//LEAP YEAR Calculator
// function isLeap(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return "Not leap year."
//       }
//     }else{
//       return "Leap year."
//     }
    
//   } else {
//     return "Not a leap year"
//   }
// }

// console.log(isLeap(2024));

// 5. ARRAYS
// var guest = prompt("What is you name?")
// var guestList = ["Frank", "Peter", "Helen", "Amanda", "Tina", "Melanie", "Jason"]

// if(guestList.includes(guest)) {
//     alert("Welcome and thank you for joinning us.")
// }else {
//     alert("Sorry, you are short")
// }

// FIZ Z BUZZ
// function fizzBuzz(number) {
//   if (number % 3) {
//     return "Fizz"    
//   }
//   if(number % 5){
//     return "Buzz"
//   }
//   if (number % 3 && number % 5) {
//     return "FizzBuzz"
//   }
// }   

// console.log(fizzBuzz(15));

// var newArray = [];
// var count = 1;

// function fizzBuzz() {

//   while(count <= 100){

//   if (count % 3 === 0 && count % 5 == 0) {
//     newArray.push(" Fizz Buzz ")
//   }
//   else if (count % 3 === 0) {
//     newArray.push(" fizz ")
//   }else if(count % 5 === 0){
//     newArray.push(" Buzz ")
//   }else {
//     newArray.push(count);
//   }
//   count++
//   }
//   console.log(newArray);
// }

// BOttles of BEER
var numBottles = 99;
while (numBottles >= 0) {
    var bottleWord = "bottle";
        if (numBottles === 1) {
        bottleWord = "bottles"
    }
    console.log(numBottles + " " + bottleWord + " of beer on the wall");
    console.log(numBottles + " " + bottleWord + " of beer, ");
    console.log("Take one down, pass it around,");
    numBottles --;
    console.log(numBottles + " " + bottleWord + " of beer on the wall.")
}
