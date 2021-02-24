// displays current date and time when page loads

$("#currentDay").text(moment().format('MMMM Do, YYYY | h:mm a'));

var clearAll = document.getElementById("clear-my-schedule");

// add event listener to execute function on click

clearAll.addEventListener("click", function () {
    // clear storage
    localStorage.clear();
    location.reload();
});


// create function to check time and compare with 'time-block' -- change colors accordingly

var currentTime = moment();

$(".time-block").each(function colorCode() {
    var hourSlot = parseInt($(this).attr("id"));
    if (hourSlot < currentTime) {
        $(this).addClass("past");
      } 
      else if (hourSlot === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})

// create function that saves entries to local storage and executes on click 'saveBtn'

$(".saveBtn").on("click", function() {
    // use (this).'relative' and id/class to pull key and value
    var hour = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    // save to storage
    localStorage.setItem(hour, value);
});


// using query selector, pull any previously saved entries from local storage and display on page load

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("7"));

