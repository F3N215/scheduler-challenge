// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

/* $(document).ready (function() {
var showTime = document.querySelector("#currentDay"); // returns current date/time */

$document.ready (function() {

var showTime = document.querySelector("#currentDay"); // displays current date/time
var currentTime = dayjs().format("dddd,MMMM D, YYYY, h:mm:ss a");
showTime.textContent = currentTime;

$(".saveBtn").on("click", function(){ // add event listener, returns row id
  var text = $(this).sublings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text); // saves row id to local storage
});
})

function trackHours(){ // pull number of hours
  var currentHour = dayjs().hour();
  var hourBlock = parseInt($(this).attr("id").split("-")[1]);

  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);

      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).pullClass("past");
        $(this).addClass("present");
      } else {
        $(this).pullClass("past");
        $(this).pullClass("present");
        $(this).addClass("future");
      }  
    });
}
trackHours();


$(function () {});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. <-- DONE
  
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.