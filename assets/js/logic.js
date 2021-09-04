// variables

var saveBtn = document.getElementById("saveBtn")
var taskNine = document.getElementById("9hr")
var timeDisplay = $("#timeDisplay")
var now = moment().format("ha");
  //array for storing text area 
var list = JSON.parse(localStorage.getItem('inputList')) || [];


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
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",

]


for (let i = 0; i < times.length; i++) {
    var row = $("<div class='row'>")
    var hour = $('<div class ="hour">')
    var input = $('<textarea id="input">"')
    var saveBtn = $('<button class="saveBtn"> save</button>')
   
    hour.text(times[i])

    row.append(hour,input,saveBtn)
    timeDisplay.append(row)

    checkTime(times[i], input)
    
}


function checkTime (time, timeBlock) {
    if (time === now.toString()) {
        timeBlock.addClass("present")
    } else if (moment(now).toString > (time)) {
        timeBlock.addClass("past")
    } else {
        timeBlock.addClass("future");
    }};



    function renderSaveData(list) {

        $('#input').empty();
    
        for (var i=0; i < list.length; i++) {
            var listItem = $('#input');
            listItem.text(list[i])
        }
    
        $('#input').append(listItem)
    }
    
    $("#saveBtn").on('click', function() {
        var listInput = $('#input')
        .val()
        .trim();

        list.push(listInput);

        localStorage.setItem('inputList', JSON.stringify(list));

    })


    renderSaveData(list)
