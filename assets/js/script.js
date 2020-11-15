
// var today = moment().format('dddd, MMMM Do YYYY');
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do YYYY'));

// header id's
$(headerDescDiv).attr("id", "headerDesc");
$(headerDayDiv).attr("id", "headerDay");

// header text
headerH2.textContent = "Plan My Day";
headerDescDiv.textContent = "Make the most of today, plan it, and stay on task";
// headerDayDiv.textContent = today;

// place header in html
$("body").append(headerEl);
$(headerEl).append(headerH2);
$(headerEl).append(headerDescDiv);
$(headerEl).append(headerDayDiv);

// create form
var formCon = document.createElement("div");
var formEl = document.createElement("form");
var formLa = document.createElement("label");
var formIn = document.createElement("input");
var formBtn = document.createElement("input");

// form id's
$(formCon).attr("id", "formCon");
$(formEl).attr("id", "formEl");
$(formLa).attr("id", "formLa");
$(formIn).attr("id", "formIn");
$(formIn).attr("type", "text");
$(formBtn).attr("id", "formBtn");
$(formBtn).attr("type", "submit");

console.log(moment().hours());

const timeBlocks = [ "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM" ]

// const timeBlocks = [
//     {
//         hour: "9AM",
//         entry: "",
//         submit: "",
//     }
// ]