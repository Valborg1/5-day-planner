
$(document).ready(function(){

// Set Date At Top of Screen
var currentDay = $("#currentDay");
currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);


// Set Local Storage when Save is Clicked
$("button.saveBtn").on("click", function() {
    var timeText = $(this).siblings("textarea.description").val();
    var timeID = $(this).siblings("textarea.description").attr("id");
    localStorage.setItem(timeID, timeText);
});


// Set Time Text from Local Storage
for (var i = 8; i < 17; i++) {
    var timeText = localStorage.getItem("hour" + [i]);
    $("#hour" + [i]).val(timeText);
}


// Set Time Text Background Based on Current Time


});