//check if JQuery library is ready
// $(document).ready(){} place all code inside curly brackets.

// $("h1").css("color","red");

//Selecting Elements
$("h1");
$("button").css("padding", "2px 10px"); //Selects All the buttons

//adding multiple styles for the same Element
$("h1").addClass("big-title margin-50");

//Manipulating TEXT
$("h1").text("Good, Bye!")
$("button").text("Don't Click Me!!")
$("button").html("<em>Hello You</em>")

//Manipulating ATTRIBUTES
$("img").attr("src");
$("a").attr("href", "https://www.facebook.com") //Looks for all the anchor tags and redirect them to that website stipulated.


//Adding EVENT LISTERNER
$("h1").click(function(){
    $("h1").addClass("big-title-2");
    $("h1").text("Perfect it Works!")
}); //Callback function

// $("button").click(function(){
//     $("h1").css("color", "white")
// });

$("input").keypress(function(event){
    console.log(event.key);
}); //registers event when keyboard is used

//Test keypress updates the h2
$(document).keypress(function(event){
    $("h2").text(event.key)
});

//Alternative to "click" or keypress functions
$(h2).on("mouseover", function(){
    $("h2").css("color", "red")
});

//ADDing new elements
$("h2").before("<button>New Button</button>");
$("h2").afer("<button>New Button</button>");
$("h2").prepend("<button>New Button</button>");//before contents
$("h2").append("<button>New Button</button>");//after contents of the element
$("button").remove(); //removes all the elments

//Website Animation
$("button").on("click", function(){
    $("h3").hide(); //alternative "show" or "toggle" to hide or show an Element
});

