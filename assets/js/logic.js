// variables

var saveBtn = document.getElementById("saveBtn")
var taskNine = document.getElementById("9hr")
var timeDisplay = $("#timeDisplay")
var now = moment().format("ha");


var times = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "11pm",
]

for (let i = 0; i < times.length; i++) {
    var row = $("<div class='row'>")
    var hour = $('<div class ="hour">')
    var input = $('<textarea>')
    var saveBtn = $('<button class="saveBtn"> save</button>')
   
    hour.text(times[i])

    row.append(hour,input,saveBtn)
    timeDisplay.append(row)

    checkTime(times[i], input)
}

function checkTime (time, timeBlock) {
    if (time === now.toString()) {
        timeBlock.addClass("present")
    } else if (moment(now).isAfter(time)) {
        timeBlock.addClass("future")
    } else {timeBlock.addClass("past")
    }};


