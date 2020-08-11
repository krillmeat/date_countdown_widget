console.log("HI");
let widgetElem = document.querySelector(".date-countdown-widget");
let calendarElem = document.getElementById("upcoming-date");

    calendarElem.addEventListener("change", handleCalendarUpdate);


function handleCalendarUpdate(e){
    console.log("DO A THING: ",e.currentTarget.value);

}