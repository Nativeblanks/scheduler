// variables
var saveBtn = document.getElementById("saveBtn")
var taskNine = document.getElementById("9hr")
var timeDisplay = $("#timeDisplay")
var now = moment().format("H");


var timesData = [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
var times = [
    "9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm",
    "6pm","7pm","8pm","9pm","10pm","11pm",];
  //array for storing text area 
  var savedInputList = ["", "", "", "", "", "", "", "", "", "", "", "", "","", ""];




    // loop for creating the rows, times , save button
    for (let i = 0; i < times.length; i++) {
        var row = $("<div class='row'>");
        var hour = $('<div class ="hour">');
        var input = $('<textarea id="input">"');
        var saveBtn = $('<button class="saveBtn"> save</button>');

//  connects the timesdata with the corresponding time 
    input.attr("time",timesData[i]);
    var timeAt = input.attr('time');

        hour.text(times[i]);

        row.append(hour,input,saveBtn);
        timeDisplay.append(row);

        checkTime(timeAt, input);
        // console.log(times[i])

    }



function checkTime (time, timeBlock) {
    // console.log(time);
    // // console.log(time === now)
    // console.log(now);
    // console.log (parseInt(now) > parseInt(time));
    if (parseInt(time) === parseInt(now)) {
        timeBlock.addClass("present");
    } else if (parseInt(now) > parseInt(time)) {
        timeBlock.addClass("past");
    } else {
        timeBlock.addClass("future");
    }};


    //Logic for saving our textarea value on click
    function saveTextAreaOnClick() {
        $(".saveBtn").on("click", function () {
         
            //when the button is clicked we create a current Time Data var that will grab the time data of the text area we have selceted
            var currentTimeData = $(this).parent().attr("data-type");
            //We create a varible that will indicate the current text are we have selected by using the textarea class plus the current timedata
            var clickedTextarea = $("#input" + currentTimeData);
            //we then grab the data-type of the button we clicked which will be equals to the index spot of our SavedTextArray
            var rowToArrayCorrelation = $(this).attr("data-type");
            
            //We then save the current textarea value to the corresponding spot on the array
            savedInputList[rowToArrayCorrelation] = clickedTextarea.val();

            //store Array to local storage
            localInputList();
        });
    }

    function localInputList() {
        localStorage.setItem("savedtext", JSON.stringify(savedInputList));
    }

    saveTextAreaOnClick();

