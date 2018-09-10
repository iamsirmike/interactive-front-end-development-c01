var today = new Date(); //assign Date to today
var hourNow = today.getHours(); //get the hours value from the date
var greeting;  //Declare greeting variable

//
if (hourNow > 18) {
    greeting = 'Good evening!'; //if hours is greater than 18 display good evening
} else if (hourNow > 12) {
    greeting = 'Good afternoon!'; //if hours is greater than 12 display good afternoon 
} else if (hourNow > 0) {
    greeting = 'Good morning!'; //if hours is greater than 0 display good morning
} else {
    greeting = 'Welcome!';// else diplay welcome if all the statements equate to false
}

// document.write('<h3>' + greeting + '</h3>'); //write greeting on the html page
document.getElementById("greetings").innerHTML = greeting;
console.log(today);
