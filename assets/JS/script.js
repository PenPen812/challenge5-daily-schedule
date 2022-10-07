

// 1. CurrentDay
var currentDayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] h:mm:ss a');
    currentDayEl.text(rightNow);
}

displayTime();


// 2. Time blocks for standard business hours show on the schedule
hourEl.attr('class', 'hour')
timeBlockEl.attr('class', 'timeBlock')
descriptionEl.attr('class', 'description')



// 3. Color indicates whether in the past, present, or future
pastEl.attr('class', 'past')
presentEl.attr('class', 'present')
futureEl.attr('class', 'future')


// 4. Enter an event function into a time block
textareaEl.text('class', 'textarea')

document.addEventListener('description', function () {

    var displayTime = new Date().getHours();
    if (displayTime >= past && displayTime < 0) {

        document.present();
    } else if (displayTime >= future && displayTime < 0) {
        document.future();
    } else if (displayTime >= present && displayTime < 0) {
        document.past();
    }

});
// 5. Data saved in local storage
saveBtnEl.attr('class', 'saveBtn')


// 6. Saved events persist after refreshing the page

localStorage.description
console.log(localStorage.description);

// set new submission to local storage 

var submission = $('description');

var description = function (event) {
    event.preventDefault();

    var submission = descriptionEl.val();

    printDescription(submission);
}