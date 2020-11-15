
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do YYYY'));

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

// var appendTimeBlock = {
//     $(rowDiv).append(hourDiv),
//     $(rowDiv).append()
// }
// $(buttonEl).append(imgEl);

var currentHour = moment().hours();

console.log(currentHour)

// const timeBlocks = [ "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM" ]

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

// console.log(timeBlocks[0].time);

// timeBlocks.forEach(showTimeBlocks);

// function createTimeBlocks() {
//     showTimeBlocks();
//     timeBlocks++
// }

function showTimeBlocks(timeBlock) {
    $(".container").append(rowDiv);
    $(rowDiv).append(hourDiv);
    $(rowDiv).append(textAreaEl);
    $(rowDiv).append(buttonEl);
    $(buttonEl).append(imgEl);
    hourDiv.innerHTML = timeBlock.time;
    // timeBlock++
}

console.log(showTimeBlocks);

// showTimeBlocks();