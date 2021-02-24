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

