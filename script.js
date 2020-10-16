
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
for (var i = 8; i < 23; i++) {
    var timeText = localStorage.getItem([i]);
    $("#" + [i]).val(timeText);
}

// Set Time Text Background Based on Current Time
var time = moment().format('HH');
console.log(time);

function setColors() {
    for (var j = 8; j < 23; j++) {
    var ID = ($("#"+[j]).attr("id"))
    ID = Number(ID);

    console.log(ID);
    if (ID < time) {
        $("#" + [j]).addClass("past");
    } else if (ID > time) {
        $("#" + [j]).addClass("future");
    } else if (ID = time) {
        $("#" + [j]).addClass("present");
    } else {
        console.log("huh?");
    }
  }
}

setColors();

// Update Colors every minute
setInterval(function() {
    setColors();
}, 60 * 1000); 

});