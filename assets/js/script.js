// create header elements
var headerEl = document.createElement("header");
var headerH2 = document.createElement("h2");
var headerDescDiv = document.createElement("div");
var headerDayDiv = document.createElement("div");
var today = moment().format('dddd, MMMM Do YYYY');

// header text
headerH2.textContent = "Plan My Day";
headerDescDiv.textContent = "Make the most of today, plan it, and stay on task";
headerDayDiv.textContent = today;

// header id's
$(headerDescDiv).attr("id", "headerDesc");
$(headerDayDiv).attr("id", "headerDay");

// place header in html
$("body").append(headerEl);
$(headerEl).append(headerH2);
$(headerEl).append(headerDescDiv);
$(headerEl).append(headerDayDiv);