//Website//Website Animation
//alternative "hide", "show" or "toggle" to hide or show an Element

// $("button").on("click", function(){
//     $("h3").hide(); 

// });

// $("button").on("click", function(){
//     $("h3").fadeToggle(); 
// }, 200);
// $("button").on("click", function(){
//     $("h3").fadeIn(); 
// });
//toggle shuts it down quick

// $("button").on("click", function(){
//     $("h3").slideToggle(); 
// });


// $("button").on("click", function(){
//     $("h3").animate({
//         opacity: 0.5,
//         fontSize: 32,
//     }); 
// }); //Only Numeric Value in curly braces

//Chaining the ANIMATE
$("button").on("click", function(){
    $("h3").slideUp().slideDown().animate({
        opacity: 0.5,
    }); 
}); //Only Numeric Value in curly braces