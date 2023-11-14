//Numbers
//Math.Random

// var next = Math.random();
//     Math.floor(next * 6)// next = next * 6;
//     // next = Math.floor(next)
// console.log(next);

// var boyName = prompt("What is your name?")
// var girlName = prompt("What is your name?")
// var score = Math.random();
// score = score * 100
// score = Math.floor(score);
// alert(boyName + " loves " + girlName + " " + score + "%")

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert(boyName + " loves " + girlName + " " + loveScore + "%")


//IF ELSE Statements
// /*var boyName = */prompt("What is your name?")
// /*var girlName = */prompt("What is your name?")
// var score = Math.random();
// score = score * 100
// score = Math.floor(score);
// alert(boyName + " loves " + girlName + " " + score + "%")

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert(boyName + " loves " + girlName + " " + loveScore + "%")

//IF Statements or Control Flow

// if(loveScore === 100){
//     alert("Your love Score is " + loveScore + "%" + "You love each other like the rain")
// }else {
//     alert("Your love Score is " + loveScore + "%")
// }

//OR

// if(loveScore > 75){
//     alert("Your love Score is " + loveScore + "%" + " " + "You love each other like the rain")
// }else {
//     alert("Your love Score is " + loveScore + "%")
// }

// //Comparators

// //COmbine comparators
// if(loveScore > 70){
//     alert("Your love Score is " + loveScore + "%" + " " + "CONGRATULATIONS!!!!!!!")
// }

// if(loveScore > 30 && loveScore <= 70){
// alert("Your love Score is " + loveScore + "%" + " " + "You love each other like the rain")
// }

// if(loveScore <= 30){
// alert("Your love Score is " + loveScore + "%" + " SORRRRRRRYYYYYYYYYYYYYYYYYYYYYYYY!!!")
// }

//BMI Calculator IF STATEMENTS
function bmiCalculator(weight, height) {
    var interpretation = weight / Math.pow(height, 2);
    return Math.round(interpretation);

    if(interpretation > 24.) {
        return("Your BMI is " + interpretation + " so you are OVERweight")
    }
    if(interpretation > 18.5 && interpretation <= 24.9){
        return("Your BMI is " + interpretation + " so you are NORMAL weight");
    }
    if (interpretation < 18.5) {
        return("Your BMI is " + interpretation + " so you are UNDERweight")
    }
}

console.log(bmiCalculator(90, 1.8));
