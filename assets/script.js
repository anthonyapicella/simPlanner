// displays current date and time when page loads

$("#currentDay").text(moment().format('MMMM Do, YYYY | h:mm a'));

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


// pull any previously saved entries and display on page load...