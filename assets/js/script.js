
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do YYYY'));

var currentHour = moment().hours();

const timeBlocks = [
    {
        time: "9AM",
        hour: 9,
    },
    {
        time: "10AM",
        hour: 10,
    },
    {
        time: "11AM",
        hour: 11,
    },
    {
        time: "12PM",
        hour: 12,
    },
    {
        time: "1PM",
        hour: 13,
    },
    {
        time: "2PM",
        hour: 14,
    },
    {
        time: "3PM",
        hour: 15,
    },
    {
        time: "4PM",
        hour: 16,
    },
    {
        time: "5PM",
        hour: 17,
    },
]

timeBlocks.forEach(showTimeBlocks);

function showTimeBlocks(timeBlock) {
    console.log(timeBlock);
    var rowDiv = document.createElement("div");
    var hourDiv = document.createElement("div");
    var textAreaEl = document.createElement("textarea");
    var buttonEl = document.createElement("button");
    var imgEl = document.createElement("img");

    $(imgEl).attr("src", "./assets/images/floppy_disc.png");
    $(rowDiv).attr("class", "row");
    $(hourDiv).attr("class", "col-xl-1 hour");
    $(textAreaEl).attr("class", "col-xl-10 hour");
    $(buttonEl).attr("class", "col-xl-1 saveBtn");
        
    $(".container").append(rowDiv);
    $(rowDiv).append(hourDiv);
    $(rowDiv).append(textAreaEl);
    $(rowDiv).append(buttonEl);
    $(buttonEl).append(imgEl);
    hourDiv.innerHTML = timeBlock.time;

    if (timeBlock.hour < currentHour) {
        $(textAreaEl).removeClass("hour").addClass("past");
    } else if (timeBlock.hour === currentHour) {
        $(textAreaEl).removeClass("hour").addClass("present");
    } else $(textAreaEl).removeClass("hour").addClass("future");
}